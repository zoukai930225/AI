<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Tree 树形控件</h1>
        <el-text class="mx-1" size="large">用清晰的层级结构展示信息，可展开或折叠。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">基础的树形结构展示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tree :data="dataBasic" :props="defaultProps" @node-click="handleNodeClick" />
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

        <h2 class="card_title_h2">可选择</h2>
        <el-text class="mx-1" size="large">适用于需要选择层级时使用。在需要设置选择功能时，只需设置 show-checkbox 为 true 即可。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tree
                    ref="treeRef"
                    :data="dataBasic"
                    :props="defaultProps"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                />
                <div style="margin-top: 16px">
                    <el-button @click="getCheckedNodes">Get Checked Nodes</el-button>
                    <el-button @click="getCheckedKeys">Get Checked Keys</el-button>
                    <el-button @click="setCheckedNodes">Set Checked Nodes</el-button>
                    <el-button @click="setCheckedKeys">Set Checked Keys</el-button>
                    <el-button @click="resetChecked">Reset</el-button>
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
                        <highlightjs autodetect :code="codeCheckbox" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">懒加载自定义叶子节点</h2>
        <el-text class="mx-1" size="large">由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点， 所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。 同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tree :props="lazyProps" :load="loadNode" lazy show-checkbox />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeLazy" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">禁用状态</h2>
        <el-text class="mx-1" size="large">可将 Tree 的某些节点设置为禁用状态。通过 disabled 设置禁用状态。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tree :data="dataDisabled" :props="defaultProps" show-checkbox />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeDisabled" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">节点过滤</h2>
        <el-text class="mx-1" size="large">通过关键字过滤树节点。在需要对节点进行过滤时，调用 Tree 实例的 filter 方法， 参数为关键字。 需要注意的是，此时需要设置 filter-node-method，值为过滤函数。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom: 16px" />
                <el-tree
                    ref="treeFilterRef"
                    :data="dataBasic"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                />
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

        <h2 class="card_title_h2">自定义节点内容</h2>
        <el-text class="mx-1" size="large">节点的内容支持自定义，可以在节点区添加按钮或图标等内容。使用 default 作用域插槽来实现。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tree :data="dataCustom" :props="defaultProps" node-key="id" default-expand-all>
                    <template #default="{ node, data }">
                        <span class="custom-tree-node">
                            <span>{{ node.label }}</span>
                            <span>
                                <a @click="append(data)">Append</a>
                                <a style="margin-left: 8px" @click="remove(node, data)">Delete</a>
                            </span>
                        </span>
                    </template>
                </el-tree>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustom" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">手风琴模式</h2>
        <el-text class="mx-1" size="large">对于同一级的节点，每次只能展开一个。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tree :data="dataBasic" :props="defaultProps" accordion @node-click="handleNodeClick" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeAccordion" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Tree API</h2>
        <h2 class="card_title_h3">Tree Attributes</h2>
        <el-table :data="treeTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="200" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tree Events</h2>
        <el-table :data="treeEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="250" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tree Slots</h2>
        <el-table :data="treeSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tree Exposes</h2>
        <el-table :data="treeExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="250" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentTree'
}
</script>

<script lang="tsx" setup>
import { ref, watch } from 'vue'
import type { TreeInstance } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
    id: number
    label: string
    children?: Tree[]
    disabled?: boolean
}

// 基础数据
const dataBasic: Tree[] = [
    {
        id: 1,
        label: 'Level one 1',
        children: [
            { id: 4, label: 'Level two 1-1', children: [{ id: 9, label: 'Level three 1-1-1' }, { id: 10, label: 'Level three 1-1-2' }] },
        ],
    },
    {
        id: 2,
        label: 'Level one 2',
        children: [
            { id: 5, label: 'Level two 2-1' },
            { id: 6, label: 'Level two 2-2' },
        ],
    },
    {
        id: 3,
        label: 'Level one 3',
        children: [
            { id: 7, label: 'Level two 3-1' },
            { id: 8, label: 'Level two 3-2' },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

// 可选择
const treeRef = ref<TreeInstance>()

const getCheckedNodes = () => {
    console.log(treeRef.value!.getCheckedNodes(false, false))
}

const getCheckedKeys = () => {
    console.log(treeRef.value!.getCheckedKeys(false))
}

const setCheckedNodes = () => {
    treeRef.value!.setCheckedNodes([{ id: 5, label: 'Level two 2-1' }] as Node[])
}

const setCheckedKeys = () => {
    treeRef.value!.setCheckedKeys([3])
}

const resetChecked = () => {
    treeRef.value!.setCheckedKeys([])
}

// 懒加载
const lazyProps = {
    label: 'name',
    children: 'zones',
    isLeaf: 'leaf',
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
    if (node.level === 0) {
        return resolve([{ id: 1, label: 'Region' } as Tree])
    }
    if (node.level > 2) return resolve([])

    setTimeout(() => {
        const data: Tree[] = [
            { id: node.level + 1, label: `Zone ${node.level}` },
            { id: node.level + 2, label: `Zone ${node.level + 1}`, children: [] },
        ]
        resolve(data)
    }, 500)
}

// 禁用状态
const dataDisabled: Tree[] = [
    {
        id: 1,
        label: 'Level one 1',
        children: [
            { id: 4, label: 'Level two 1-1', children: [{ id: 9, label: 'Level three 1-1-1' }, { id: 10, label: 'Level three 1-1-2' }] },
        ],
    },
    {
        id: 2,
        label: 'Level one 2',
        disabled: true,
        children: [
            { id: 5, label: 'Level two 2-1' },
            { id: 6, label: 'Level two 2-2' },
        ],
    },
    {
        id: 3,
        label: 'Level one 3',
        children: [
            { id: 7, label: 'Level two 3-1', disabled: true },
            { id: 8, label: 'Level two 3-2' },
        ],
    },
]

// 节点过滤
const filterText = ref('')
const treeFilterRef = ref<TreeInstance>()

watch(filterText, (val) => {
    treeFilterRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.includes(value)
}

// 自定义节点内容
let id = 1000
const dataCustom = ref<Tree[]>([
    {
        id: 1,
        label: 'Level one 1',
        children: [{ id: 4, label: 'Level two 1-1' }],
    },
    { id: 2, label: 'Level one 2' },
    { id: 3, label: 'Level one 3' },
])

const append = (data: Tree) => {
    const newChild = { id: id++, label: 'testtest', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    dataCustom.value = [...dataCustom.value]
}

const remove = (node: Node, data: Tree) => {
    const parent = node.parent
    const children: Tree[] = parent.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
    dataCustom.value = [...dataCustom.value]
}

// 代码字符串
const codeBasic = `<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      { label: 'Level two 1-1', children: [{ label: 'Level three 1-1-1' }] },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      { label: 'Level two 2-1' },
      { label: 'Level two 2-2' },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}
<\/script>`

const codeCheckbox = `<template>
  <el-tree
    ref="treeRef"
    :data="data"
    :props="defaultProps"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
  />
  <el-button @click="getCheckedNodes">Get Checked Nodes</el-button>
  <el-button @click="getCheckedKeys">Get Checked Keys</el-button>
  <el-button @click="setCheckedKeys">Set Checked Keys</el-button>
  <el-button @click="resetChecked">Reset</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TreeInstance } from 'element-plus'

const treeRef = ref<TreeInstance>()

const getCheckedNodes = () => {
  console.log(treeRef.value!.getCheckedNodes(false, false))
}

const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}

const setCheckedKeys = () => {
  treeRef.value!.setCheckedKeys([3])
}

const resetChecked = () => {
  treeRef.value!.setCheckedKeys([])
}
<\/script>`

const codeLazy = `<template>
  <el-tree :props="props" :load="loadNode" lazy show-checkbox />
</template>

<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'

const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

const loadNode = (node: Node, resolve: (data: any[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'Region' }])
  }
  if (node.level > 2) return resolve([])

  setTimeout(() => {
    const data = [
      { name: \`Zone \${node.level}\` },
      { name: \`Zone \${node.level + 1}\`, leaf: true },
    ]
    resolve(data)
  }, 500)
}
<\/script>`

const codeDisabled = `<template>
  <el-tree :data="data" :props="defaultProps" show-checkbox />
</template>

<script lang="ts" setup>
const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [{ id: 4, label: 'Level two 1-1' }],
  },
  {
    id: 2,
    label: 'Level one 2',
    disabled: true,
    children: [{ id: 5, label: 'Level two 2-1' }],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
  disabled: 'disabled',
}
<\/script>`

const codeFilter = `<template>
  <el-input v-model="filterText" placeholder="Filter keyword" />
  <el-tree
    ref="treeRef"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { TreeInstance } from 'element-plus'

const filterText = ref('')
const treeRef = ref<TreeInstance>()

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: any) => {
  if (!value) return true
  return data.label.includes(value)
}
<\/script>`

const codeCustom = `<template>
  <el-tree :data="data" :props="defaultProps" node-key="id" default-expand-all>
    <template #default="{ node, data }">
      <span class="custom-tree-node">
        <span>{{ node.label }}</span>
        <span>
          <a @click="append(data)">Append</a>
          <a @click="remove(node, data)">Delete</a>
        </span>
      </span>
    </template>
  </el-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let id = 1000
const data = ref([
  { id: 1, label: 'Level one 1', children: [{ id: 4, label: 'Level two 1-1' }] },
  { id: 2, label: 'Level one 2' },
])

const append = (data: any) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) data.children = []
  data.children.push(newChild)
}

const remove = (node: any, data: any) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d: any) => d.id === data.id)
  children.splice(index, 1)
}
<\/script>`

const codeAccordion = `<template>
  <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
</template>`

// API 数据
const treeTableData: any[] = [
    { name: 'data', desc: '展示数据', type: 'array', default: '—' },
    { name: 'empty-text', desc: '内容为空的时候展示的文本', type: 'string', default: '—' },
    { name: 'node-key', desc: '每个树节点用来作为唯一标识的属性', type: 'string', default: '—' },
    { name: 'props', desc: '配置选项，具体看下表', type: 'object', default: '—' },
    { name: 'highlight-current', desc: '是否高亮当前选中节点', type: 'boolean', default: 'false' },
    { name: 'default-expand-all', desc: '是否默认展开所有节点', type: 'boolean', default: 'false' },
    { name: 'expand-on-click-node', desc: '是否在点击节点的时候展开或者收缩节点', type: 'boolean', default: 'true' },
    { name: 'check-on-click-node', desc: '是否在点击节点的时候选中节点', type: 'boolean', default: 'false' },
    { name: 'auto-expand-parent', desc: '展开子节点的时候是否自动展开父节点', type: 'boolean', default: 'true' },
    { name: 'default-expanded-keys', desc: '默认展开的节点的 key 的数组', type: 'array', default: '—' },
    { name: 'show-checkbox', desc: '节点是否可被选择', type: 'boolean', default: 'false' },
    { name: 'check-strictly', desc: '在显示复选框的情况下，是否严格的遵循父子不互相关联', type: 'boolean', default: 'false' },
    { name: 'default-checked-keys', desc: '默认勾选的节点的 key 的数组', type: 'array', default: '—' },
    { name: 'filter-node-method', desc: '对树节点进行筛选的方法', type: 'function(value, data, node)', default: '—' },
    { name: 'accordion', desc: '是否每次只打开一个同级树节点展开', type: 'boolean', default: 'false' },
    { name: 'indent', desc: '相邻级节点间的水平缩进，单位为像素', type: 'number', default: '18' },
    { name: 'icon', desc: '自定义树节点图标组件', type: 'string | Component', default: '—' },
    { name: 'lazy', desc: '是否懒加载子节点', type: 'boolean', default: 'false' },
    { name: 'load', desc: '加载子树数据的方法，仅当 lazy 属性为 true 时生效', type: 'function(node, resolve)', default: '—' },
    { name: 'draggable', desc: '是否开启拖拽节点功能', type: 'boolean', default: 'false' },
]

const treeEventData: any[] = [
    { name: 'node-click', desc: '当节点被点击的时候触发', type: '(data: TreeNodeData, node: Node, e: MouseEvent) => void' },
    { name: 'node-contextmenu', desc: '当某一节点被鼠标右键点击时会触发', type: '(e: Event, data: TreeNodeData, node: Node) => void' },
    { name: 'check-change', desc: '当复选框被点击的时候触发', type: '(data: TreeNodeData, checked: boolean, indeterminate: boolean) => void' },
    { name: 'check', desc: '点击节点复选框之后触发', type: '(data: TreeNodeData, info: CheckedInfo) => void' },
    { name: 'current-change', desc: '当前选中节点变化时触发', type: '(data: TreeNodeData, node: Node) => void' },
    { name: 'node-expand', desc: '节点被展开时触发', type: '(data: TreeNodeData, node: Node, instance: ComponentInternalInstance) => void' },
    { name: 'node-collapse', desc: '节点被关闭时触发', type: '(data: TreeNodeData, node: Node, instance: ComponentInternalInstance) => void' },
    { name: 'node-drag-start', desc: '节点开始拖拽时触发', type: '(node: Node, e: DragEvent) => void' },
    { name: 'node-drag-end', desc: '拖拽结束时触发', type: '(draggingNode: Node, dropNode: Node, dropType: NodeDropType, e: DragEvent) => void' },
]

const treeSlotData: any[] = [
    { name: 'default', desc: '自定义树节点内容，参数为 { node, data }' },
    { name: 'empty', desc: '当数据为空时自定义的内容' },
]

const treeExposeData: any[] = [
    { name: 'filter', desc: '过滤所有树节点', type: '(query: string) => void' },
    { name: 'getCheckedNodes', desc: '获取选中的节点', type: '(leafOnly: boolean, includeHalfChecked: boolean) => TreeNodeData[]' },
    { name: 'setCheckedNodes', desc: '设置选中的节点', type: '(nodes: Node[]) => void' },
    { name: 'getCheckedKeys', desc: '获取选中节点的 key', type: '(leafOnly: boolean) => TreeKey[]' },
    { name: 'setCheckedKeys', desc: '通过 keys 设置选中节点', type: '(keys: TreeKey[], leafOnly: boolean) => void' },
    { name: 'setCurrentKey', desc: '通过 key 设置某个节点的当前选中状态', type: '(key: TreeKey, shouldAutoExpandParent: boolean) => void' },
    { name: 'getCurrentNode', desc: '获取当前被选中节点的数据', type: '() => TreeNodeData' },
    { name: 'getCurrentKey', desc: '获取当前被选中节点的 key', type: '() => TreeKey' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;

    a {
        color: var(--el-color-primary);
        cursor: pointer;
    }
}
</style>
