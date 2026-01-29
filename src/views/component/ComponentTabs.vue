<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Tabs 标签页</h1>
        <el-text class="mx-1" size="large">分隔内容上有关联但属于不同类别的数据集合。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">基础的、简洁的标签页。Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="User" name="first">User</el-tab-pane>
                    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
                </el-tabs>
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

        <h2 class="card_title_h2">卡片风格</h2>
        <el-text class="mx-1" size="large">可以设置具有卡片风格的标签。只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="User" name="first">User</el-tab-pane>
                    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
                </el-tabs>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCard" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带有边框的卡片风格</h2>
        <el-text class="mx-1" size="large">你还可以设置标签页为带有边框的卡片。将 type 设置为 border-card。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tabs type="border-card">
                    <el-tab-pane label="User">User</el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeBorderCard" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">标签位置</h2>
        <el-text class="mx-1" size="large">可以通过 tab-position 设置标签的位置。标签一共有四个方向的设置 tabPosition="left|right|top|bottom"。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
                    <el-radio-button value="top">top</el-radio-button>
                    <el-radio-button value="right">right</el-radio-button>
                    <el-radio-button value="bottom">bottom</el-radio-button>
                    <el-radio-button value="left">left</el-radio-button>
                </el-radio-group>

                <el-tabs :tab-position="tabPosition" style="height: 200px">
                    <el-tab-pane label="User">User</el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codePosition" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义标签页内容</h2>
        <el-text class="mx-1" size="large">可以通过具名插槽来实现自定义标签页的内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <template #label>
                            <span class="custom-tabs-label">
                                <el-icon><calendar /></el-icon>
                                <span>Route</span>
                            </span>
                        </template>
                        Route
                    </el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustomLabel" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">动态增减标签页</h2>
        <el-text class="mx-1" size="large">可以动态增加或删除标签页。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
                    <el-tab-pane
                        v-for="item in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                    >
                        {{ item.content }}
                    </el-tab-pane>
                </el-tabs>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeDynamic" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义增加标签页触发器</h2>
        <el-text class="mx-1" size="large">可以自定义增加标签页的触发器。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div style="margin-bottom: 20px">
                    <el-button size="small" @click="addTab(editableTabsValue2)">
                        add tab
                    </el-button>
                </div>
                <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane
                        v-for="item in editableTabs2"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                    >
                        {{ item.content }}
                    </el-tab-pane>
                </el-tabs>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustomTrigger" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Tabs API</h2>
        <h2 class="card_title_h3">Tabs Attributes</h2>
        <el-table :data="tabsTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tabs Events</h2>
        <el-table :data="tabsEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="250" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tabs Slots</h2>
        <el-table :data="tabsSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">TabPane API</h2>
        <h2 class="card_title_h3">TabPane Attributes</h2>
        <el-table :data="tabPaneTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">TabPane Slots</h2>
        <el-table :data="tabPaneSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentTabs'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import type { TabPaneName, TabsPaneContext } from 'element-plus'
import { Calendar } from '@element-plus/icons-vue'

const activeName = ref('first')
const activeName2 = ref('first')
const tabPosition = ref<'top' | 'right' | 'bottom' | 'left'>('top')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

// 动态增减标签页
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    { title: 'Tab 1', name: '1', content: 'Tab 1 content' },
    { title: 'Tab 2', name: '2', content: 'Tab 2 content' },
])

const handleTabsEdit = (
    targetName: TabPaneName | undefined,
    action: 'remove' | 'add'
) => {
    if (action === 'add') {
        const newTabName = `${++tabIndex}`
        editableTabs.value.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content',
        })
        editableTabsValue.value = newTabName
    } else if (action === 'remove') {
        const tabs = editableTabs.value
        let activeName = editableTabsValue.value
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            })
        }
        editableTabsValue.value = activeName
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
}

// 自定义增加标签页触发器
let tabIndex2 = 2
const editableTabsValue2 = ref('2')
const editableTabs2 = ref([
    { title: 'Tab 1', name: '1', content: 'Tab 1 content' },
    { title: 'Tab 2', name: '2', content: 'Tab 2 content' },
])

const addTab = (targetName: string) => {
    const newTabName = `${++tabIndex2}`
    editableTabs2.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
    })
    editableTabsValue2.value = newTabName
}

const removeTab = (targetName: TabPaneName) => {
    const tabs = editableTabs2.value
    let activeName = editableTabsValue2.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        })
    }
    editableTabsValue2.value = activeName
    editableTabs2.value = tabs.filter((tab) => tab.name !== targetName)
}

// 代码字符串
const codeBasic = `<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
<\/script>`

const codeCard = `<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
<\/script>`

const codeBorderCard = `<template>
  <el-tabs type="border-card">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>`

const codePosition = `<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <el-radio-button value="top">top</el-radio-button>
    <el-radio-button value="right">right</el-radio-button>
    <el-radio-button value="bottom">bottom</el-radio-button>
    <el-radio-button value="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref<'top' | 'right' | 'bottom' | 'left'>('top')
<\/script>`

const codeCustomLabel = `<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
<\/script>

<style>
.custom-tabs-label .el-icon {
  vertical-align: middle;
}
.custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>`

const codeDynamic = `<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from 'element-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  { title: 'Tab 1', name: '1', content: 'Tab 1 content' },
  { title: 'Tab 2', name: '2', content: 'Tab 2 content' },
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = \`\${++tabIndex}\`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }
    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
<\/script>`

const codeCustomTrigger = `<template>
  <div style="margin-bottom: 20px">
    <el-button size="small" @click="addTab(editableTabsValue)">
      add tab
    </el-button>
  </div>
  <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from 'element-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  { title: 'Tab 1', name: '1', content: 'Tab 1 content' },
  { title: 'Tab 2', name: '2', content: 'Tab 2 content' },
])

const addTab = (targetName: string) => {
  const newTabName = \`\${++tabIndex}\`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  editableTabsValue.value = newTabName
}

const removeTab = (targetName: TabPaneName) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }
  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
<\/script>`

// API 数据
const tabsTableData: any[] = [
    { name: 'model-value / v-model', desc: '绑定值，选中选项卡的 name', type: 'string | number', default: '—' },
    { name: 'type', desc: '风格类型', type: "'card' | 'border-card' | ''", default: "''" },
    { name: 'closable', desc: '标签是否可关闭', type: 'boolean', default: 'false' },
    { name: 'addable', desc: '标签是否可增加', type: 'boolean', default: 'false' },
    { name: 'editable', desc: '标签是否同时可增加和关闭', type: 'boolean', default: 'false' },
    { name: 'tab-position', desc: '选项卡所在位置', type: "'top' | 'right' | 'bottom' | 'left'", default: 'top' },
    { name: 'stretch', desc: '标签的宽度是否自撑开', type: 'boolean', default: 'false' },
    { name: 'before-leave', desc: '切换标签之前的钩子函数，若返回 false 或者返回被 reject 的 Promise，则阻止切换', type: 'Function(activeName, oldActiveName)', default: '—' },
]

const tabsEventData: any[] = [
    { name: 'tab-click', desc: 'tab 被选中时触发', type: '(pane: TabsPaneContext, ev: Event) => void' },
    { name: 'tab-change', desc: 'activeName 改变时触发', type: '(name: TabPaneName) => void' },
    { name: 'tab-remove', desc: '点击 tab 移除按钮时触发', type: '(name: TabPaneName) => void' },
    { name: 'tab-add', desc: '点击 tab 新增按钮时触发', type: '() => void' },
    { name: 'edit', desc: '点击 tab 的新增或移除按钮后触发', type: '(paneName: TabPaneName | undefined, action: "remove" | "add") => void' },
]

const tabsSlotData: any[] = [
    { name: 'default', desc: '默认插槽' },
    { name: 'addIcon', desc: '自定义添加按钮图标' },
]

const tabPaneTableData: any[] = [
    { name: 'label', desc: '选项卡标题', type: 'string', default: '—' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'name', desc: '与选项卡绑定值 value 对应的标识符，表示选项卡别名', type: 'string | number', default: '—' },
    { name: 'closable', desc: '标签是否可关闭', type: 'boolean', default: 'false' },
    { name: 'lazy', desc: '标签是否延迟渲染', type: 'boolean', default: 'false' },
]

const tabPaneSlotData: any[] = [
    { name: 'default', desc: '默认插槽' },
    { name: 'label', desc: '自定义标签页标题' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.custom-tabs-label {
    .el-icon {
        vertical-align: middle;
    }
    
    span {
        vertical-align: middle;
        margin-left: 4px;
    }
}
</style>
