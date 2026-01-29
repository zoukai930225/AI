# 列表行选中复制填充 - 问题分析与修复

## 问题现象

选中2个单元格后页面直接卡死。

## 根本原因

在 `useTextSelection.ts` 的 `getCellPosition` 函数中，错误地将 vxe-table 的 `rowid` 当作数据数组索引使用：

```typescript
// 原代码 - 有问题
const rowIndex = parseInt(row.getAttribute('rowid') || '-1')
```

### 问题详解

vxe-table 中的 `rowid` 是行的**唯一标识符**，通常对应你配置的 `keyField`（在组件中是 `fieldKey: 'id'`），而不是数据在数组中的索引。

如果你的数据 ID 是这样的：
```javascript
[
  { id: 1000001, name: '张三' },
  { id: 1000002, name: '李四' }
]
```

那么选中这两行时：
- `startCell.row = 1000001`
- `endCell.row = 1000002`

在 `updateSelectionVisual` 和 `getSelectedText` 中执行循环：
```typescript
for (let rowIdx = minRow; rowIdx <= maxRow; rowIdx++) {
    // minRow = 1000001, maxRow = 1000002
    // 虽然只差1，但如果是其他情况，比如 ID 是 1 和 999999
    // 循环会执行近 100 万次！
}
```

即使只差1，每次循环都执行 `document.querySelector()`，性能也会很差。

## 修复方案

### 核心修改

1. **使用实际数据索引而非 rowid**

```typescript
// 修复后
interface CellInfo {
    rowIndex: number      // 数据在 data 数组中的实际索引
    colIndex: number      // 列索引
    rowId: string         // vxe-table 的 rowid (用于 DOM 查询)
    colId: string         // vxe-table 的 colid (用于 DOM 查询)
}

const getCellPosition = (cell: HTMLElement): CellInfo | null => {
    // ...
    const rowId = row.getAttribute('rowid') || ''
    
    // 关键修复：通过 vxe-table API 获取实际数据索引
    const rowData = table.getRowById(rowId)
    const rowIndex = data.findIndex((item: any) => item === rowData)
    
    return { rowIndex, colIndex, rowId, colId }
}
```

2. **在视觉更新时使用 vxe-table API 获取正确的 rowid**

```typescript
const updateSelectionVisual = () => {
    // 使用实际数据索引遍历
    for (let rowIdx = minRow; rowIdx <= maxRow; rowIdx++) {
        const rowData = data[rowIdx]
        // 使用 vxe-table API 获取该行的 rowid
        const rowId = table.getRowid(rowData)
        // 然后用 rowId 进行 DOM 查询
    }
}
```

3. **添加防抖和位置变化检测**

```typescript
// mousemove 时只有位置真正改变才更新
const handleMouseMove = (e: MouseEvent) => {
    // ...
    const currentEnd = selectionState.value.endCell
    if (currentEnd &&
        currentEnd.rowIndex === position.rowIndex &&
        currentEnd.colIndex === position.colIndex) {
        return  // 位置没变，不更新
    }
    
    selectionState.value.endCell = position
    debouncedUpdateSelectionVisual()  // 使用防抖
}
```

## 使用的 vxe-table API

| API | 作用 |
|-----|------|
| `table.getData()` | 获取所有数据数组 |
| `table.getColumns()` | 获取所有列配置 |
| `table.getRowById(rowid)` | 通过 rowid 获取行数据对象 |
| `table.getRowid(row)` | 通过行数据对象获取 rowid |

## 修复文件

修复后的完整代码见 `useTextSelection.ts`，主要改动：

1. 新增 `CellInfo` 接口，同时保存 `rowIndex`（数据索引）和 `rowId`（DOM 标识）
2. `getCellPosition` 函数使用 `table.getRowById()` 正确转换
3. `updateSelectionVisual` 使用 `table.getRowid()` 正确获取 DOM 查询用的 rowid
4. `getSelectedText` 使用 `rowIndex` 正确访问数据
5. 添加 `mousemove` 防抖和位置变化检测

## 测试建议

1. 测试普通连续选择（相邻几行）
2. 测试跨越多行的选择
3. 测试大 ID 值的数据（如 ID > 10000）
4. 测试虚拟滚动时的选择
5. 测试 Ctrl+C 复制功能
