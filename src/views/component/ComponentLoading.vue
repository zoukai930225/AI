<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Loading 加载</h1>
        <el-text class="mx-1" size="large">加载数据时显示动效。</el-text>

        <h2 class="card_title_h2">区域加载</h2>
        <el-text class="mx-1" size="large">在表格等容器中加载数据时显示。Element Plus 提供了两种调用 Loading 的方法：指令和服务。 对于自定义指令 v-loading，只需要绑定 boolean 值即可。 默认状况下，Loading 遮罩会插入到绑定元素的子节点。 通过添加 body 修饰符，可以使遮罩插入至 DOM 中的 body 上。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table v-loading="loading" :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
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

        <h2 class="card_title_h2">自定义加载中组件内容</h2>
        <el-text class="mx-1" size="large">你可以自定义加载中组件的文字，图标，以及背景颜色。在绑定了 v-loading 指令的元素上添加 element-loading-text 属性，其值会被渲染为加载文案，并显示在加载图标的下方。 类似地，element-loading-spinner、element-loading-background 和 element-loading-svg 属性分别用来设定 svg 图标、背景色值、加载图标。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table
                    v-loading="loading2"
                    element-loading-text="Loading..."
                    element-loading-background="rgba(122, 122, 122, 0.8)"
                    :data="tableData"
                    style="width: 100%"
                >
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
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

        <h2 class="card_title_h2">自定义加载图标</h2>
        <el-text class="mx-1" size="large">使用 element-loading-svg 属性来自定义加载图标。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-table
                    v-loading="loading3"
                    element-loading-text="Loading..."
                    :element-loading-svg="svg"
                    element-loading-svg-view-box="-10, -10, 50, 50"
                    :data="tableData"
                    style="width: 100%"
                >
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeSvg" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">全屏加载</h2>
        <el-text class="mx-1" size="large">加载数据时显示全屏动画。当使用指令方式时，全屏遮罩需要添加 fullscreen 修饰符（遮罩会插入至 body 上）。 此时若需要锁定屏幕的滚动，可以使用 lock 修饰符。 当使用服务方式时，遮罩默认即为全屏，无需额外设置。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button
                    v-loading.fullscreen.lock="fullscreenLoading"
                    type="primary"
                    @click="openFullScreen1"
                >
                    As a directive
                </el-button>
                <el-button type="primary" @click="openFullScreen2" style="margin-left: 16px;">
                    As a service
                </el-button>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeFullscreen" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">以服务的方式来调用</h2>
        <el-text class="mx-1" size="large">Loading 还可以以服务的方式调用。 你可以像这样引入 Loading 服务。Loading 服务会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="openServiceLoading">
                    Open Loading Service
                </el-button>
                <el-button type="primary" @click="openTargetLoading" style="margin-left: 16px;">
                    Open Loading on Target
                </el-button>
                <div ref="targetRef" class="loading-target" style="margin-top: 20px;">
                    Target Area
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
                        <highlightjs autodetect :code="codeService" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Loading API</h2>
        <h2 class="card_title_h3">指令</h2>
        <el-table :data="directiveTableData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="250" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">配置项</h2>
        <el-table :data="optionsTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentLoading'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const loading = ref(true)
const loading2 = ref(true)
const loading3 = ref(true)
const fullscreenLoading = ref(false)
const targetRef = ref<HTMLElement>()

const tableData = [
    { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
    { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
    { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]

const svg = `
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`

const openFullScreen1 = () => {
    fullscreenLoading.value = true
    setTimeout(() => {
        fullscreenLoading.value = false
    }, 2000)
}

const openFullScreen2 = () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}

const openServiceLoading = () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}

const openTargetLoading = () => {
    const loading = ElLoading.service({
        target: targetRef.value,
        text: 'Loading...',
    })
    setTimeout(() => {
        loading.close()
    }, 2000)
}

// 代码字符串
const codeBasic = `<template>
  <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]
<\/script>`

const codeCustom = `<template>
  <el-table
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-background="rgba(122, 122, 122, 0.8)"
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
]
<\/script>`

const codeSvg = `<template>
  <el-table
    v-loading="loading"
    element-loading-text="Loading..."
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const svg = \`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
\`
<\/script>`

const codeFullscreen = `<template>
  <el-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </el-button>
  <el-button type="primary" @click="openFullScreen2">
    As a service
  </el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const fullscreenLoading = ref(false)

const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}

const openFullScreen2 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<\/script>`

const codeService = `<template>
  <el-button type="primary" @click="openServiceLoading">
    Open Loading Service
  </el-button>
  <el-button type="primary" @click="openTargetLoading">
    Open Loading on Target
  </el-button>
  <div ref="targetRef" class="loading-target">
    Target Area
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const targetRef = ref<HTMLElement>()

const openServiceLoading = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}

const openTargetLoading = () => {
  const loading = ElLoading.service({
    target: targetRef.value,
    text: 'Loading...',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<\/script>

<style scoped>
.loading-target {
  width: 100%;
  height: 200px;
  background: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>`

// API 数据
const directiveTableData: any[] = [
    { name: 'v-loading', desc: '是否显示动画', type: 'boolean' },
    { name: 'element-loading-text', desc: '显示在加载图标下方的加载文案', type: 'string' },
    { name: 'element-loading-spinner', desc: '自定义加载图标类名', type: 'string' },
    { name: 'element-loading-svg', desc: '自定义加载图标 (与 spinner 相同)', type: 'string' },
    { name: 'element-loading-svg-view-box', desc: '加载图标的 viewBox 属性', type: 'string' },
    { name: 'element-loading-background', desc: '背景遮罩的颜色', type: 'string' },
    { name: 'element-loading-custom-class', desc: 'Loading 的自定义类名', type: 'string' },
]

const optionsTableData: any[] = [
    { name: 'target', desc: 'Loading 需要覆盖的 DOM 节点。 可传入一个 DOM 对象或字符串。 若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点', type: 'string | HTMLElement', default: 'document.body' },
    { name: 'body', desc: '同 v-loading 指令中的 body 修饰符', type: 'boolean', default: 'false' },
    { name: 'fullscreen', desc: '同 v-loading 指令中的 fullscreen 修饰符', type: 'boolean', default: 'true' },
    { name: 'lock', desc: '同 v-loading 指令中的 lock 修饰符', type: 'boolean', default: 'false' },
    { name: 'text', desc: '显示在加载图标下方的加载文案', type: 'string', default: '—' },
    { name: 'spinner', desc: '自定义加载图标类名', type: 'string', default: '—' },
    { name: 'background', desc: '遮罩背景色', type: 'string', default: '—' },
    { name: 'customClass', desc: 'Loading 的自定义类名', type: 'string', default: '—' },
    { name: 'svg', desc: '自定义 SVG 图标', type: 'string', default: '—' },
    { name: 'svgViewBox', desc: '加载图标的 viewBox 属性', type: 'string', default: '—' },
    { name: 'beforeClose', desc: '关闭前的回调函数', type: '() => boolean', default: '—' },
    { name: 'closed', desc: '关闭后的回调函数', type: '() => void', default: '—' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.loading-target {
    width: 100%;
    height: 200px;
    background: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}
</style>
