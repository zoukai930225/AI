<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Infinite Scroll 无限滚动</h1>
        <el-text class="mx-1" size="large">滚动至底部时，加载更多数据。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">在要实现滚动加载的列表上上添加 v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <ul v-infinite-scroll="loadBasic" class="infinite-list" style="overflow: auto">
                    <li v-for="i in countBasic" :key="i" class="infinite-list-item">{{ i }}</li>
                </ul>
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

        <h2 class="card_title_h2">禁用加载</h2>
        <el-text class="mx-1" size="large">通过设置 infinite-scroll-disabled 属性可以禁用无限滚动。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <ul
                    v-infinite-scroll="loadDisabled"
                    class="infinite-list"
                    style="overflow: auto"
                    :infinite-scroll-disabled="disabled"
                >
                    <li v-for="i in countDisabled" :key="i" class="infinite-list-item">{{ i }}</li>
                </ul>
                <p v-if="loading" class="loading-text">Loading...</p>
                <p v-if="noMore" class="loading-text">No more</p>
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

        <h2 class="card_title_h2">Infinite Scroll API</h2>
        <h2 class="card_title_h3">Infinite Scroll Attributes</h2>
        <el-table :data="infiniteScrollTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="220" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentInfiniteScroll'
}
</script>

<script lang="tsx" setup>
import { ref, computed } from 'vue'

// 基础用法
const countBasic = ref(10)
const loadBasic = () => {
    countBasic.value += 2
}

// 禁用加载
const countDisabled = ref(10)
const loading = ref(false)
const noMore = computed(() => countDisabled.value >= 20)
const disabled = computed(() => loading.value || noMore.value)

const loadDisabled = () => {
    loading.value = true
    setTimeout(() => {
        countDisabled.value += 2
        loading.value = false
    }, 2000)
}

// 代码字符串
const codeBasic = `<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(10)
const load = () => {
  count.value += 2
}
<\/script>

<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
</style>`

const codeDisabled = `<template>
  <ul
    v-infinite-scroll="load"
    class="infinite-list"
    style="overflow: auto"
    :infinite-scroll-disabled="disabled"
  >
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul>
  <p v-if="loading">Loading...</p>
  <p v-if="noMore">No more</p>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)

const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
<\/script>

<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
</style>`

// API 数据
const infiniteScrollTableData: any[] = [
    { name: 'infinite-scroll-disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'infinite-scroll-delay', desc: '节流时延，单位为 ms', type: 'number', default: '200' },
    { name: 'infinite-scroll-distance', desc: '触发加载的距离阈值，单位为 px', type: 'number', default: '0' },
    { name: 'infinite-scroll-immediate', desc: '是否立即执行加载方法，以防初始状态下内容无法撑满容器', type: 'boolean', default: 'true' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}

.loading-text {
    text-align: center;
    color: #909399;
}
</style>
