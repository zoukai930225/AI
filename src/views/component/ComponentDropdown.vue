<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Dropdown 下拉菜单</h1>
        <el-text class="mx-1" size="large">将动作或菜单折叠到下拉菜单中。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">悬停在下拉菜单上以展开更多操作。通过组件 slot 来设置下拉触发的元素以及需要通过具名 slot 为 dropdown 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        Dropdown List
                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
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

        <h2 class="card_title_h2">触发对象</h2>
        <el-text class="mx-1" size="large">可使用按钮触发下拉菜单。设置 split-button 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为 true 即可。 如果你想要在第三和第四个选项之间添加一个分隔符，你只需要为第四个选项添加一个 divider 的 CSS class。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-dropdown>
                    <el-button type="primary">
                        Dropdown List
                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item>Action 4</el-dropdown-item>
                            <el-dropdown-item>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <el-dropdown split-button type="primary" @click="handleClick" style="margin-left: 16px;">
                    Dropdown List
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item>Action 4</el-dropdown-item>
                            <el-dropdown-item>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeTriggerElement" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">触发方式</h2>
        <el-text class="mx-1" size="large">可以配置点击激活或者悬停激活。将 trigger 属性设置为 click 即可， 默认为 hover。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row class="block-col-2">
                    <el-col :span="8">
                        <span class="demonstration">hover to trigger</span>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                Dropdown List
                                <el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Action 1</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="8">
                        <span class="demonstration">click to trigger</span>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                Dropdown List
                                <el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Action 1</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="8">
                        <span class="demonstration">right click to trigger</span>
                        <el-dropdown trigger="contextmenu">
                            <span class="el-dropdown-link">
                                Dropdown List
                                <el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Action 1</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeTrigger" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">菜单隐藏方式</h2>
        <el-text class="mx-1" size="large">可以通过 hide-on-click 属性来配置。下拉菜单默认在点击菜单项后会被隐藏，将 hide-on-click 属性设置为 false 可以关闭此功能。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-dropdown :hide-on-click="false">
                    <span class="el-dropdown-link">
                        Dropdown List
                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeHideOnClick" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">指令事件</h2>
        <el-text class="mx-1" size="large">点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        Dropdown List
                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="a">Action 1</el-dropdown-item>
                            <el-dropdown-item command="b">Action 2</el-dropdown-item>
                            <el-dropdown-item command="c">Action 3</el-dropdown-item>
                            <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCommand" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">尺寸</h2>
        <el-text class="mx-1" size="large">Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。使用 size 属性配置尺寸，可选的尺寸大小有: large, default 或 small。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-dropdown split-button type="primary" size="large">
                    Large
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <el-dropdown split-button type="primary" style="margin-left: 16px;">
                    Default
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <el-dropdown split-button type="primary" size="small" style="margin-left: 16px;">
                    Small
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                            <el-dropdown-item>Action 3</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeSize" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Dropdown API</h2>
        <h2 class="card_title_h3">Dropdown Attributes</h2>
        <el-table :data="dropdownTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Dropdown Events</h2>
        <el-table :data="dropdownEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Dropdown Slots</h2>
        <el-table :data="dropdownSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Dropdown Exposes</h2>
        <el-table :data="dropdownExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">DropdownItem API</h2>
        <h2 class="card_title_h3">DropdownItem Attributes</h2>
        <el-table :data="dropdownItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">DropdownItem Slots</h2>
        <el-table :data="dropdownItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">DropdownMenu API</h2>
        <h2 class="card_title_h3">DropdownMenu Slots</h2>
        <el-table :data="dropdownMenuSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentDropdown'
}
</script>

<script lang="tsx" setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
    ElMessage('click on button')
}

const handleCommand = (command: string | number | object) => {
    ElMessage(`click on item ${command}`)
}

// 代码字符串
const codeBasic = `<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
<\/script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>`

const codeTriggerElement = `<template>
  <el-dropdown>
    <el-button type="primary">
      Dropdown List
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dropdown split-button type="primary" @click="handleClick">
    Dropdown List
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  ElMessage('click on button')
}
<\/script>`

const codeTrigger = `<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List (hover)
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Dropdown List (click)
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dropdown trigger="contextmenu">
    <span class="el-dropdown-link">
      Dropdown List (right click)
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
<\/script>`

const codeHideOnClick = `<template>
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
<\/script>`

const codeCommand = `<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">Action 1</el-dropdown-item>
        <el-dropdown-item command="b">Action 2</el-dropdown-item>
        <el-dropdown-item command="c">Action 3</el-dropdown-item>
        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  ElMessage(\`click on item \${command}\`)
}
<\/script>`

const codeSize = `<template>
  <el-dropdown split-button type="primary" size="large">
    Large
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-dropdown split-button type="primary" size="small">
    Small
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>`

// API 数据
const dropdownTableData: any[] = [
    { name: 'type', desc: '菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效', type: 'string', default: '—' },
    { name: 'size', desc: '菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效', type: "'large' | 'default' | 'small'", default: 'default' },
    { name: 'max-height', desc: '菜单最大高度', type: 'string | number', default: '—' },
    { name: 'split-button', desc: '下拉触发元素呈现为按钮组', type: 'boolean', default: 'false' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'placement', desc: '菜单弹出位置', type: "'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'", default: 'bottom' },
    { name: 'trigger', desc: '触发下拉的行为', type: "'hover' | 'click' | 'contextmenu'", default: 'hover' },
    { name: 'hide-on-click', desc: '是否在点击菜单项后隐藏菜单', type: 'boolean', default: 'true' },
    { name: 'show-timeout', desc: '展开下拉菜单的延时，仅在 trigger 为 hover 时有效', type: 'number', default: '150' },
    { name: 'hide-timeout', desc: '收起下拉菜单的延时，仅在 trigger 为 hover 时有效', type: 'number', default: '150' },
    { name: 'role', desc: 'aria 属性', type: 'string', default: 'menu' },
    { name: 'tabindex', desc: 'Dropdown 的 tabindex', type: 'number', default: '0' },
    { name: 'popper-class', desc: '自定义浮层类名', type: 'string', default: '—' },
    { name: 'popper-options', desc: 'popper.js 参数', type: 'object', default: '{ modifiers: [{ name: "computeStyles", options: { gpuAcceleration: false } }] }' },
    { name: 'teleported', desc: '是否将下拉列表插入至 body 元素', type: 'boolean', default: 'true' },
]

const dropdownEventData: any[] = [
    { name: 'click', desc: 'split-button 为 true 时，点击左侧按钮的回调', type: '(e: MouseEvent) => void' },
    { name: 'command', desc: '点击菜单项触发的事件回调', type: '(...args: any[]) => void' },
    { name: 'visible-change', desc: '下拉框出现/隐藏时触发', type: '(val: boolean) => void' },
]

const dropdownSlotData: any[] = [
    { name: 'default', desc: '下拉菜单的内容。 注意：必须是有效的 html DOM 元素（例如 <span>、<button> 等）或 el-component，以附加监听触发器' },
    { name: 'dropdown', desc: '下拉列表，通常是 <el-dropdown-menu> 组件' },
]

const dropdownExposeData: any[] = [
    { name: 'handleOpen', desc: '打开下拉菜单', type: '() => void' },
    { name: 'handleClose', desc: '关闭下拉菜单', type: '() => void' },
]

const dropdownItemTableData: any[] = [
    { name: 'command', desc: '指令', type: 'string | number | object', default: '—' },
    { name: 'disabled', desc: '禁用', type: 'boolean', default: 'false' },
    { name: 'divided', desc: '显示分割线', type: 'boolean', default: 'false' },
    { name: 'icon', desc: '自定义图标', type: 'string | Component', default: '—' },
]

const dropdownItemSlotData: any[] = [
    { name: 'default', desc: '自定义 DropdownItem 内容' },
]

const dropdownMenuSlotData: any[] = [
    { name: 'default', desc: 'DropdownMenu 的内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.el-icon--right {
    margin-left: 4px;
}

.demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.block-col-2 {
    .el-col {
        text-align: center;
    }
}
</style>
