<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Timeline 时间线</h1>
        <el-text class="mx-1" size="large">可视化地呈现时间流信息。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">Timeline 可拆分成多个按照时间戳排列的活动，时间戳是其区分于其他控件的重要特征，使用时注意与 Steps 步骤条等区分。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-timeline>
                    <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
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

        <h2 class="card_title_h2">⾃定义节点样式</h2>
        <el-text class="mx-1" size="large">可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-timeline>
                    <el-timeline-item
                        v-for="(activity, index) in activities2"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :hollow="activity.hollow"
                        :timestamp="activity.timestamp"
                    >
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
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

        <h2 class="card_title_h2">⾃定义时间戳</h2>
        <el-text class="mx-1" size="large">当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeTimestamp" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">垂直居中</h2>
        <el-text class="mx-1" size="large">垂直居中样式的 Timeline-Item。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-timeline>
                    <el-timeline-item center timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item center timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item center timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>Update Github template</h4>
                            <p>Tom committed 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
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

        <h2 class="card_title_h2">Timeline API</h2>
        <h2 class="card_title_h3">Timeline Slots</h2>
        <el-table :data="timelineSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Timeline-Item API</h2>
        <h2 class="card_title_h3">Timeline-Item Attributes</h2>
        <el-table :data="timelineItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Timeline-Item Slots</h2>
        <el-table :data="timelineItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentTimeline'
}
</script>

<script lang="tsx" setup>
import { markRaw } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

// 基础用法
const activities = [
    { content: 'Event start', timestamp: '2018-04-15' },
    { content: 'Approved', timestamp: '2018-04-13' },
    { content: 'Success', timestamp: '2018-04-11' },
    { content: 'Event end', timestamp: '2018-04-10' },
]

// 自定义节点样式
const activities2 = [
    { content: 'Custom icon', timestamp: '2018-04-12 20:46', size: 'large', type: 'primary', icon: markRaw(MoreFilled) },
    { content: 'Custom color', timestamp: '2018-04-03 20:46', color: '#0bbd87' },
    { content: 'Custom size', timestamp: '2018-04-03 20:46', size: 'large' },
    { content: 'Custom hollow', timestamp: '2018-04-03 20:46', type: 'primary', hollow: true },
    { content: 'Default node', timestamp: '2018-04-03 20:46' },
]

// 代码字符串
const codeBasic = `<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>
const activities = [
  { content: 'Event start', timestamp: '2018-04-15' },
  { content: 'Approved', timestamp: '2018-04-13' },
  { content: 'Success', timestamp: '2018-04-11' },
  { content: 'Event end', timestamp: '2018-04-10' },
]
<\/script>`

const codeCustom = `<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
  { content: 'Custom icon', timestamp: '2018-04-12 20:46', size: 'large', type: 'primary', icon: markRaw(MoreFilled) },
  { content: 'Custom color', timestamp: '2018-04-03 20:46', color: '#0bbd87' },
  { content: 'Custom size', timestamp: '2018-04-03 20:46', size: 'large' },
  { content: 'Custom hollow', timestamp: '2018-04-03 20:46', type: 'primary', hollow: true },
  { content: 'Default node', timestamp: '2018-04-03 20:46' },
]
<\/script>`

const codeTimestamp = `<template>
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>`

const codeCenter = `<template>
  <el-timeline>
    <el-timeline-item center timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>`

// API 数据
const timelineSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]

const timelineItemTableData: any[] = [
    { name: 'timestamp', desc: '时间戳', type: 'string', default: '—' },
    { name: 'hide-timestamp', desc: '是否隐藏时间戳', type: 'boolean', default: 'false' },
    { name: 'center', desc: '是否垂直居中', type: 'boolean', default: 'false' },
    { name: 'placement', desc: '时间戳位置', type: "'top' | 'bottom'", default: 'bottom' },
    { name: 'type', desc: '节点类型', type: "'primary' | 'success' | 'warning' | 'danger' | 'info'", default: '—' },
    { name: 'color', desc: '节点颜色', type: 'string', default: '—' },
    { name: 'size', desc: '节点尺寸', type: "'normal' | 'large'", default: 'normal' },
    { name: 'icon', desc: '自定义图标', type: 'string | Component', default: '—' },
    { name: 'hollow', desc: '是否空心点', type: 'boolean', default: 'false' },
]

const timelineItemSlotData: any[] = [
    { name: 'default', desc: '自定义内容' },
    { name: 'dot', desc: '自定义节点' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;

    h4 {
        margin: 0 0 10px;
        font-weight: 500;
    }

    p {
        margin: 0;
        font-size: 14px;
        color: #909399;
    }
}
</style>
