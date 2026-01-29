import { ref, Ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash-es'

interface SelectionState {
    isSelecting: boolean
    startCell: CellInfo | null
    endCell: CellInfo | null
    selectedText: string
}

// 修改：使用更完整的单元格信息
interface CellInfo {
    rowIndex: number      // 数据在 data 数组中的实际索引
    colIndex: number      // 列索引
    rowId: string         // vxe-table 的 rowid (用于 DOM 查询)
    colId: string         // vxe-table 的 colid (用于 DOM 查询)
}

interface UseTextSelectionOptions {
    tableRef: Ref<any>
    enabled?: Ref<boolean>
    onCopy?: (text: string) => void
    excludeColumns?: string[]  // 排除的列（如操作列）
}

export const useTextSelection = (options: UseTextSelectionOptions) => {
    const { tableRef, enabled = ref(true), onCopy, excludeColumns = ['operation', 'checkbox'] } = options

    const selectionState = ref<SelectionState>({
        isSelecting: false,
        startCell: null,
        endCell: null,
        selectedText: ''
    })

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

    // 显示复制成功提示
    const showCopyTooltip = (text: string) => {
        const tooltip = document.createElement('div')
        tooltip.className = 'copy-tooltip'
        tooltip.textContent = `已复制 ${text.split('\n').length} 行数据`
        tooltip.style.left = `${window.innerWidth / 2}px`
        tooltip.style.top = `${window.innerHeight / 2}px`
        tooltip.style.transform = 'translate(-50%, -50%)'
        document.body.appendChild(tooltip)

        setTimeout(() => {
            tooltip.remove()
        }, 1500)
    }

    // 更新选择区域的视觉效果 - 优化版本
    const updateSelectionVisual = () => {
        const { startCell, endCell } = selectionState.value

        // 移除之前的高亮
        document.querySelectorAll('.vxe-cell--text-selected').forEach(el => {
            el.classList.remove('vxe-cell--text-selected')
        })

        if (!startCell || !endCell || !tableRef.value) return

        const table = tableRef.value
        const data = table.getData()
        const columns = table.getColumns()

        // 使用实际的数据索引
        const minRow = Math.min(startCell.rowIndex, endCell.rowIndex)
        const maxRow = Math.max(startCell.rowIndex, endCell.rowIndex)
        const minCol = Math.min(startCell.colIndex, endCell.colIndex)
        const maxCol = Math.max(startCell.colIndex, endCell.colIndex)

        // 高亮选中的单元格 - 通过行数据获取 rowid
        for (let rowIdx = minRow; rowIdx <= maxRow; rowIdx++) {
            const rowData = data[rowIdx]
            if (!rowData) continue

            // 使用 vxe-table API 获取行的 rowid
            const rowId = table.getRowid(rowData)

            for (let colIdx = minCol; colIdx <= maxCol; colIdx++) {
                const column = columns[colIdx]
                if (!column || isExcludedColumn(colIdx)) continue

                const cellSelector = `.vxe-body--row[rowid="${rowId}"] .vxe-body--column[colid="${column.id}"] .vxe-cell`
                const cell = document.querySelector(cellSelector)
                if (cell) {
                    cell.classList.add('vxe-cell--text-selected')
                }
            }
        }
    }

    // 防抖版本的视觉更新，用于 mousemove
    const debouncedUpdateSelectionVisual = debounce(updateSelectionVisual, 16)

    // 清除选择
    const clearSelection = () => {
        selectionState.value = {
            isSelecting: false,
            startCell: null,
            endCell: null,
            selectedText: ''
        }

        document.querySelectorAll('.vxe-cell--text-selected').forEach(el => {
            el.classList.remove('vxe-cell--text-selected')
        })
    }

    // 鼠标事件处理
    const handleMouseDown = (e: MouseEvent) => {
        if (!enabled.value) return

        const target = e.target as HTMLElement
        const cell = target.closest('.vxe-body--column') as HTMLElement

        if (!cell) return

        // 刷新缓存
        refreshCache()

        // 检查是否是可选择的单元格
        const position = getCellPosition(cell)
        if (!position || isExcludedColumn(position.colIndex)) return

        selectionState.value = {
            isSelecting: true,
            startCell: position,
            endCell: position,
            selectedText: ''
        }

        updateSelectionVisual()
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

    // 键盘事件处理 - Ctrl+C 复制
    const handleKeyDown = async (e: KeyboardEvent) => {
        if (!enabled.value) return

        // Ctrl+C 或 Cmd+C
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

        // Escape 清除选择
        if (e.key === 'Escape') {
            clearSelection()
        }
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

    // 添加样式
    const addStyles = () => {
        const styleId = 'vxe-text-selection-styles'
        if (document.getElementById(styleId)) return

        const style = document.createElement('style')
        style.id = styleId
        style.textContent = `
      .vxe-cell--text-selected {
        background-color: #b4d7ff !important;
        position: relative;
      }
      
      .vxe-cell--text-selected::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #4285f4;
        pointer-events: none;
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

    // 初始化
    onMounted(() => {
        addStyles()

        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('contextmenu', handleContextMenu)
    })

    // 清理
    onUnmounted(() => {
        document.removeEventListener('mousedown', handleMouseDown)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('contextmenu', handleContextMenu)

        clearSelection()
    })

    return {
        selectionState,
        clearSelection,
        copyToClipboard,
        getSelectedText
    }
}
