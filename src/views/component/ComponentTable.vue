<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Table 表格</h1>
        <el-text class="mx-1" size="large">用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</el-text>

        <h2 class="card_title_h2">基础表格</h2>
        <el-text class="mx-1" size="large">基础的表格展示用法。当 el-table 元素中注入 data 对象数组后，在 el-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeBasic" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带斑马纹表格</h2>
        <el-text class="mx-1" size="large">使用带斑马纹的表格，可以更容易区分出不同行的数据。stripe 属性可以创建带斑马纹的表格。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeStripe" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带边框表格</h2>
        <el-text class="mx-1" size="large">默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 border 属性，把该属性设置为 true 即可启用。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeBorder" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">固定表头</h2>
        <el-text class="mx-1" size="large">纵向内容过多时，可选择固定表头。只要在 el-table 元素中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableDataLong" height="250" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeFixedHeader" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">固定列</h2>
        <el-text class="mx-1" size="large">横向内容过多时，可选择固定列。固定列需要使用 fixed 属性，它接受 Boolean 值或者 left、right，表示左边固定还是右边固定。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column fixed prop="date" label="Date" width="150" />
                    <el-table-column prop="name" label="Name" width="120" />
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="120" />
                    <el-table-column prop="address" label="Address" width="600" />
                    <el-table-column fixed="right" label="Operations" width="120">
                        <template #default>
                            <el-button link type="primary" size="small">Detail</el-button>
                            <el-button link type="primary" size="small">Edit</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeFixedColumn" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">多选</h2>
        <el-text class="mx-1" size="large">选择多行数据时使用 Checkbox。实现多选非常简单: 手动添加一个 el-table-column，设 type 属性为 selection 即可。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableData[1], tableData[2]])">
                        Toggle selection status of second and third rows
                    </el-button>
                    <el-button @click="toggleSelection()">Clear selection</el-button>
                </div>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeSelection" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">排序</h2>
        <el-text class="mx-1" size="large">对表格进行排序，可快速查找或对比数据。在列中设置 sortable 属性即可实现以该列为基准的排序，接受一个 Boolean，默认为 false。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
                    <el-table-column prop="date" label="Date" sortable width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeSort" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">筛选</h2>
        <el-text class="mx-1" size="large">对表格进行筛选，可快速查找到自己想看的数据。在列中设置 filters 和 filter-method 属性即可开启该列的筛选。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column
                        prop="address"
                        label="Address"
                        :filters="[
                            { text: 'New York', value: 'New York' },
                            { text: 'Los Angeles', value: 'Los Angeles' },
                        ]"
                        :filter-method="filterHandler"
                    />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeFilter" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义列模板</h2>
        <el-text class="mx-1" size="large">自定义列的显示内容，可组合其他组件使用。通过 slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="Date" width="180">
                        <template #default="scope">
                            <div style="display: flex; align-items: center">
                                <el-icon><Timer /></el-icon>
                                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Name" width="180">
                        <template #default="scope">
                            <el-popover effect="light" trigger="hover" placement="top" width="auto">
                                <template #default>
                                    <div>name: {{ scope.row.name }}</div>
                                    <div>address: {{ scope.row.address }}</div>
                                </template>
                                <template #reference>
                                    <el-tag>{{ scope.row.name }}</el-tag>
                                </template>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="Operations">
                        <template #default="scope">
                            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustomColumn" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">展开行</h2>
        <el-text class="mx-1" size="large">当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。通过设置 type="expand" 和 slot 可以开启展开行功能。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="expand">
                        <template #default="props">
                            <div style="margin: 0 50px">
                                <p>State: {{ props.row.state }}</p>
                                <p>City: {{ props.row.city }}</p>
                                <p>Address: {{ props.row.address }}</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeExpand" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Table API</h2>
        <h2 class="card_title_h3">Table Attributes</h2>
        <el-table :data="tableTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Table Events</h2>
        <el-table :data="tableEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Table Slots</h2>
        <el-table :data="tableSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Table-Column API</h2>
        <h2 class="card_title_h3">Table-Column Attributes</h2>
        <el-table :data="tableColumnTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Table-Column Slots</h2>
        <el-table :data="tableColumnSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentTable'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { Timer } from '@element-plus/icons-vue'
import type { TableInstance } from 'element-plus'

interface User {
    date: string
    name: string
    address: string
    state?: string
    city?: string
}

const tableData: User[] = [
    { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles', state: 'California', city: 'Los Angeles' },
    { date: '2016-05-02', name: 'John', address: 'No. 189, Grove St, New York', state: 'New York', city: 'New York' },
    { date: '2016-05-04', name: 'Morgan', address: 'No. 189, Grove St, Los Angeles', state: 'California', city: 'Los Angeles' },
    { date: '2016-05-01', name: 'Jessy', address: 'No. 189, Grove St, New York', state: 'New York', city: 'New York' },
]

const tableDataLong: User[] = [
    ...tableData,
    { date: '2016-05-08', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
    { date: '2016-05-06', name: 'John', address: 'No. 189, Grove St, Los Angeles' },
    { date: '2016-05-07', name: 'Morgan', address: 'No. 189, Grove St, Los Angeles' },
]

// 多选
const multipleTableRef = ref<TableInstance>()
const multipleSelection = ref<User[]>([])

const toggleSelection = (rows?: User[]) => {
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value!.clearSelection()
    }
}

const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
}

// 筛选
const filterHandler = (value: string, row: User) => {
    return row.address.includes(value)
}

// 自定义列模板
const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}

const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}

// 代码字符串
const codeBasic = `<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'John', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-04', name: 'Morgan', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-01', name: 'Jessy', address: 'No. 189, Grove St, Los Angeles' },
]
<\/script>`

const codeStripe = `<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>`

const codeBorder = `<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>`

const codeFixedHeader = `<template>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>`

const codeFixedColumn = `<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small">Detail</el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>`

const codeSelection = `<template>
  <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableInstance } from 'element-plus'

const multipleTableRef = ref<TableInstance>()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
<\/script>`

const codeSort = `<template>
  <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
    <el-table-column prop="date" label="Date" sortable width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>`

const codeFilter = `<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column
      prop="address"
      label="Address"
      :filters="[
        { text: 'New York', value: 'New York' },
        { text: 'Los Angeles', value: 'Los Angeles' },
      ]"
      :filter-method="filterHandler"
    />
  </el-table>
</template>

<script lang="ts" setup>
const filterHandler = (value, row) => {
  return row.address.includes(value)
}
<\/script>`

const codeCustomColumn = `<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><Timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>`

const codeExpand = `<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <div style="margin: 0 50px">
          <p>State: {{ props.row.state }}</p>
          <p>City: {{ props.row.city }}</p>
          <p>Address: {{ props.row.address }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>`

// API 数据
const tableTableData: any[] = [
    { name: 'data', desc: '显示的数据', type: 'array', default: '—' },
    { name: 'height', desc: 'Table 的高度，默认为自动高度', type: 'string | number', default: '—' },
    { name: 'max-height', desc: 'Table 的最大高度', type: 'string | number', default: '—' },
    { name: 'stripe', desc: '是否为斑马纹 table', type: 'boolean', default: 'false' },
    { name: 'border', desc: '是否带有纵向边框', type: 'boolean', default: 'false' },
    { name: 'size', desc: 'Table 的尺寸', type: "'large' | 'default' | 'small'", default: '—' },
    { name: 'fit', desc: '列的宽度是否自撑开', type: 'boolean', default: 'true' },
    { name: 'show-header', desc: '是否显示表头', type: 'boolean', default: 'true' },
    { name: 'highlight-current-row', desc: '是否要高亮当前行', type: 'boolean', default: 'false' },
    { name: 'row-class-name', desc: '行的 className 的回调方法', type: 'function({ row, rowIndex }) / string', default: '—' },
    { name: 'row-style', desc: '行的 style 的回调方法', type: 'function({ row, rowIndex }) / object', default: '—' },
    { name: 'default-sort', desc: '默认的排序列的 prop 和顺序', type: "object: { prop: string, order: 'ascending' | 'descending' }", default: '—' },
    { name: 'empty-text', desc: '空数据时显示的文本内容', type: 'string', default: 'No Data' },
]

const tableEventData: any[] = [
    { name: 'select', desc: '当用户手动勾选数据行的 Checkbox 时触发', type: '(selection: array, row: object) => void' },
    { name: 'select-all', desc: '当用户手动勾选全选 Checkbox 时触发', type: '(selection: array) => void' },
    { name: 'selection-change', desc: '当选择项发生变化时会触发', type: '(selection: array) => void' },
    { name: 'cell-click', desc: '当某个单元格被点击时会触发', type: '(row, column, cell, event) => void' },
    { name: 'row-click', desc: '当某一行被点击时会触发', type: '(row, column, event) => void' },
    { name: 'sort-change', desc: '当表格的排序条件发生变化的时候会触发', type: '({ column, prop, order }) => void' },
    { name: 'filter-change', desc: '当表格的筛选条件发生变化的时候会触发', type: '(filters: object) => void' },
]

const tableSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'append', desc: '插入至表格最后一行之后的内容' },
    { name: 'empty', desc: '当数据为空时自定义的内容' },
]

const tableColumnTableData: any[] = [
    { name: 'type', desc: '对应列的类型', type: "'selection' | 'index' | 'expand'", default: '—' },
    { name: 'label', desc: '显示的标题', type: 'string', default: '—' },
    { name: 'prop', desc: '字段名称', type: 'string', default: '—' },
    { name: 'width', desc: '对应列的宽度', type: 'string | number', default: '—' },
    { name: 'min-width', desc: '对应列的最小宽度', type: 'string | number', default: '—' },
    { name: 'fixed', desc: '列是否固定在左侧或者右侧', type: "'left' | 'right' | boolean", default: '—' },
    { name: 'sortable', desc: '对应列是否可以排序', type: "boolean | 'custom'", default: 'false' },
    { name: 'filters', desc: '数据过滤的选项', type: 'Array<{ text: string, value: string }>', default: '—' },
    { name: 'filter-method', desc: '数据过滤使用的方法', type: 'function(value, row, column)', default: '—' },
    { name: 'align', desc: '对齐方式', type: "'left' | 'center' | 'right'", default: 'left' },
]

const tableColumnSlotData: any[] = [
    { name: 'default', desc: '自定义列的内容，参数为 { row, column, $index }' },
    { name: 'header', desc: '自定义表头的内容，参数为 { column, $index }' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}
</style>
