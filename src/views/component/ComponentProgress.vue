<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Progress 进度条</h1>
        <el-text class="mx-1" size="large">用于展示操作进度，告知用户当前状态和预期。</el-text>

        <h2 class="card_title_h2">直线进度条</h2>
        <el-text class="mx-1" size="large">Progress 组件设置 percentage 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。 你可以通过设置 format 来自定义文字显示的格式。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-progress :percentage="50" />
                <el-progress :percentage="100" :format="format" />
                <el-progress :percentage="100" status="success" />
                <el-progress :percentage="100" status="warning" />
                <el-progress :percentage="50" status="exception" />
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

        <h2 class="card_title_h2">进度条内显示百分比标识</h2>
        <el-text class="mx-1" size="large">百分比不占用额外控件，适用于文件上传等场景。Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来改变进度条内部的文字。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-progress :percentage="70" :stroke-width="26" text-inside />
                <el-progress :percentage="100" :stroke-width="24" text-inside status="success" />
                <el-progress :percentage="80" :stroke-width="22" text-inside status="warning" />
                <el-progress :percentage="50" :stroke-width="20" text-inside status="exception" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeTextInside" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义进度条的颜色</h2>
        <el-text class="mx-1" size="large">可以通过 color 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值、函数和数组。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-progress :percentage="percentage" :color="customColor" />
                <el-progress :percentage="percentage" :color="customColorMethod" />
                <el-progress :percentage="percentage" :color="customColors" />
                <div style="margin-top: 16px">
                    <el-button-group>
                        <el-button :icon="Minus" @click="decrease" />
                        <el-button :icon="Plus" @click="increase" />
                    </el-button-group>
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
                        <highlightjs autodetect :code="codeColor" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">环形进度条</h2>
        <el-text class="mx-1" size="large">Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-progress-circle">
                    <el-progress type="circle" :percentage="0" />
                    <el-progress type="circle" :percentage="25" />
                    <el-progress type="circle" :percentage="100" status="success" />
                    <el-progress type="circle" :percentage="70" status="warning" />
                    <el-progress type="circle" :percentage="50" status="exception" />
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
                        <highlightjs autodetect :code="codeCircle" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">仪表盘形进度条</h2>
        <el-text class="mx-1" size="large">您也可以指定 type 属性到 dashboard 使用控制面板进度栏。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-progress-circle">
                    <el-progress type="dashboard" :percentage="percentage" :color="customColors" />
                    <el-progress type="dashboard" :percentage="percentage2" :color="customColors" />
                </div>
                <div style="margin-top: 16px; text-align: center">
                    <el-button-group>
                        <el-button :icon="Minus" @click="decrease" />
                        <el-button :icon="Plus" @click="increase" />
                    </el-button-group>
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
                        <highlightjs autodetect :code="codeDashboard" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义内容</h2>
        <el-text class="mx-1" size="large">通过默认插槽添加自定义内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-progress-circle">
                    <el-progress type="circle" :percentage="percentage">
                        <template #default="{ percentage }">
                            <span class="percentage-value">{{ percentage }}%</span>
                            <span class="percentage-label">Progressing</span>
                        </template>
                    </el-progress>
                    <el-progress type="circle" :percentage="100" status="success">
                        <template #default>
                            <el-icon style="font-size: 32px; color: #67c23a"><Check /></el-icon>
                        </template>
                    </el-progress>
                    <el-progress type="circle" :percentage="50" status="exception">
                        <template #default>
                            <el-icon style="font-size: 32px; color: #f56c6c"><Close /></el-icon>
                        </template>
                    </el-progress>
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
                        <highlightjs autodetect :code="codeCustomContent" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">动画进度条</h2>
        <el-text class="mx-1" size="large">使用 indeterminate 属性来设置不确定的进度，duration 来控制动画持续时间。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-progress :percentage="50" indeterminate />
                <el-progress :percentage="100" :format="format" indeterminate />
                <el-progress :percentage="100" status="success" indeterminate :duration="5" />
                <el-progress :percentage="100" status="warning" indeterminate :duration="1" />
                <el-progress :percentage="50" status="exception" indeterminate />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeIndeterminate" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">条纹进度条</h2>
        <el-text class="mx-1" size="large">使用 striped 属性来设置条纹进度条，使用 striped-flow 属性来设置条纹的流动。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-progress :percentage="50" striped />
                <el-progress :percentage="100" striped status="success" />
                <el-progress :percentage="50" striped striped-flow />
                <el-progress :percentage="100" striped striped-flow :duration="10" status="success" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeStriped" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Progress API</h2>
        <h2 class="card_title_h3">Progress Attributes</h2>
        <el-table :data="progressTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Progress Slots</h2>
        <el-table :data="progressSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentProgress'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { Minus, Plus, Check, Close } from '@element-plus/icons-vue'

// 直线进度条
const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`)

// 自定义进度条的颜色
const percentage = ref(20)
const percentage2 = ref(80)
const customColor = '#409eff'

const customColorMethod = (percentage: number) => {
    if (percentage < 30) {
        return '#909399'
    }
    if (percentage < 70) {
        return '#e6a23c'
    }
    return '#67c23a'
}

const customColors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
    percentage.value += 10
    percentage2.value += 10
    if (percentage.value > 100) {
        percentage.value = 100
    }
    if (percentage2.value > 100) {
        percentage2.value = 100
    }
}

const decrease = () => {
    percentage.value -= 10
    percentage2.value -= 10
    if (percentage.value < 0) {
        percentage.value = 0
    }
    if (percentage2.value < 0) {
        percentage2.value = 0
    }
}

// 代码字符串
const codeBasic = `<template>
  <el-progress :percentage="50" />
  <el-progress :percentage="100" :format="format" />
  <el-progress :percentage="100" status="success" />
  <el-progress :percentage="100" status="warning" />
  <el-progress :percentage="50" status="exception" />
</template>

<script lang="ts" setup>
const format = (percentage: number) => (percentage === 100 ? 'Full' : \`\${percentage}%\`)
<\/script>`

const codeTextInside = `<template>
  <el-progress :percentage="70" :stroke-width="26" text-inside />
  <el-progress :percentage="100" :stroke-width="24" text-inside status="success" />
  <el-progress :percentage="80" :stroke-width="22" text-inside status="warning" />
  <el-progress :percentage="50" :stroke-width="20" text-inside status="exception" />
</template>`

const codeColor = `<template>
  <el-progress :percentage="percentage" :color="customColor" />
  <el-progress :percentage="percentage" :color="customColorMethod" />
  <el-progress :percentage="percentage" :color="customColors" />
  <el-button-group>
    <el-button :icon="Minus" @click="decrease" />
    <el-button :icon="Plus" @click="increase" />
  </el-button-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(20)
const customColor = '#409eff'

const customColorMethod = (percentage: number) => {
  if (percentage < 30) return '#909399'
  if (percentage < 70) return '#e6a23c'
  return '#67c23a'
}

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) percentage.value = 100
}

const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) percentage.value = 0
}
<\/script>`

const codeCircle = `<template>
  <el-progress type="circle" :percentage="0" />
  <el-progress type="circle" :percentage="25" />
  <el-progress type="circle" :percentage="100" status="success" />
  <el-progress type="circle" :percentage="70" status="warning" />
  <el-progress type="circle" :percentage="50" status="exception" />
</template>`

const codeDashboard = `<template>
  <el-progress type="dashboard" :percentage="percentage" :color="customColors" />
  <el-button-group>
    <el-button :icon="Minus" @click="decrease" />
    <el-button :icon="Plus" @click="increase" />
  </el-button-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(20)
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
<\/script>`

const codeCustomContent = `<template>
  <el-progress type="circle" :percentage="percentage">
    <template #default="{ percentage }">
      <span class="percentage-value">{{ percentage }}%</span>
      <span class="percentage-label">Progressing</span>
    </template>
  </el-progress>
  <el-progress type="circle" :percentage="100" status="success">
    <template #default>
      <el-icon style="font-size: 32px; color: #67c23a"><Check /></el-icon>
    </template>
  </el-progress>
</template>

<script lang="ts" setup>
import { Check, Close } from '@element-plus/icons-vue'
<\/script>`

const codeIndeterminate = `<template>
  <el-progress :percentage="50" indeterminate />
  <el-progress :percentage="100" :format="format" indeterminate />
  <el-progress :percentage="100" status="success" indeterminate :duration="5" />
  <el-progress :percentage="100" status="warning" indeterminate :duration="1" />
  <el-progress :percentage="50" status="exception" indeterminate />
</template>`

const codeStriped = `<template>
  <el-progress :percentage="50" striped />
  <el-progress :percentage="100" striped status="success" />
  <el-progress :percentage="50" striped striped-flow />
  <el-progress :percentage="100" striped striped-flow :duration="10" status="success" />
</template>`

// API 数据
const progressTableData: any[] = [
    { name: 'percentage', desc: '百分比，必填', type: 'number', default: '0' },
    { name: 'type', desc: '进度条类型', type: "'line' | 'circle' | 'dashboard'", default: 'line' },
    { name: 'stroke-width', desc: '进度条的宽度', type: 'number', default: '6' },
    { name: 'text-inside', desc: '进度条显示文字内置在进度条内（仅 type 为 line 时可用）', type: 'boolean', default: 'false' },
    { name: 'status', desc: '进度条当前状态', type: "'success' | 'exception' | 'warning'", default: '—' },
    { name: 'indeterminate', desc: '是否为动画进度条', type: 'boolean', default: 'false' },
    { name: 'duration', desc: '控制动画进度条速度和条纹进度条流动速度', type: 'number', default: '3' },
    { name: 'color', desc: '进度条背景色（会覆盖 status 状态颜色）', type: 'string | function | array', default: '—' },
    { name: 'width', desc: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）', type: 'number', default: '126' },
    { name: 'show-text', desc: '是否显示进度条文字内容', type: 'boolean', default: 'true' },
    { name: 'stroke-linecap', desc: 'circle/dashboard 类型路径两端的形状', type: "'butt' | 'round' | 'square'", default: 'round' },
    { name: 'format', desc: '指定进度条文字内容', type: '(percentage: number) => string', default: '—' },
    { name: 'striped', desc: '是否为条纹进度条', type: 'boolean', default: 'false' },
    { name: 'striped-flow', desc: '条纹进度条是否有流动效果', type: 'boolean', default: 'false' },
]

const progressSlotData: any[] = [
    { name: 'default', desc: '自定义内容，参数为 { percentage }', type: '{ percentage: number }' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;

    .el-progress {
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.demo-progress-circle {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    .el-progress {
        margin-bottom: 0;
    }
}

.percentage-value {
    display: block;
    font-size: 28px;
    font-weight: bold;
}

.percentage-label {
    display: block;
    font-size: 12px;
    color: #909399;
    margin-top: 4px;
}
</style>
