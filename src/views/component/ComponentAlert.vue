<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Alert 提示</h1>
        <el-text class="mx-1" size="large">用于页面中展示重要的提示信息。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">Alert 组件不属于浮层元素，不会自动消失或关闭。Alert 组件提供四种类型，由 type 属性指定，默认值为 info。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert title="success alert" type="success" />
                <el-alert title="info alert" type="info" />
                <el-alert title="warning alert" type="warning" />
                <el-alert title="error alert" type="error" />
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

        <h2 class="card_title_h2">主题</h2>
        <el-text class="mx-1" size="large">Alert 组件提供了两个不同的主题：light 和 dark。通过设置 effect 属性来改变主题，默认为 light。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert title="success alert" type="success" effect="dark" />
                <el-alert title="info alert" type="info" effect="dark" />
                <el-alert title="warning alert" type="warning" effect="dark" />
                <el-alert title="error alert" type="error" effect="dark" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeTheme" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义关闭按钮</h2>
        <el-text class="mx-1" size="large">你可以自定义关闭按钮为文字或其他符号。你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 true。 你可以设置 close-text 属性来代替右侧的关闭图标， 需要注意的是 close-text 必须是一个字符串。 当 Alert 组件被关闭时会触发 close 事件。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert title="unclosable alert" type="success" :closable="false" />
                <el-alert title="customized close-text" type="info" close-text="Gotcha" />
                <el-alert title="alert with callback" type="warning" @close="handleClose" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeClosable" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">使用图标</h2>
        <el-text class="mx-1" size="large">你可以通过为 Alert 组件添加图标来提高可读性。通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert title="success alert" type="success" show-icon />
                <el-alert title="info alert" type="info" show-icon />
                <el-alert title="warning alert" type="warning" show-icon />
                <el-alert title="error alert" type="error" show-icon />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeIcon" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">文字居中</h2>
        <el-text class="mx-1" size="large">使用 center 属性来让文字水平居中。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert title="success alert" type="success" center show-icon />
                <el-alert title="info alert" type="info" center show-icon />
                <el-alert title="warning alert" type="warning" center show-icon />
                <el-alert title="error alert" type="error" center show-icon />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCenter" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">文字描述</h2>
        <el-text class="mx-1" size="large">为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert
                    title="with description"
                    type="success"
                    description="This is a description."
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
                        <highlightjs autodetect :code="codeDescription" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带图标和描述</h2>
        <el-text class="mx-1" size="large">同时使用图标和描述。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-alert
                    title="success alert"
                    type="success"
                    description="more text description"
                    show-icon
                />
                <el-alert
                    title="info alert"
                    type="info"
                    description="more text description"
                    show-icon
                />
                <el-alert
                    title="warning alert"
                    type="warning"
                    description="more text description"
                    show-icon
                />
                <el-alert
                    title="error alert"
                    type="error"
                    description="more text description"
                    show-icon
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
                        <highlightjs autodetect :code="codeIconDesc" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Alert API</h2>
        <h2 class="card_title_h3">Alert Attributes</h2>
        <el-table :data="alertTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Alert Events</h2>
        <el-table :data="alertEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Alert Slots</h2>
        <el-table :data="alertSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentAlert'
}
</script>

<script lang="tsx" setup>
const handleClose = () => {
    console.log('Alert closed')
}

// 代码字符串
const codeBasic = `<template>
  <el-alert title="success alert" type="success" />
  <el-alert title="info alert" type="info" />
  <el-alert title="warning alert" type="warning" />
  <el-alert title="error alert" type="error" />
</template>`

const codeTheme = `<template>
  <el-alert title="success alert" type="success" effect="dark" />
  <el-alert title="info alert" type="info" effect="dark" />
  <el-alert title="warning alert" type="warning" effect="dark" />
  <el-alert title="error alert" type="error" effect="dark" />
</template>`

const codeClosable = `<template>
  <el-alert title="unclosable alert" type="success" :closable="false" />
  <el-alert title="customized close-text" type="info" close-text="Gotcha" />
  <el-alert title="alert with callback" type="warning" @close="handleClose" />
</template>

<script lang="ts" setup>
const handleClose = () => {
  console.log('Alert closed')
}
<\/script>`

const codeIcon = `<template>
  <el-alert title="success alert" type="success" show-icon />
  <el-alert title="info alert" type="info" show-icon />
  <el-alert title="warning alert" type="warning" show-icon />
  <el-alert title="error alert" type="error" show-icon />
</template>`

const codeCenter = `<template>
  <el-alert title="success alert" type="success" center show-icon />
  <el-alert title="info alert" type="info" center show-icon />
  <el-alert title="warning alert" type="warning" center show-icon />
  <el-alert title="error alert" type="error" center show-icon />
</template>`

const codeDescription = `<template>
  <el-alert
    title="with description"
    type="success"
    description="This is a description."
  />
</template>`

const codeIconDesc = `<template>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  />
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  />
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  />
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  />
</template>`

// API 数据
const alertTableData: any[] = [
    { name: 'title', desc: 'Alert 标题', type: 'string', default: '—' },
    { name: 'type', desc: 'Alert 类型', type: "'success' | 'warning' | 'info' | 'error'", default: 'info' },
    { name: 'description', desc: '描述性文本', type: 'string', default: '—' },
    { name: 'closable', desc: '是否可以关闭', type: 'boolean', default: 'true' },
    { name: 'center', desc: '文字是否居中', type: 'boolean', default: 'false' },
    { name: 'close-text', desc: '自定义关闭按钮文本', type: 'string', default: '—' },
    { name: 'show-icon', desc: '是否显示类型图标', type: 'boolean', default: 'false' },
    { name: 'effect', desc: '主题样式', type: "'light' | 'dark'", default: 'light' },
]

const alertEventData: any[] = [
    { name: 'close', desc: '关闭 Alert 时触发的事件', type: '() => void' },
]

const alertSlotData: any[] = [
    { name: 'default', desc: '默认插槽，用于设置 Alert 的描述' },
    { name: 'title', desc: '标题的内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
    
    .el-alert {
        margin-bottom: 16px;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
