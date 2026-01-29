<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Calendar 日历</h1>
        <el-text class="mx-1" size="large">显示日期。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">设置 v-model 的值来指定当前显示的月份。 如果 v-model 未指定则显示当月。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-calendar v-model="valueBasic" />
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

        <h2 class="card_title_h2">自定义内容</h2>
        <el-text class="mx-1" size="large">通过设置名为 date-cell 的 scoped-slot 来自定义日历单元格中显示的内容。 在 scoped-slot 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-calendar v-model="valueCustom">
                    <template #date-cell="{ data }">
                        <p :class="data.isSelected ? 'is-selected' : ''">
                            {{ data.day.split('-').slice(1).join('-') }}
                            {{ data.isSelected ? '✔️' : '' }}
                        </p>
                    </template>
                </el-calendar>
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

        <h2 class="card_title_h2">范围</h2>
        <el-text class="mx-1" size="large">设置 range 属性指定日历的显示范围。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-calendar v-model="valueRange" :range="rangeValue" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeRange" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义头部</h2>
        <el-text class="mx-1" size="large">通过设置名为 header 的 scoped-slot 来自定义日历头部显示的内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-calendar ref="calendarRef" v-model="valueHeader">
                    <template #header="{ date }">
                        <div class="calendar-header">
                            <span>{{ date }}</span>
                            <el-button-group>
                                <el-button size="small" @click="selectDate('prev-year')">
                                    上一年
                                </el-button>
                                <el-button size="small" @click="selectDate('prev-month')">
                                    上个月
                                </el-button>
                                <el-button size="small" @click="selectDate('today')">今天</el-button>
                                <el-button size="small" @click="selectDate('next-month')">
                                    下个月
                                </el-button>
                                <el-button size="small" @click="selectDate('next-year')">
                                    下一年
                                </el-button>
                            </el-button-group>
                        </div>
                    </template>
                </el-calendar>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeHeader" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Calendar API</h2>
        <h2 class="card_title_h3">Calendar Attributes</h2>
        <el-table :data="calendarTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Calendar Events</h2>
        <el-table :data="calendarEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Calendar Slots</h2>
        <el-table :data="calendarSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Calendar Exposes</h2>
        <el-table :data="calendarExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentCalendar'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import type { CalendarInstance } from 'element-plus'

// 基础用法
const valueBasic = ref(new Date())

// 自定义内容
const valueCustom = ref(new Date())

// 范围
const valueRange = ref(new Date())
const rangeValue = ref<[Date, Date]>([
    new Date(2024, 1, 1),
    new Date(2024, 2, 28),
])

// 自定义头部
const calendarRef = ref<CalendarInstance>()
const valueHeader = ref(new Date())

const selectDate = (val: 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today') => {
    calendarRef.value?.selectDate(val)
}

// 代码字符串
const codeBasic = `<template>
  <el-calendar v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
<\/script>`

const codeCustom = `<template>
  <el-calendar v-model="value">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
<\/script>

<style scoped>
.is-selected {
  color: #1989fa;
}
</style>`

const codeRange = `<template>
  <el-calendar v-model="value" :range="range" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
const range = ref<[Date, Date]>([
  new Date(2024, 1, 1),
  new Date(2024, 2, 28),
])
<\/script>`

const codeHeader = `<template>
  <el-calendar ref="calendar" v-model="value">
    <template #header="{ date }">
      <div class="calendar-header">
        <span>{{ date }}</span>
        <el-button-group>
          <el-button size="small" @click="selectDate('prev-year')">
            上一年
          </el-button>
          <el-button size="small" @click="selectDate('prev-month')">
            上个月
          </el-button>
          <el-button size="small" @click="selectDate('today')">今天</el-button>
          <el-button size="small" @click="selectDate('next-month')">
            下个月
          </el-button>
          <el-button size="small" @click="selectDate('next-year')">
            下一年
          </el-button>
        </el-button-group>
      </div>
    </template>
  </el-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()
const value = ref(new Date())

const selectDate = (val: 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today') => {
  calendar.value?.selectDate(val)
}
<\/script>

<style scoped>
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>`

// API 数据
const calendarTableData: any[] = [
    { name: 'model-value / v-model', desc: '选中项绑定值', type: 'Date', default: '—' },
    { name: 'range', desc: '时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。', type: '[Date, Date]', default: '—' },
]

const calendarEventData: any[] = [
    { name: 'input', desc: '在用户选择日期时触发', type: '(value: Date) => void' },
]

const calendarSlotData: any[] = [
    { name: 'date-cell', desc: '自定义日期单元格内容', type: '{ data: { type: string, isSelected: boolean, day: string, date: Date } }' },
    { name: 'header', desc: '自定义日历头部内容', type: '{ date: string }' },
]

const calendarExposeData: any[] = [
    { name: 'selectDate', desc: '切换到指定日期', type: "(type: 'prev-month' | 'next-month' | 'prev-year' | 'next-year' | 'today') => void" },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.is-selected {
    color: #1989fa;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
