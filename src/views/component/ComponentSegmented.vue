<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Segmented 分段控制器</h1>
        <el-text class="mx-1" size="large">用于展示多个选项并允许用户选择其中单个选项。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">通过 v-model 绑定当前选中的值，通过 options 属性设置选项列表。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-segmented v-model="valueBasic" :options="optionsBasic" />
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

        <h2 class="card_title_h2">禁用状态</h2>
        <el-text class="mx-1" size="large">通过 disabled 属性可以禁用整个组件或单个选项。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-segmented-item">
                    <span class="demo-label">Disabled all:</span>
                    <el-segmented v-model="valueDisabled" :options="optionsBasic" disabled />
                </div>
                <div class="demo-segmented-item">
                    <span class="demo-label">Disabled option:</span>
                    <el-segmented v-model="valueDisabledOption" :options="optionsDisabled" />
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
                        <highlightjs autodetect :code="codeDisabled" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">块级展示</h2>
        <el-text class="mx-1" size="large">设置 block 属性使分段控制器填充父元素的宽度。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-segmented v-model="valueBlock" :options="optionsBasic" block />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeBlock" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义渲染</h2>
        <el-text class="mx-1" size="large">使用 default 插槽自定义选项的渲染内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-segmented v-model="valueCustom" :options="optionsCustom">
                    <template #default="{ item }">
                        <div class="custom-item">
                            <el-icon><component :is="item.icon" /></el-icon>
                            <span>{{ item.label }}</span>
                        </div>
                    </template>
                </el-segmented>
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

        <h2 class="card_title_h2">不同尺寸</h2>
        <el-text class="mx-1" size="large">通过 size 属性设置不同尺寸的分段控制器，支持 large、default、small 三种尺寸。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-segmented-item">
                    <span class="demo-label">Large:</span>
                    <el-segmented v-model="valueLarge" :options="optionsBasic" size="large" />
                </div>
                <div class="demo-segmented-item">
                    <span class="demo-label">Default:</span>
                    <el-segmented v-model="valueDefault" :options="optionsBasic" />
                </div>
                <div class="demo-segmented-item">
                    <span class="demo-label">Small:</span>
                    <el-segmented v-model="valueSmall" :options="optionsBasic" size="small" />
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
                        <highlightjs autodetect :code="codeSize" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Segmented API</h2>
        <h2 class="card_title_h3">Segmented Attributes</h2>
        <el-table :data="segmentedTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Segmented Events</h2>
        <el-table :data="segmentedEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Segmented Slots</h2>
        <el-table :data="segmentedSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Option Type</h2>
        <el-table :data="optionTypeData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentSegmented'
}
</script>

<script lang="tsx" setup>
import { ref, markRaw } from 'vue'
import { Calendar, Grid, List } from '@element-plus/icons-vue'

// 基础用法
const valueBasic = ref('Mon')
const optionsBasic = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// 禁用状态
const valueDisabled = ref('Mon')
const valueDisabledOption = ref('Mon')
const optionsDisabled = [
    { label: 'Mon', value: 'Mon' },
    { label: 'Tue', value: 'Tue' },
    { label: 'Wed', value: 'Wed', disabled: true },
    { label: 'Thu', value: 'Thu' },
    { label: 'Fri', value: 'Fri', disabled: true },
]

// 块级展示
const valueBlock = ref('Mon')

// 自定义渲染
const valueCustom = ref('list')
const optionsCustom = [
    { label: 'List', value: 'list', icon: markRaw(List) },
    { label: 'Grid', value: 'grid', icon: markRaw(Grid) },
    { label: 'Calendar', value: 'calendar', icon: markRaw(Calendar) },
]

// 不同尺寸
const valueLarge = ref('Mon')
const valueDefault = ref('Mon')
const valueSmall = ref('Mon')

// 代码字符串
const codeBasic = `<template>
  <el-segmented v-model="value" :options="options" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')
const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
<\/script>`

const codeDisabled = `<template>
  <!-- Disabled all -->
  <el-segmented v-model="value1" :options="options" disabled />

  <!-- Disabled option -->
  <el-segmented v-model="value2" :options="optionsWithDisabled" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('Mon')
const value2 = ref('Mon')

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const optionsWithDisabled = [
  { label: 'Mon', value: 'Mon' },
  { label: 'Tue', value: 'Tue' },
  { label: 'Wed', value: 'Wed', disabled: true },
  { label: 'Thu', value: 'Thu' },
  { label: 'Fri', value: 'Fri', disabled: true },
]
<\/script>`

const codeBlock = `<template>
  <el-segmented v-model="value" :options="options" block />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')
const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
<\/script>`

const codeCustom = `<template>
  <el-segmented v-model="value" :options="options">
    <template #default="{ item }">
      <div class="custom-item">
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.label }}</span>
      </div>
    </template>
  </el-segmented>
</template>

<script lang="ts" setup>
import { ref, markRaw } from 'vue'
import { Calendar, Grid, List } from '@element-plus/icons-vue'

const value = ref('list')
const options = [
  { label: 'List', value: 'list', icon: markRaw(List) },
  { label: 'Grid', value: 'grid', icon: markRaw(Grid) },
  { label: 'Calendar', value: 'calendar', icon: markRaw(Calendar) },
]
<\/script>

<style scoped>
.custom-item {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>`

const codeSize = `<template>
  <el-segmented v-model="valueLarge" :options="options" size="large" />
  <el-segmented v-model="valueDefault" :options="options" />
  <el-segmented v-model="valueSmall" :options="options" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const valueLarge = ref('Mon')
const valueDefault = ref('Mon')
const valueSmall = ref('Mon')
const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
<\/script>`

// API 数据
const segmentedTableData: any[] = [
    { name: 'model-value / v-model', desc: '绑定值', type: 'string | number', default: '—' },
    { name: 'options', desc: '选项数据', type: 'Option[]', default: '[]' },
    { name: 'size', desc: '控件大小', type: "'large' | 'default' | 'small'", default: 'default' },
    { name: 'block', desc: '是否为块级元素', type: 'boolean', default: 'false' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'validate-event', desc: '是否触发表单校验', type: 'boolean', default: 'true' },
    { name: 'name', desc: '原生 name 属性', type: 'string', default: '—' },
    { name: 'id', desc: '原生 id 属性', type: 'string', default: '—' },
    { name: 'aria-label', desc: 'aria-label 属性', type: 'string', default: '—' },
]

const segmentedEventData: any[] = [
    { name: 'change', desc: '绑定值变化时触发', type: '(value: string | number) => void' },
]

const segmentedSlotData: any[] = [
    { name: 'default', desc: '自定义选项内容', type: '{ item: Option }' },
]

const optionTypeData: any[] = [
    { name: 'label', desc: '显示文本', type: 'string', default: '—' },
    { name: 'value', desc: '选项值', type: 'string | number | boolean', default: '—' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-segmented-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
}

.demo-label {
    display: inline-block;
    width: 120px;
    font-size: 14px;
    color: #606266;
}

.custom-item {
    display: flex;
    align-items: center;
    gap: 4px;
}
</style>
