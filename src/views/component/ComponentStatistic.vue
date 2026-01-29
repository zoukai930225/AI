<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Statistic 统计数值</h1>
        <el-text class="mx-1" size="large">用于突出某个或某组数字时，如统计数值、金额、排名等。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">组件提供千位分隔符，通过 group-separator 可自定义分隔符，通过 precision 可控制数值精度。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="16">
                    <el-col :span="6">
                        <el-statistic :value="268500" />
                    </el-col>
                    <el-col :span="6">
                        <el-statistic :value="138500" :precision="2" decimal-separator="." group-separator="," />
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
                        <highlightjs autodetect :code="codeBasic" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带标题和单位</h2>
        <el-text class="mx-1" size="large">通过 title 属性设置标题，通过 prefix 和 suffix 属性设置前缀和后缀。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="16">
                    <el-col :span="6">
                        <el-statistic title="Daily active users" :value="268500">
                            <template #suffix>
                                <el-icon style="vertical-align: -0.125em"><User /></el-icon>
                            </template>
                        </el-statistic>
                    </el-col>
                    <el-col :span="6">
                        <el-statistic title="Total Sales" :value="562">
                            <template #prefix>
                                <el-icon style="vertical-align: -0.125em"><Goods /></el-icon>
                            </template>
                            <template #suffix>万</template>
                        </el-statistic>
                    </el-col>
                    <el-col :span="6">
                        <el-statistic title="Transactions" :value="8846215" prefix="¥" />
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
                        <highlightjs autodetect :code="codeTitle" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">倒计时</h2>
        <el-text class="mx-1" size="large">通过 el-countdown 提供倒计时功能，通过 format 属性自定义倒计时格式。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="16">
                    <el-col :span="6">
                        <el-countdown title="Countdown" :value="deadline" />
                    </el-col>
                    <el-col :span="6">
                        <el-countdown title="Day Level" :value="deadline2" format="DD [days] HH:mm:ss" />
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
                        <highlightjs autodetect :code="codeCountdown" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">倒计时控制</h2>
        <el-text class="mx-1" size="large">倒计时组件暴露 pause 和 resume 方法，用于暂停和继续倒计时。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="16">
                    <el-col :span="8">
                        <el-countdown ref="countdownRef" title="Controllable Countdown" format="HH:mm:ss" :value="deadline3" @finish="handleFinish" />
                    </el-col>
                </el-row>
                <div style="margin-top: 16px">
                    <el-button @click="handlePause">Pause</el-button>
                    <el-button @click="handleResume">Resume</el-button>
                    <el-button @click="handleReset">Reset</el-button>
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
                        <highlightjs autodetect :code="codeControl" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">卡片用法</h2>
        <el-text class="mx-1" size="large">在卡片中使用统计数值组件，展示更多信息。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="16">
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <el-statistic title="Daily Sales" :value="234500">
                                <template #suffix>
                                    <el-icon :size="14" color="#67c23a">
                                        <CaretTop />
                                    </el-icon>
                                    <span style="font-size: 14px; color: #67c23a;">12%</span>
                                </template>
                            </el-statistic>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <el-statistic title="New Users" :value="1280">
                                <template #suffix>
                                    <el-icon :size="14" color="#f56c6c">
                                        <CaretBottom />
                                    </el-icon>
                                    <span style="font-size: 14px; color: #f56c6c;">5%</span>
                                </template>
                            </el-statistic>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                            <el-statistic title="Active Users" :value="93">
                                <template #suffix>%</template>
                            </el-statistic>
                        </el-card>
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
                        <highlightjs autodetect :code="codeCard" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Statistic API</h2>
        <h2 class="card_title_h3">Statistic Attributes</h2>
        <el-table :data="statisticTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Statistic Slots</h2>
        <el-table :data="statisticSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Countdown API</h2>
        <h2 class="card_title_h3">Countdown Attributes</h2>
        <el-table :data="countdownTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Countdown Events</h2>
        <el-table :data="countdownEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Countdown Slots</h2>
        <el-table :data="countdownSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Countdown Exposes</h2>
        <el-table :data="countdownExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentStatistic'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { User, Goods, CaretTop, CaretBottom } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { CountdownInstance } from 'element-plus'

// 倒计时
const deadline = Date.now() + 1000 * 60 * 60 * 2 // 2 hours
const deadline2 = Date.now() + 1000 * 60 * 60 * 24 * 3 // 3 days
const deadline3 = ref(Date.now() + 1000 * 60 * 30) // 30 minutes

// 倒计时控制
const countdownRef = ref<CountdownInstance>()

const handlePause = () => {
    countdownRef.value?.pause()
}

const handleResume = () => {
    countdownRef.value?.resume()
}

const handleReset = () => {
    deadline3.value = Date.now() + 1000 * 60 * 30
}

const handleFinish = () => {
    ElMessage.success('Countdown finished!')
}

// 代码字符串
const codeBasic = `<template>
  <el-row :gutter="16">
    <el-col :span="6">
      <el-statistic :value="268500" />
    </el-col>
    <el-col :span="6">
      <el-statistic :value="138500" :precision="2" decimal-separator="." group-separator="," />
    </el-col>
  </el-row>
</template>`

const codeTitle = `<template>
  <el-row :gutter="16">
    <el-col :span="6">
      <el-statistic title="Daily active users" :value="268500">
        <template #suffix>
          <el-icon style="vertical-align: -0.125em"><User /></el-icon>
        </template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic title="Total Sales" :value="562">
        <template #prefix>
          <el-icon style="vertical-align: -0.125em"><Goods /></el-icon>
        </template>
        <template #suffix>万</template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic title="Transactions" :value="8846215" prefix="¥" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { User, Goods } from '@element-plus/icons-vue'
<\/script>`

const codeCountdown = `<template>
  <el-row :gutter="16">
    <el-col :span="6">
      <el-countdown title="Countdown" :value="deadline" />
    </el-col>
    <el-col :span="6">
      <el-countdown title="Day Level" :value="deadline2" format="DD [days] HH:mm:ss" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
const deadline = Date.now() + 1000 * 60 * 60 * 2 // 2 hours
const deadline2 = Date.now() + 1000 * 60 * 60 * 24 * 3 // 3 days
<\/script>`

const codeControl = `<template>
  <el-countdown ref="countdownRef" title="Controllable Countdown" format="HH:mm:ss" :value="deadline" @finish="handleFinish" />
  <el-button @click="handlePause">Pause</el-button>
  <el-button @click="handleResume">Resume</el-button>
  <el-button @click="handleReset">Reset</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { CountdownInstance } from 'element-plus'

const deadline = ref(Date.now() + 1000 * 60 * 30)
const countdownRef = ref<CountdownInstance>()

const handlePause = () => {
  countdownRef.value?.pause()
}

const handleResume = () => {
  countdownRef.value?.resume()
}

const handleReset = () => {
  deadline.value = Date.now() + 1000 * 60 * 30
}

const handleFinish = () => {
  ElMessage.success('Countdown finished!')
}
<\/script>`

const codeCard = `<template>
  <el-row :gutter="16">
    <el-col :span="8">
      <el-card shadow="hover">
        <el-statistic title="Daily Sales" :value="234500">
          <template #suffix>
            <el-icon :size="14" color="#67c23a">
              <CaretTop />
            </el-icon>
            <span style="font-size: 14px; color: #67c23a;">12%</span>
          </template>
        </el-statistic>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        <el-statistic title="New Users" :value="1280">
          <template #suffix>
            <el-icon :size="14" color="#f56c6c">
              <CaretBottom />
            </el-icon>
            <span style="font-size: 14px; color: #f56c6c;">5%</span>
          </template>
        </el-statistic>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { CaretTop, CaretBottom } from '@element-plus/icons-vue'
<\/script>`

// API 数据
const statisticTableData: any[] = [
    { name: 'value', desc: '数值内容', type: 'number', default: '0' },
    { name: 'decimal-separator', desc: '设置小数点符号', type: 'string', default: '.' },
    { name: 'formatter', desc: '自定义数值格式化', type: '(value: number) => string | number', default: '—' },
    { name: 'group-separator', desc: '设置千分位标识符', type: 'string', default: ',' },
    { name: 'precision', desc: '数值精度', type: 'number', default: '0' },
    { name: 'prefix', desc: '设置数值的前缀', type: 'string', default: '—' },
    { name: 'suffix', desc: '设置数值的后缀', type: 'string', default: '—' },
    { name: 'title', desc: '数值的标题', type: 'string', default: '—' },
    { name: 'value-style', desc: '数值的样式', type: 'CSSProperties', default: '—' },
]

const statisticSlotData: any[] = [
    { name: 'prefix', desc: '数值的前缀' },
    { name: 'suffix', desc: '数值的后缀' },
    { name: 'title', desc: '数值的标题' },
]

const countdownTableData: any[] = [
    { name: 'value', desc: '目标时间', type: 'number', default: '—' },
    { name: 'format', desc: '格式化倒计时', type: 'string', default: 'HH:mm:ss' },
    { name: 'prefix', desc: '设置倒计时前缀', type: 'string', default: '—' },
    { name: 'suffix', desc: '设置倒计时后缀', type: 'string', default: '—' },
    { name: 'title', desc: '倒计时标题', type: 'string', default: '—' },
    { name: 'value-style', desc: '倒计时值的样式', type: 'CSSProperties', default: '—' },
]

const countdownEventData: any[] = [
    { name: 'change', desc: '时间变化时触发', type: '(value: number) => void' },
    { name: 'finish', desc: '倒计时结束时触发', type: '() => void' },
]

const countdownSlotData: any[] = [
    { name: 'prefix', desc: '倒计时的前缀' },
    { name: 'suffix', desc: '倒计时的后缀' },
    { name: 'title', desc: '倒计时的标题' },
]

const countdownExposeData: any[] = [
    { name: 'pause', desc: '暂停倒计时', type: '() => void' },
    { name: 'resume', desc: '继续倒计时', type: '() => void' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}
</style>
