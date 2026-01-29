<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Skeleton 骨架屏</h1>
        <el-text class="mx-1" size="large">在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">基础的骨架效果。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-skeleton />
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

        <h2 class="card_title_h2">更多参数</h2>
        <el-text class="mx-1" size="large">可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-skeleton :rows="5" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeRows" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">动画效果</h2>
        <el-text class="mx-1" size="large">显示动画效果。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-skeleton :rows="5" animated />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeAnimated" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义样式</h2>
        <el-text class="mx-1" size="large">Element Plus 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot template 来自己设定模板。我们提供了不同的模板单元可供使用，具体可选值请看 API 详细说明。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-skeleton style="width: 240px">
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                        <div style="padding: 14px">
                            <el-skeleton-item variant="p" style="width: 50%" />
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;">
                                <el-skeleton-item variant="text" style="margin-right: 16px" />
                                <el-skeleton-item variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>
                </el-skeleton>
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

        <h2 class="card_title_h2">加载状态</h2>
        <el-text class="mx-1" size="large">当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 loading 属性的值来控制是否显示加载后的 DOM。也可以通过具名插槽 default 来设置当 loading 结束之后需要展示的 UI。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-space direction="vertical" alignment="flex-start">
                    <el-switch v-model="loading" />
                    <el-skeleton style="width: 240px" :loading="loading" animated>
                        <template #template>
                            <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                            <div style="padding: 14px">
                                <el-skeleton-item variant="h3" style="width: 50%" />
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;">
                                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                                    <el-skeleton-item variant="text" style="width: 30%" />
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <el-card :body-style="{ padding: '0px' }" style="width: 240px">
                                <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    class="image"
                                />
                                <div style="padding: 14px">
                                    <span>Delicious hamburger</span>
                                    <div class="bottom">
                                        <time class="time">{{ currentDate }}</time>
                                        <el-button text class="button">Operation</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </template>
                    </el-skeleton>
                </el-space>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeLoading" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">渲染多条数据</h2>
        <el-text class="mx-1" size="large">大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 count 属性就能控制渲染多少条假的数据在页面上。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-space direction="vertical" alignment="flex-start">
                    <el-switch v-model="loadingCount" />
                    <el-skeleton style="width: 400px" :loading="loadingCount" animated :count="3">
                        <template #template>
                            <div style="display: flex; align-items: center; margin-bottom: 16px;">
                                <el-skeleton-item variant="circle" style="width: 36px; height: 36px; margin-right: 12px;" />
                                <el-skeleton-item variant="h1" style="width: 30%" />
                            </div>
                        </template>
                        <template #default>
                            <div v-for="item in lists" :key="item.name" style="display: flex; align-items: center; margin-bottom: 16px;">
                                <el-avatar :src="item.avatar" style="margin-right: 12px;" />
                                <span>{{ item.name }}</span>
                            </div>
                        </template>
                    </el-skeleton>
                </el-space>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCount" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">防止渲染抖动</h2>
        <el-text class="mx-1" size="large">有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 throttle 属性来避免这个问题。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-space direction="vertical" alignment="flex-start">
                    <el-switch v-model="loadingThrottle" />
                    <el-skeleton style="width: 240px" :loading="loadingThrottle" animated :throttle="500">
                        <template #template>
                            <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                            <div style="padding: 14px">
                                <el-skeleton-item variant="h3" style="width: 50%" />
                            </div>
                        </template>
                        <template #default>
                            <el-card :body-style="{ padding: '0px' }" style="width: 240px">
                                <img
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    class="image"
                                />
                                <div style="padding: 14px">
                                    <span>Delicious hamburger</span>
                                </div>
                            </el-card>
                        </template>
                    </el-skeleton>
                </el-space>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeThrottle" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Skeleton API</h2>
        <h2 class="card_title_h3">Skeleton Attributes</h2>
        <el-table :data="skeletonTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Skeleton Slots</h2>
        <el-table :data="skeletonSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Skeleton-Item API</h2>
        <h2 class="card_title_h3">Skeleton-Item Attributes</h2>
        <el-table :data="skeletonItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="280" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentSkeleton'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'

// 加载状态
const loading = ref(true)
const currentDate = new Date().toLocaleDateString()

// 渲染多条数据
const loadingCount = ref(true)
const lists = [
    { name: 'John', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
    { name: 'Alice', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
    { name: 'Bob', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
]

// 防止渲染抖动
const loadingThrottle = ref(false)

// 代码字符串
const codeBasic = `<template>
  <el-skeleton />
</template>`

const codeRows = `<template>
  <el-skeleton :rows="5" />
</template>`

const codeAnimated = `<template>
  <el-skeleton :rows="5" animated />
</template>`

const codeCustom = `<template>
  <el-skeleton style="width: 240px">
    <template #template>
      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <el-skeleton-item variant="p" style="width: 50%" />
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;">
          <el-skeleton-item variant="text" style="margin-right: 16px" />
          <el-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
  </el-skeleton>
</template>`

const codeLoading = `<template>
  <el-switch v-model="loading" />
  <el-skeleton style="width: 240px" :loading="loading" animated>
    <template #template>
      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <el-skeleton-item variant="h3" style="width: 50%" />
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;">
          <el-skeleton-item variant="text" style="margin-right: 16px" />
          <el-skeleton-item variant="text" style="width: 30%" />
        </div>
      </div>
    </template>
    <template #default>
      <el-card :body-style="{ padding: '0px' }" style="width: 240px">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
        <div style="padding: 14px">
          <span>Delicious hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operation</el-button>
          </div>
        </div>
      </el-card>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const currentDate = new Date().toLocaleDateString()
<\/script>`

const codeCount = `<template>
  <el-switch v-model="loading" />
  <el-skeleton style="width: 400px" :loading="loading" animated :count="3">
    <template #template>
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <el-skeleton-item variant="circle" style="width: 36px; height: 36px; margin-right: 12px;" />
        <el-skeleton-item variant="h1" style="width: 30%" />
      </div>
    </template>
    <template #default>
      <div v-for="item in lists" :key="item.name" style="display: flex; align-items: center; margin-bottom: 16px;">
        <el-avatar :src="item.avatar" style="margin-right: 12px;" />
        <span>{{ item.name }}</span>
      </div>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
const lists = [
  { name: 'John', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
  { name: 'Alice', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
  { name: 'Bob', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' },
]
<\/script>`

const codeThrottle = `<template>
  <el-switch v-model="loading" />
  <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
    <template #template>
      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <el-skeleton-item variant="h3" style="width: 50%" />
      </div>
    </template>
    <template #default>
      <el-card :body-style="{ padding: '0px' }" style="width: 240px">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
        <div style="padding: 14px">
          <span>Delicious hamburger</span>
        </div>
      </el-card>
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
<\/script>`

// API 数据
const skeletonTableData: any[] = [
    { name: 'animated', desc: '是否使用动画', type: 'boolean', default: 'false' },
    { name: 'count', desc: '渲染多少个 template，建议使用尽可能小的数字', type: 'number', default: '1' },
    { name: 'loading', desc: '是否显示加载结束后的 DOM 结构', type: 'boolean', default: 'true' },
    { name: 'rows', desc: '骨架屏段落数量', type: 'number', default: '3' },
    { name: 'throttle', desc: '延迟占位 DOM 渲染的时间，单位是毫秒', type: 'number', default: '0' },
]

const skeletonSlotData: any[] = [
    { name: 'default', desc: '用来展示真实 UI' },
    { name: 'template', desc: '用来展示自定义占位符' },
]

const skeletonItemTableData: any[] = [
    { name: 'variant', desc: '当前显示的占位元素的样式', type: "'p' | 'text' | 'h1' | 'h3' | 'caption' | 'button' | 'image' | 'circle' | 'rect'", default: 'text' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.image {
    width: 100%;
    display: block;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.time {
    font-size: 12px;
    color: #999;
}
</style>
