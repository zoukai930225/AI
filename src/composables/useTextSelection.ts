import { ref, Ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { debounce } from 'lodash-es'

interface SelectionState {
    isSelecting: boolean
    startCell: CellInfo | null
    endCell: CellInfo | null
    selectedText: string
}

interface FillState {
    isFilling: boolean
    fillDirection: 'down' | 'up' | 'right' | 'left' | null
    fillEndCell: CellInfo | null
}

// 修改：使用更完整的单元格信息
interface CellInfo {
    rowIndex: number      // 数据在 data 数组中的实际索引
    colIndex: number      // 列索引
    rowId: string         // vxe-table 的 rowid (用于 DOM 查询)
    colId: string         // vxe-table 的 colid (用于 DOM 查询)
}

interface FillData {
    rowIndex: number
    field: string
    oldValue: any
    newValue: any
}

interface PasteData {
    rowIndex: number
    field: string
    oldValue: any
    newValue: any
}

interface UseTextSelectionOptions {
    tableRef: Ref<any>
    enabled?: Ref<boolean>
    onCopy?: (text: string) => void
    onFill?: (fillDataList: FillData[]) => void  // 填充回调
    onPaste?: (pasteDataList: PasteData[]) => void  // 粘贴回调
    onFillColumn?: (fillDataList: FillData[]) => void  // 填充整列回调
    excludeColumns?: string[]  // 排除的列（如操作列）
    fillableColumns?: string[] // 可填充的列，不设置则所有非排除列都可填充
}

export const useTextSelection = (options: UseTextSelectionOptions) => {
    const {
        tableRef,
        enabled = ref(true),
        onCopy,
        onFill,
        onPaste,
        onFillColumn,
        excludeColumns = ['operation', 'checkbox'],
        fillableColumns
    } = options

    const selectionState = ref<SelectionState>({
        isSelecting: false,
        startCell: null,
        endCell: null,
        selectedText: ''
    })

    const fillState = ref<FillState>({
        isFilling: false,
        fillDirection: null,
        fillEndCell: null
    })

    // 填充柄元素
    let fillHandle: HTMLElement | null = null

    // 缓存列信息，避免频繁获取
    let cachedColumns: any[] = []
    let cachedData: any[] = []

    // 刷新缓存
    const refreshCache = () => {
        const table = tableRef.value
        if (!table) return
        cachedColumns = table.getColumns() || []
        cachedData = table.getData() || []
    }

    // 获取单元格在表格中的位置 - 修复版本
    const getCellPosition = (cell: HTMLElement): CellInfo | null => {
        const row = cell.closest('.vxe-body--row') as HTMLElement
        const column = cell.closest('.vxe-body--column') as HTMLElement

        if (!row || !column) return null

        const table = tableRef.value
        if (!table) return null

        const rowId = row.getAttribute('rowid') || ''
        const colId = column.getAttribute('colid') || ''

        // 关键修复：通过 rowid 获取实际的数据索引
        const data = table.getData()
        const columns = table.getColumns()

        // 使用 vxe-table 的 API 获取行数据，然后找到其在 data 数组中的索引
        const rowData = table.getRowById(rowId)
        const rowIndex = data.findIndex((item: any) => item === rowData)

        // 获取列索引
        const colIndex = columns.findIndex((col: any) => col.id === colId)

        if (rowIndex === -1 || colIndex === -1) return null

        return { rowIndex, colIndex, rowId, colId }
    }

    // 检查列是否应该被排除
    const isExcludedColumn = (colIndex: number): boolean => {
        const table = tableRef.value
        if (!table) return false

        const columns = cachedColumns.length ? cachedColumns : table.getColumns()
        const column = columns[colIndex]

        if (!column) return false

        return excludeColumns.includes(column.field) ||
            column.type === 'checkbox' ||
            column.type === 'seq'
    }

    // 检查列是否可填充
    const isFillableColumn = (colIndex: number): boolean => {
        if (isExcludedColumn(colIndex)) return false

        const table = tableRef.value
        if (!table) return false

        const columns = cachedColumns.length ? cachedColumns : table.getColumns()
        const column = columns[colIndex]

        if (!column) return false

        // 如果指定了可填充列，则只有这些列可以填充
        if (fillableColumns && fillableColumns.length > 0) {
            return fillableColumns.includes(column.field)
        }

        return true
    }

    // 获取选中区域的文本内容 - 使用实际数据索引
    const getSelectedText = (): string => {
        const { startCell, endCell } = selectionState.value
        if (!startCell || !endCell) return ''

        const table = tableRef.value
        if (!table) return ''

        const data = table.getData()
        const columns = table.getColumns()

        // 使用实际的数据索引
        const minRow = Math.min(startCell.rowIndex, endCell.rowIndex)
        const maxRow = Math.max(startCell.rowIndex, endCell.rowIndex)
        const minCol = Math.min(startCell.colIndex, endCell.colIndex)
        const maxCol = Math.max(startCell.colIndex, endCell.colIndex)

        const lines: string[] = []

        for (let rowIdx = minRow; rowIdx <= maxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            const cells: string[] = []
            for (let colIdx = minCol; colIdx <= maxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx)) continue

                const field = column.field
                const value = rowData[field]
                cells.push(value !== undefined && value !== null ? String(value) : '')
            }

            if (cells.length > 0) {
                lines.push(cells.join('\t'))
            }
        }

        return lines.join('\n')
    }

    // 复制文本到剪贴板
    const copyToClipboard = async (text: string): Promise<boolean> => {
        if (!text) return false

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text)
                return true
            }

            // 降级方案
            const textarea = document.createElement('textarea')
            textarea.value = text
            textarea.style.position = 'fixed'
            textarea.style.left = '-9999px'
            textarea.style.top = '-9999px'
            document.body.appendChild(textarea)
            textarea.select()
            const success = document.execCommand('copy')
            document.body.removeChild(textarea)
            return success
        } catch (error) {
            console.error('复制失败:', error)
            return false
        }
    }

    // 显示提示
    const showTooltip = (message: string) => {
        const tooltip = document.createElement('div')
        tooltip.className = 'copy-tooltip'
        tooltip.textContent = message
        tooltip.style.left = `${window.innerWidth / 2}px`
        tooltip.style.top = `${window.innerHeight / 2}px`
        tooltip.style.transform = 'translate(-50%, -50%)'
        document.body.appendChild(tooltip)

        setTimeout(() => {
            tooltip.remove()
        }, 1500)
    }

    // 显示复制成功提示
    const showCopyTooltip = (text: string) => {
        showTooltip(`已复制 ${text.split('\n').length} 行数据`)
    }

    // 获取选中区域的边界
    const getSelectionBounds = () => {
        const { startCell, endCell } = selectionState.value
        if (!startCell || !endCell) return null

        return {
            minRow: Math.min(startCell.rowIndex, endCell.rowIndex),
            maxRow: Math.max(startCell.rowIndex, endCell.rowIndex),
            minCol: Math.min(startCell.colIndex, endCell.colIndex),
            maxCol: Math.max(startCell.colIndex, endCell.colIndex)
        }
    }

    // 创建填充柄元素（不立即添加到 DOM）
    const createFillHandleElement = (): HTMLElement => {
        const handle = document.createElement('div')
        handle.className = 'vxe-fill-handle'
        handle.title = '拖拽填充，双击填充整列'
        // 填充柄的鼠标事件
        handle.addEventListener('mousedown', handleFillHandleMouseDown)
        handle.addEventListener('dblclick', handleFillHandleDoubleClick)
        return handle
    }

    // 更新填充柄位置 - 将填充柄添加到右下角单元格内部
    const updateFillHandlePosition = () => {
        // 先移除现有的填充柄
        removeFillHandle()

        const { startCell, endCell } = selectionState.value
        if (!startCell || !endCell || !tableRef.value) {
            return
        }

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()

        const bounds = getSelectionBounds()
        if (!bounds) {
            return
        }

        // 找到右下角单元格
        const bottomRightRowData = data[bounds.maxRow]
        if (!bottomRightRowData) {
            return
        }

        const bottomRightRowId = table.getRowid(bottomRightRowData)
        const bottomRightColumn = columns[bounds.maxCol]
        if (!bottomRightColumn) {
            return
        }

        const cellSelector = `.vxe-body--row[rowid="${bottomRightRowId}"] .vxe-body--column[colid="${bottomRightColumn.id}"] .vxe-cell`
        const cell = document.querySelector(cellSelector) as HTMLElement

        if (!cell) {
            return
        }

        // 创建新的填充柄并添加到单元格内部
        fillHandle = createFillHandleElement()
        cell.appendChild(fillHandle)
    }

    // 移除填充柄
    const removeFillHandle = () => {
        if (fillHandle) {
            fillHandle.removeEventListener('mousedown', handleFillHandleMouseDown)
            fillHandle.removeEventListener('dblclick', handleFillHandleDoubleClick)
            fillHandle.remove()
            fillHandle = null
        }
    }

    // 填充柄拖拽开始
    const handleFillHandleMouseDown = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (!enabled.value) return

        fillState.value = {
            isFilling: true,
            fillDirection: null,
            fillEndCell: null
        }

        document.addEventListener('mousemove', handleFillMouseMove)
        document.addEventListener('mouseup', handleFillMouseUp)
    }

    // 双击填充柄 - 一键填充整列（向下填充到最后一行）
    const handleFillHandleDoubleClick = async (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        if (!enabled.value) return

        await executeFillColumn('down')
    }

    // 执行填充整列
    const executeFillColumn = async (direction: 'down' | 'up' = 'down'): Promise<boolean> => {
        const { startCell, endCell } = selectionState.value
        if (!startCell || !endCell || !tableRef.value) return false

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()
        const bounds = getSelectionBounds()

        if (!bounds) return false

        // 获取源数据（选中区域的数据）
        const sourceData: any[][] = []
        for (let rowIdx = bounds.minRow; rowIdx <= bounds.maxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            const rowValues: any[] = []
            for (let colIdx = bounds.minCol; colIdx <= bounds.maxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx)) {
                    rowValues.push(undefined)
                    continue
                }
                rowValues.push(rowData[column.field])
            }
            sourceData.push(rowValues)
        }

        if (sourceData.length === 0) return false

        // 计算填充区域
        let fillMinRow: number
        let fillMaxRow: number

        if (direction === 'down') {
            fillMinRow = bounds.maxRow + 1
            fillMaxRow = data.length - 1
        } else {
            fillMinRow = 0
            fillMaxRow = bounds.minRow - 1
        }

        // 如果没有可填充的行，直接返回
        if (fillMinRow > fillMaxRow) {
            showTooltip('没有可填充的行')
            return false
        }

        const fillDataList: FillData[] = []

        // 执行填充
        for (let rowIdx = fillMinRow; rowIdx <= fillMaxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            for (let colIdx = bounds.minCol; colIdx <= bounds.maxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx) || !isFillableColumn(colIdx)) continue

                // 计算源数据索引（循环使用源数据）
                const sourceRowIdx = (rowIdx - fillMinRow) % sourceData.length
                const sourceColIdx = colIdx - bounds.minCol

                const sourceValue = sourceData[sourceRowIdx]?.[sourceColIdx]
                if (sourceValue === undefined) continue

                const oldValue = rowData[column.field]

                fillDataList.push({
                    rowIndex: rowIdx,
                    field: column.field,
                    oldValue,
                    newValue: sourceValue
                })

                // 更新数据
                rowData[column.field] = sourceValue
            }
        }

        if (fillDataList.length > 0) {
            // 保存滚动位置
            const scrollTop = table.getScroll()?.scrollTop || 0
            const scrollLeft = table.getScroll()?.scrollLeft || 0

            // 通知表格更新
            await table.reloadData(data)

            // 恢复滚动位置
            nextTick(() => {
                table.scrollTo(scrollLeft, scrollTop)
            })

            // 调用回调
            onFillColumn?.(fillDataList)

            const directionText = direction === 'down' ? '向下' : '向上'
            showTooltip(`已${directionText}填充 ${fillDataList.length} 个单元格`)
            return true
        }

        return false
    }

    // 填充拖拽中
    const handleFillMouseMove = (e: MouseEvent) => {
        if (!fillState.value.isFilling || !enabled.value) return

        const target = e.target as HTMLElement
        const cell = target.closest('.vxe-body--column') as HTMLElement

        if (!cell) return

        const position = getCellPosition(cell)
        if (!position) return

        const bounds = getSelectionBounds()
        if (!bounds) return

        // 判断填充方向
        let direction: 'down' | 'up' | 'right' | 'left' | null = null

        if (position.rowIndex > bounds.maxRow && position.colIndex >= bounds.minCol && position.colIndex <= bounds.maxCol) {
            direction = 'down'
        } else if (position.rowIndex < bounds.minRow && position.colIndex >= bounds.minCol && position.colIndex <= bounds.maxCol) {
            direction = 'up'
        } else if (position.colIndex > bounds.maxCol && position.rowIndex >= bounds.minRow && position.rowIndex <= bounds.maxRow) {
            direction = 'right'
        } else if (position.colIndex < bounds.minCol && position.rowIndex >= bounds.minRow && position.rowIndex <= bounds.maxRow) {
            direction = 'left'
        }

        if (direction) {
            fillState.value.fillDirection = direction
            fillState.value.fillEndCell = position
            updateFillPreview()
        }
    }

    // 填充拖拽结束
    const handleFillMouseUp = async () => {
        document.removeEventListener('mousemove', handleFillMouseMove)
        document.removeEventListener('mouseup', handleFillMouseUp)

        if (fillState.value.isFilling && fillState.value.fillEndCell && fillState.value.fillDirection) {
            await executeFill()
        }

        // 清除填充预览
        clearFillPreview()

        fillState.value = {
            isFilling: false,
            fillDirection: null,
            fillEndCell: null
        }
    }

    // 更新填充预览
    const updateFillPreview = () => {
        clearFillPreview()

        const { fillEndCell, fillDirection } = fillState.value
        if (!fillEndCell || !fillDirection || !tableRef.value) return

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()
        const bounds = getSelectionBounds()

        if (!bounds) return

        let fillMinRow = bounds.minRow
        let fillMaxRow = bounds.maxRow
        let fillMinCol = bounds.minCol
        let fillMaxCol = bounds.maxCol

        // 根据方向计算填充区域
        switch (fillDirection) {
            case 'down':
                fillMinRow = bounds.maxRow + 1
                fillMaxRow = fillEndCell.rowIndex
                break
            case 'up':
                fillMinRow = fillEndCell.rowIndex
                fillMaxRow = bounds.minRow - 1
                break
            case 'right':
                fillMinCol = bounds.maxCol + 1
                fillMaxCol = fillEndCell.colIndex
                break
            case 'left':
                fillMinCol = fillEndCell.colIndex
                fillMaxCol = bounds.minCol - 1
                break
        }

        // 高亮填充预览区域
        for (let rowIdx = fillMinRow; rowIdx <= fillMaxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            const rowId = table.getRowid(rowData)

            for (let colIdx = fillMinCol; colIdx <= fillMaxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx)) continue

                const cellSelector = `.vxe-body--row[rowid="${rowId}"] .vxe-body--column[colid="${column.id}"] .vxe-cell`
                const cell = document.querySelector(cellSelector)
                if (cell) {
                    cell.classList.add('vxe-cell--fill-preview')
                }
            }
        }
    }

    // 清除填充预览
    const clearFillPreview = () => {
        document.querySelectorAll('.vxe-cell--fill-preview').forEach(el => {
            el.classList.remove('vxe-cell--fill-preview')
        })
    }

    // 执行填充
    const executeFill = async () => {
        const { fillEndCell, fillDirection } = fillState.value
        if (!fillEndCell || !fillDirection || !tableRef.value) return

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()
        const bounds = getSelectionBounds()

        if (!bounds) return

        // 获取源数据（选中区域的数据）
        const sourceData: any[][] = []
        for (let rowIdx = bounds.minRow; rowIdx <= bounds.maxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            const rowValues: any[] = []
            for (let colIdx = bounds.minCol; colIdx <= bounds.maxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx)) {
                    rowValues.push(undefined)
                    continue
                }
                rowValues.push(rowData[column.field])
            }
            sourceData.push(rowValues)
        }

        if (sourceData.length === 0) return

        // 计算填充区域
        let fillMinRow = bounds.minRow
        let fillMaxRow = bounds.maxRow
        let fillMinCol = bounds.minCol
        let fillMaxCol = bounds.maxCol

        switch (fillDirection) {
            case 'down':
                fillMinRow = bounds.maxRow + 1
                fillMaxRow = fillEndCell.rowIndex
                break
            case 'up':
                fillMinRow = fillEndCell.rowIndex
                fillMaxRow = bounds.minRow - 1
                break
            case 'right':
                fillMinCol = bounds.maxCol + 1
                fillMaxCol = fillEndCell.colIndex
                break
            case 'left':
                fillMinCol = fillEndCell.colIndex
                fillMaxCol = bounds.minCol - 1
                break
        }

        const fillDataList: FillData[] = []

        // 执行填充
        for (let rowIdx = fillMinRow; rowIdx <= fillMaxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            for (let colIdx = fillMinCol; colIdx <= fillMaxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx) || !isFillableColumn(colIdx)) continue

                // 计算源数据索引（循环使用源数据）
                let sourceRowIdx: number
                let sourceColIdx: number

                if (fillDirection === 'down' || fillDirection === 'up') {
                    sourceRowIdx = (rowIdx - fillMinRow) % sourceData.length
                    sourceColIdx = colIdx - bounds.minCol
                } else {
                    sourceRowIdx = rowIdx - bounds.minRow
                    sourceColIdx = (colIdx - fillMinCol) % (bounds.maxCol - bounds.minCol + 1)
                }

                const sourceValue = sourceData[sourceRowIdx]?.[sourceColIdx]
                if (sourceValue === undefined) continue

                const oldValue = rowData[column.field]

                fillDataList.push({
                    rowIndex: rowIdx,
                    field: column.field,
                    oldValue,
                    newValue: sourceValue
                })

                // 更新数据
                rowData[column.field] = sourceValue
            }
        }

        if (fillDataList.length > 0) {
            // 保存滚动位置
            const scrollTop = table.getScroll()?.scrollTop || 0
            const scrollLeft = table.getScroll()?.scrollLeft || 0

            // 通知表格更新（使用 reloadData 保持原数据引用）
            await table.reloadData(data)

            // 恢复滚动位置
            nextTick(() => {
                table.scrollTo(scrollLeft, scrollTop)
            })

            // 调用回调
            onFill?.(fillDataList)

            showTooltip(`已填充 ${fillDataList.length} 个单元格`)
        }
    }

    // 新增：清除所有视觉样式
    const clearSelectionVisual = () => {
        // 移除选中样式类并清除 box-shadow
        document.querySelectorAll('.vxe-cell--text-selected').forEach(el => {
            el.classList.remove('vxe-cell--text-selected')
            ;(el as HTMLElement).style.boxShadow = ''
        })
    }

    // 更新选择区域的视觉效果 - 优化版本
    const updateSelectionVisual = () => {
        const { startCell, endCell } = selectionState.value

        // 移除之前的所有样式
        clearSelectionVisual()

        if (!startCell || !endCell || !tableRef.value) {
            removeFillHandle()
            return
        }

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()

        // 使用实际的数据索引
        const minRow = Math.min(startCell.rowIndex, endCell.rowIndex)
        const maxRow = Math.max(startCell.rowIndex, endCell.rowIndex)
        const minCol = Math.min(startCell.colIndex, endCell.colIndex)
        const maxCol = Math.max(startCell.colIndex, endCell.colIndex)

        // 高亮选中的单元格并添加边框
        for (let rowIdx = minRow; rowIdx <= maxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            const rowId = table.getRowid(rowData)

            for (let colIdx = minCol; colIdx <= maxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx)) continue

                const cellSelector = `.vxe-body--row[rowid="${rowId}"] .vxe-body--column[colid="${column.id}"] .vxe-cell`
                const cell = document.querySelector(cellSelector) as HTMLElement
                if (cell) {
                    // 添加背景色
                    cell.classList.add('vxe-cell--text-selected')

                    // 使用 box-shadow 绘制边框，避免伪元素冲突
                    const shadows: string[] = []
                    if (rowIdx === minRow) {
                        shadows.push('inset 0 2px 0 #4285f4')  // 上边框
                    }
                    if (rowIdx === maxRow) {
                        shadows.push('inset 0 -2px 0 #4285f4') // 下边框
                    }
                    if (colIdx === minCol) {
                        shadows.push('inset 2px 0 0 #4285f4')  // 左边框
                    }
                    if (colIdx === maxCol) {
                        shadows.push('inset -2px 0 0 #4285f4') // 右边框
                    }

                    if (shadows.length > 0) {
                        cell.style.boxShadow = shadows.join(', ')
                    }
                }
            }
        }

        // 更新填充柄位置
        nextTick(() => {
            updateFillHandlePosition()
        })
    }

    // 防抖版本的视觉更新，用于 mousemove
    const debouncedUpdateSelectionVisual = debounce(updateSelectionVisual, 16)

    // 修改 clearSelection 函数
    const clearSelection = () => {
        selectionState.value = {
            isSelecting: false,
            startCell: null,
            endCell: null,
            selectedText: ''
        }

        // 清除所有视觉样式
        clearSelectionVisual()

        // 移除填充柄
        removeFillHandle()

        clearFillPreview()
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!selectionState.value.isSelecting || !enabled.value) return

        const target = e.target as HTMLElement
        const cell = target.closest('.vxe-body--column') as HTMLElement

        if (!cell) return

        const position = getCellPosition(cell)
        if (!position) return

        // 只有当位置真正改变时才更新
        const currentEnd = selectionState.value.endCell
        if (currentEnd &&
            currentEnd.rowIndex === position.rowIndex &&
            currentEnd.colIndex === position.colIndex) {
            return
        }

        selectionState.value.endCell = position
        debouncedUpdateSelectionVisual()
    }

    const handleMouseUp = () => {
        if (!selectionState.value.isSelecting || !enabled.value) return

        selectionState.value.isSelecting = false
        selectionState.value.selectedText = getSelectedText()
    }



    // 解析剪贴板文本为二维数组
    const parseClipboardText = (text: string): string[][] => {
        if (!text) return []

        // 按行分割，支持 \r\n 和 \n
        const lines = text.split(/\r?\n/).filter(line => line.length > 0)

        // 按制表符分割每行
        return lines.map(line => line.split('\t'))
    }

    // 执行粘贴操作
    const executePaste = async (): Promise<boolean> => {
        const { startCell, endCell } = selectionState.value
        if (!startCell || !endCell || !tableRef.value) return false

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()

        // 读取剪贴板
        let clipboardText = ''
        try {
            if (navigator.clipboard && navigator.clipboard.readText) {
                clipboardText = await navigator.clipboard.readText()
            }
        } catch (error) {
            console.error('读取剪贴板失败:', error)
            showTooltip('无法读取剪贴板，请检查浏览器权限')
            return false
        }

        if (!clipboardText) {
            showTooltip('剪贴板为空')
            return false
        }

        // 解析剪贴板数据
        const clipboardData = parseClipboardText(clipboardText)
        if (clipboardData.length === 0) {
            showTooltip('剪贴板数据为空')
            return false
        }

        const bounds = getSelectionBounds()
        if (!bounds) return false

        const pasteDataList: PasteData[] = []

        // 计算选中区域大小
        const selectionRowCount = bounds.maxRow - bounds.minRow + 1
        const selectionColCount = bounds.maxCol - bounds.minCol + 1

        // 剪贴板数据大小
        const clipboardRowCount = clipboardData.length
        const clipboardColCount = Math.max(...clipboardData.map(row => row.length))

        // 确定实际填充的范围
        // 如果选中区域大于剪贴板数据，则循环填充
        // 如果选中区域只有一个单元格，则按剪贴板数据大小填充
        let fillRowCount: number
        let fillColCount: number

        if (selectionRowCount === 1 && selectionColCount === 1) {
            // 只选中一个单元格，按剪贴板数据大小填充
            fillRowCount = clipboardRowCount
            fillColCount = clipboardColCount
        } else {
            // 选中多个单元格，在选中范围内循环填充
            fillRowCount = selectionRowCount
            fillColCount = selectionColCount
        }

        // 执行粘贴
        for (let i = 0; i < fillRowCount; i++) {
            const rowIdx = bounds.minRow + i
            if (rowIdx >= data.length) break

            const rowData = data[rowIdx]
            if (!rowData) continue

            // 计算源数据行索引（循环使用）
            const sourceRowIdx = i % clipboardRowCount
            const sourceRow = clipboardData[sourceRowIdx] || []

            let actualColIdx = 0
            for (let j = 0; j < fillColCount; j++) {
                const colIdx = bounds.minCol + j
                if (colIdx >= columns.length) break

                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx) || !isFillableColumn(colIdx)) continue

                // 计算源数据列索引（循环使用）
                const sourceColIdx = actualColIdx % (sourceRow.length || 1)
                const newValue = sourceRow[sourceColIdx]

                if (newValue !== undefined) {
                    const oldValue = rowData[column.field]

                    pasteDataList.push({
                        rowIndex: rowIdx,
                        field: column.field,
                        oldValue,
                        newValue
                    })

                    // 更新数据
                    rowData[column.field] = newValue
                }

                actualColIdx++
            }
        }

        if (pasteDataList.length > 0) {
            // 保存滚动位置
            const scrollTop = table.getScroll()?.scrollTop || 0
            const scrollLeft = table.getScroll()?.scrollLeft || 0

            // 通知表格更新
            await table.reloadData(data)

            // 恢复滚动位置
            nextTick(() => {
                table.scrollTo(scrollLeft, scrollTop)
            })

            // 调用回调
            onPaste?.(pasteDataList)

            showTooltip(`已粘贴 ${pasteDataList.length} 个单元格`)
            return true
        }

        return false
    }

    // 右键菜单
    const handleContextMenu = (e: MouseEvent) => {
        if (!enabled.value) return

        const { startCell, endCell } = selectionState.value
        if (!startCell || !endCell) return

        const text = getSelectedText()
        if (!text) return

        // 可以在这里添加自定义右键菜单
        // 目前使用浏览器默认的右键菜单
    }

    const addStyles = () => {
        const styleId = 'vxe-text-selection-styles'
        if (document.getElementById(styleId)) return

        const style = document.createElement('style')
        style.id = styleId
        style.textContent = `
      /* 全局禁用表格内文字选中的背景色 */
      .vxe-table--body-wrapper,
      .vxe-table--body-wrapper *,
      .vxe-table--body,
      .vxe-body--row,
      .vxe-body--column,
      .vxe-cell,
      .vxe-cell--label {
        user-select: none !important;
        -webkit-user-select: none !important;
      }
      
      .vxe-table--body-wrapper::selection,
      .vxe-table--body-wrapper *::selection,
      .vxe-body--row::selection,
      .vxe-body--column::selection,
      .vxe-cell::selection,
      .vxe-cell *::selection,
      .vxe-cell--label::selection {
        background-color: transparent !important;
        color: inherit !important;
      }
      
      /* 选中单元格的背景色效果 */
      .vxe-cell--text-selected {
        background-color: rgba(66, 133, 244, 0.15) !important;
        position: relative;
        /* 边框通过 inline style 的 box-shadow 实现，避免伪元素冲突 */
      }
      
      /* 填充预览样式 */
      .vxe-cell--fill-preview {
        position: relative;
        background-color: rgba(66, 133, 244, 0.08) !important;
      }
      
      .vxe-cell--fill-preview::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px dashed #4285f4;
        pointer-events: none;
        box-sizing: border-box;
        z-index: 4;
      }
      
      /* 填充柄样式 */
      /* 填充柄样式 - 相对于单元格定位 */
      .vxe-fill-handle {
        position: absolute;
        right: -4px;
        bottom: -4px;
        width: 8px;
        height: 8px;
        background-color: #4285f4;
        border: 1px solid #fff;
        cursor: crosshair;
        z-index: 10;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        transition: transform 0.1s ease;
      }
      
      .vxe-fill-handle:hover {
        transform: scale(1.3);
      }
      
      .copy-tooltip {
        position: fixed;
        background-color: #333;
        color: #fff;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 13px;
        z-index: 9999;
        animation: copyFadeInOut 1.5s ease-in-out;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
      
      @keyframes copyFadeInOut {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
        }
        20% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        80% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.9);
        }
      }
    `
        document.head.appendChild(style)
    }

    // 新增：检查点击是否在表格内部
    const isClickInsideTable = (target: HTMLElement): boolean => {
        const table = tableRef.value
        if (!table || !table.$el) return false

        const tableEl = table.$el as HTMLElement
        return tableEl.contains(target)
    }

    // 新增：检查点击是否在填充柄上
    const isClickOnFillHandle = (target: HTMLElement): boolean => {
        return fillHandle?.contains(target) || target === fillHandle
    }

    // 修改鼠标按下事件处理
    const handleMouseDown = (e: MouseEvent) => {
        if (!enabled.value) return

        const target = e.target as HTMLElement

        // 1. 如果点击的是填充柄，不处理清除逻辑
        if (isClickOnFillHandle(target)) {
            return
        }

        // 2. 如果点击的是表格外部区域，清除选中
        if (!isClickInsideTable(target)) {
            // 检查是否正在进行填充
            if (fillState.value.isFilling) {
                // 如果正在填充，不取消选择
                return
            }

            // 如果正在选择中，先结束选择
            if (selectionState.value.isSelecting) {
                selectionState.value.isSelecting = false
            }

            clearSelection()
            return
        }

        // 3. 以下是原有的单元格选择逻辑
        const cell = target.closest('.vxe-body--column') as HTMLElement

        if (!cell) {
            // 如果点击的是表格但不是单元格，清除选中
            if (!fillState.value.isFilling) {
                // 如果正在选择中，先结束选择
                if (selectionState.value.isSelecting) {
                    selectionState.value.isSelecting = false
                }
                clearSelection()
            }
            return
        }

        // 刷新缓存
        refreshCache()

        // 检查是否是可选择的单元格
        const position = getCellPosition(cell)
        if (!position || isExcludedColumn(position.colIndex)) {
            // 点击了不可选择的列，清除选中
            if (!fillState.value.isFilling) {
                // 如果正在选择中，先结束选择
                if (selectionState.value.isSelecting) {
                    selectionState.value.isSelecting = false
                }
                clearSelection()
            }
            return
        }

        // 检查是否是点击当前选中区域
        const { startCell, endCell } = selectionState.value
        if (startCell && endCell) {
            const bounds = getSelectionBounds()
            if (bounds &&
                position.rowIndex >= bounds.minRow &&
                position.rowIndex <= bounds.maxRow &&
                position.colIndex >= bounds.minCol &&
                position.colIndex <= bounds.maxCol) {
                // 点击了选中区域内部，不清除
                // 但可以在这里添加拖拽移动选中区域的逻辑
            } else {
                // 点击了选中区域外部，开始新的选择
                selectionState.value = {
                    isSelecting: true,
                    startCell: position,
                    endCell: position,
                    selectedText: ''
                }
                updateSelectionVisual()
                return
            }
        }

        // 开始新的选择
        selectionState.value = {
            isSelecting: true,
            startCell: position,
            endCell: position,
            selectedText: ''
        }

        updateSelectionVisual()
    }

    // 修改键盘事件处理
    const handleKeyDown = async (e: KeyboardEvent) => {
        if (!enabled.value) return

        // Ctrl+C 或 Cmd+C - 复制
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            const { startCell, endCell } = selectionState.value

            // 如果有通过鼠标选择的区域
            if (startCell && endCell) {
                const text = getSelectedText()
                if (text) {
                    e.preventDefault()
                    const success = await copyToClipboard(text)
                    if (success) {
                        showCopyTooltip(text)
                        onCopy?.(text)
                    }
                    return
                }
            }

            // 否则使用浏览器默认的文本选择
            const selection = window.getSelection()
            if (selection && selection.toString().trim()) {
                // 使用浏览器默认复制行为
                return
            }
        }

        // Ctrl+V 或 Cmd+V - 粘贴
        if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
            const { startCell, endCell } = selectionState.value

            // 如果有选中区域，执行粘贴
            if (startCell && endCell) {
                e.preventDefault()
                await executePaste()
                return
            }
        }

        // Escape 清除选择（增强）
        if (e.key === 'Escape') {
            // 如果正在填充，取消填充状态
            if (fillState.value.isFilling) {
                fillState.value = {
                    isFilling: false,
                    fillDirection: null,
                    fillEndCell: null
                }
                clearFillPreview()
                // 移除填充相关的监听器
                document.removeEventListener('mousemove', handleFillMouseMove)
                document.removeEventListener('mouseup', handleFillMouseUp)
            }

            // 清除选择
            clearSelection()
            e.preventDefault() // 阻止可能的事件冒泡
        }

        // Tab 键清除选择（可选，根据需求）
        if (e.key === 'Tab' && selectionState.value.startCell) {
            clearSelection()
        }
    }

    // 新增：处理文档点击事件
    const handleDocumentClick = (e: MouseEvent) => {
        if (!enabled.value) return

        const target = e.target as HTMLElement

        // 如果正在填充，不清除
        if (fillState.value.isFilling) return

        // 如果点击了填充柄，不清除
        if (isClickOnFillHandle(target)) return

        // 如果点击在表格外部，清除选中
        if (!isClickInsideTable(target)) {
            clearSelection()
        }
    }

    // 或者，如果不想用 lodash，可以自己实现一个简单的防抖
    const createDebounce = (func: Function, delay: number) => {
        let timeoutId: number | null = null
        return (...args: any[]) => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = window.setTimeout(() => {
                func(...args)
            }, delay)
        }
    }

    // 初始化
    onMounted(() => {
        addStyles()

        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('contextmenu', handleContextMenu)
        // 添加文档点击监听（可选）
        document.addEventListener('click', handleDocumentClick)
    })

    // 清理
    onUnmounted(() => {
        document.removeEventListener('mousedown', handleMouseDown)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('contextmenu', handleContextMenu)
        // 移除文档点击监听
        document.removeEventListener('click', handleDocumentClick)

        removeFillHandle()
        clearSelection()
    })

    return {
        selectionState,
        fillState,
        clearSelection,
        copyToClipboard,
        getSelectedText,
        executePaste,
        executeFillColumn
    }
}
