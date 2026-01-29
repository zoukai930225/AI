<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Tour 漫游式引导</h1>
        <el-text class="mx-1" size="large">用于分步引导用户了解产品功能的气泡组件。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">最简单的用法是通过 target 指定引导的目标元素。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="openBasic = true">Begin Tour</el-button>
                <div class="demo-tour-container">
                    <el-button ref="ref1">Upload</el-button>
                    <el-button ref="ref2" type="primary">Save</el-button>
                    <el-button ref="ref3" type="danger">More</el-button>
                </div>
                <el-tour v-model="openBasic" :steps="stepsBasic" />
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

        <h2 class="card_title_h2">非模态</h2>
        <el-text class="mx-1" size="large">使用 mask 属性可以控制是否显示遮罩层，默认为 true。设置为 false 可以在不中断用户操作的情况下进行引导。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="openNonModal = true">Begin Tour</el-button>
                <div class="demo-tour-container">
                    <el-button ref="ref4">Upload</el-button>
                    <el-button ref="ref5" type="primary">Save</el-button>
                    <el-button ref="ref6" type="danger">More</el-button>
                </div>
                <el-tour v-model="openNonModal" :steps="stepsNonModal" :mask="false" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeNonModal" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">位置</h2>
        <el-text class="mx-1" size="large">通过 placement 属性可以改变引导的弹出位置，支持 12 个方向。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="openPlacement = true">Begin Tour</el-button>
                <div class="demo-tour-container" style="justify-content: center;">
                    <el-button ref="ref7" type="primary">Target</el-button>
                </div>
                <el-tour v-model="openPlacement" :steps="stepsPlacement" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codePlacement" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义遮罩样式</h2>
        <el-text class="mx-1" size="large">通过 mask 属性可以自定义遮罩层的样式和填充区域。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="openMask = true">Begin Tour</el-button>
                <div class="demo-tour-container">
                    <el-button ref="ref8">Upload</el-button>
                    <el-button ref="ref9" type="primary">Save</el-button>
                </div>
                <el-tour v-model="openMask" :steps="stepsMask" :mask="{ style: { boxShadow: 'inset 0 0 15px #333' }, color: 'rgba(40, 40, 40, 0.4)' }" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeMask" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Tour API</h2>
        <h2 class="card_title_h3">Tour Attributes</h2>
        <el-table :data="tourTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tour Events</h2>
        <el-table :data="tourEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tour Slots</h2>
        <el-table :data="tourSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">TourStep API</h2>
        <h2 class="card_title_h3">TourStep Attributes</h2>
        <el-table :data="tourStepTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">TourStep Slots</h2>
        <el-table :data="tourStepSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentTour'
}
</script>

<script lang="tsx" setup>
import { ref, computed } from 'vue'
import type { TourStepProps } from 'element-plus'

// 基础用法
const openBasic = ref(false)
const ref1 = ref(null)
const ref2 = ref(null)
const ref3 = ref(null)

const stepsBasic = computed<TourStepProps[]>(() => [
    { target: ref1.value, title: 'Upload File', description: 'Put your files here.' },
    { target: ref2.value, title: 'Save', description: 'Save your changes.' },
    { target: ref3.value, title: 'Other Actions', description: 'Click to see other actions.' },
])

// 非模态
const openNonModal = ref(false)
const ref4 = ref(null)
const ref5 = ref(null)
const ref6 = ref(null)

const stepsNonModal = computed<TourStepProps[]>(() => [
    { target: ref4.value, title: 'Upload File', description: 'Put your files here.' },
    { target: ref5.value, title: 'Save', description: 'Save your changes.' },
    { target: ref6.value, title: 'Other Actions', description: 'Click to see other actions.' },
])

// 位置
const openPlacement = ref(false)
const ref7 = ref(null)

const stepsPlacement = computed<TourStepProps[]>(() => [
    { target: ref7.value, title: 'Center', description: 'Displayed in the center of screen.', placement: 'bottom' },
    { target: ref7.value, title: 'Right', description: 'Displayed on the right.', placement: 'right' },
    { target: ref7.value, title: 'Top', description: 'Displayed on the top.', placement: 'top' },
    { target: ref7.value, title: 'Left', description: 'Displayed on the left.', placement: 'left' },
])

// 自定义遮罩样式
const openMask = ref(false)
const ref8 = ref(null)
const ref9 = ref(null)

const stepsMask = computed<TourStepProps[]>(() => [
    { target: ref8.value, title: 'Upload File', description: 'Put your files here.' },
    { target: ref9.value, title: 'Save', description: 'Save your changes.' },
])

// 代码字符串
const codeBasic = `<template>
  <el-button type="primary" @click="open = true">Begin Tour</el-button>
  <div class="demo-tour-container">
    <el-button ref="ref1">Upload</el-button>
    <el-button ref="ref2" type="primary">Save</el-button>
    <el-button ref="ref3" type="danger">More</el-button>
  </div>
  <el-tour v-model="open" :steps="steps" />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { TourStepProps } from 'element-plus'

const open = ref(false)
const ref1 = ref(null)
const ref2 = ref(null)
const ref3 = ref(null)

const steps = computed<TourStepProps[]>(() => [
  { target: ref1.value, title: 'Upload File', description: 'Put your files here.' },
  { target: ref2.value, title: 'Save', description: 'Save your changes.' },
  { target: ref3.value, title: 'Other Actions', description: 'Click to see other actions.' },
])
<\/script>`

const codeNonModal = `<template>
  <el-button type="primary" @click="open = true">Begin Tour</el-button>
  <div class="demo-tour-container">
    <el-button ref="ref1">Upload</el-button>
    <el-button ref="ref2" type="primary">Save</el-button>
    <el-button ref="ref3" type="danger">More</el-button>
  </div>
  <el-tour v-model="open" :steps="steps" :mask="false" />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { TourStepProps } from 'element-plus'

const open = ref(false)
const ref1 = ref(null)
const ref2 = ref(null)
const ref3 = ref(null)

const steps = computed<TourStepProps[]>(() => [
  { target: ref1.value, title: 'Upload File', description: 'Put your files here.' },
  { target: ref2.value, title: 'Save', description: 'Save your changes.' },
  { target: ref3.value, title: 'Other Actions', description: 'Click to see other actions.' },
])
<\/script>`

const codePlacement = `<template>
  <el-button type="primary" @click="open = true">Begin Tour</el-button>
  <div class="demo-tour-container">
    <el-button ref="ref1" type="primary">Target</el-button>
  </div>
  <el-tour v-model="open" :steps="steps" />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { TourStepProps } from 'element-plus'

const open = ref(false)
const ref1 = ref(null)

const steps = computed<TourStepProps[]>(() => [
  { target: ref1.value, title: 'Center', description: 'Displayed in the center of screen.', placement: 'bottom' },
  { target: ref1.value, title: 'Right', description: 'Displayed on the right.', placement: 'right' },
  { target: ref1.value, title: 'Top', description: 'Displayed on the top.', placement: 'top' },
  { target: ref1.value, title: 'Left', description: 'Displayed on the left.', placement: 'left' },
])
<\/script>`

const codeMask = `<template>
  <el-button type="primary" @click="open = true">Begin Tour</el-button>
  <div class="demo-tour-container">
    <el-button ref="ref1">Upload</el-button>
    <el-button ref="ref2" type="primary">Save</el-button>
  </div>
  <el-tour
    v-model="open"
    :steps="steps"
    :mask="{
      style: { boxShadow: 'inset 0 0 15px #333' },
      color: 'rgba(40, 40, 40, 0.4)'
    }"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { TourStepProps } from 'element-plus'

const open = ref(false)
const ref1 = ref(null)
const ref2 = ref(null)

const steps = computed<TourStepProps[]>(() => [
  { target: ref1.value, title: 'Upload File', description: 'Put your files here.' },
  { target: ref2.value, title: 'Save', description: 'Save your changes.' },
])
<\/script>`

// API 数据
const tourTableData: any[] = [
    { name: 'model-value / v-model', desc: '是否打开引导', type: 'boolean', default: 'false' },
    { name: 'steps', desc: '引导步骤', type: 'TourStepProps[]', default: '[]' },
    { name: 'current', desc: '当前步骤', type: 'number', default: '0' },
    { name: 'show-arrow', desc: '是否显示箭头', type: 'boolean', default: 'true' },
    { name: 'show-close', desc: '是否显示关闭按钮', type: 'boolean', default: 'true' },
    { name: 'close-icon', desc: '自定义关闭图标', type: 'string | Component', default: 'Close' },
    { name: 'placement', desc: '引导卡片相对于目标元素的位置', type: 'string', default: 'bottom' },
    { name: 'mask', desc: '是否启用蒙层，也可以传入配置改变蒙层样式和填充色', type: 'boolean | Object', default: 'true' },
    { name: 'type', desc: '类型，影响底色与文字颜色', type: "'default' | 'primary'", default: 'default' },
    { name: 'scroll-into-view-options', desc: '是否支持当前元素滚动到视窗内', type: 'boolean | ScrollIntoViewOptions', default: '{ block: "center" }' },
    { name: 'z-index', desc: 'Tour 的层级', type: 'number', default: '2001' },
    { name: 'close-on-press-escape', desc: '是否可以通过 ESC 关闭引导', type: 'boolean', default: 'true' },
    { name: 'target-area-clickable', desc: '蒙层启用时，target 元素区域是否可以点击', type: 'boolean', default: 'true' },
]

const tourEventData: any[] = [
    { name: 'close', desc: '关闭引导时触发', type: '(current: number) => void' },
    { name: 'finish', desc: '引导完成时触发', type: '() => void' },
    { name: 'change', desc: '步骤改变时触发', type: '(current: number) => void' },
]

const tourSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'indicators', desc: '自定义指示器' },
]

const tourStepTableData: any[] = [
    { name: 'target', desc: '获取引导卡片指向的元素', type: 'HTMLElement | Ref<HTMLElement> | (() => HTMLElement)', default: '—' },
    { name: 'title', desc: '标题', type: 'string', default: '—' },
    { name: 'description', desc: '描述', type: 'string', default: '—' },
    { name: 'show-arrow', desc: '是否显示箭头', type: 'boolean', default: 'true' },
    { name: 'show-close', desc: '是否显示关闭按钮', type: 'boolean', default: 'true' },
    { name: 'close-icon', desc: '自定义关闭图标', type: 'string | Component', default: 'Close' },
    { name: 'placement', desc: '引导卡片相对于目标元素的位置', type: 'string', default: 'bottom' },
    { name: 'mask', desc: '是否启用蒙层', type: 'boolean | Object', default: 'true' },
    { name: 'type', desc: '类型', type: "'default' | 'primary'", default: 'default' },
    { name: 'next-button-props', desc: '下一步按钮的属性', type: 'object', default: '—' },
    { name: 'prev-button-props', desc: '上一步按钮的属性', type: 'object', default: '—' },
    { name: 'scroll-into-view-options', desc: '是否支持当前元素滚动到视窗内', type: 'boolean | ScrollIntoViewOptions', default: '{ block: "center" }' },
]

const tourStepSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'header', desc: '自定义头部' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-tour-container {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    padding: 24px;
    background: #f5f7fa;
    border-radius: 4px;
}
</style>
