<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Page Header 页头</h1>
        <el-text class="mx-1" size="large">如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">标准页头，适合在需要简单描述的场景中使用。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-page-header @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-3"> Title </span>
                    </template>
                </el-page-header>
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

        <h2 class="card_title_h2">自定义图标</h2>
        <el-text class="mx-1" size="large">默认图标可能无法满足您的需求，您可以通过设置 icon 属性来自定义图标，示例演示如何设置。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-page-header :icon="ArrowLeft" @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-3"> Title </span>
                    </template>
                </el-page-header>
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

        <h2 class="card_title_h2">无图标</h2>
        <el-text class="mx-1" size="large">有时候，页面全是由路由进行控制，使用 icon 属性就能去掉返回的图标，设置为 null 即可。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-page-header :icon="null">
                    <template #content>
                        <span class="text-large font-600 mr-3"> Title </span>
                    </template>
                </el-page-header>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeNoIcon" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">面包屑导航</h2>
        <el-text class="mx-1" size="large">通过添加 breadcrumb 插槽可以支持面包屑导航功能。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-page-header @back="goBack">
                    <template #breadcrumb>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                        </el-breadcrumb>
                    </template>
                    <template #content>
                        <span class="text-large font-600 mr-3"> Title </span>
                    </template>
                </el-page-header>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeBreadcrumb" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">额外操作区</h2>
        <el-text class="mx-1" size="large">头部可能会变得越来越复杂，您可以在头部添加更多的区块，以允许更复杂的场景。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-page-header @back="goBack">
                    <template #content>
                        <div class="flex items-center">
                            <el-avatar
                                :size="32"
                                class="mr-3"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            />
                            <span class="text-large font-600 mr-3"> Title </span>
                            <el-tag>Default</el-tag>
                        </div>
                    </template>
                    <template #extra>
                        <div class="flex items-center">
                            <el-button>Print</el-button>
                            <el-button type="primary" class="ml-2">Edit</el-button>
                        </div>
                    </template>
                </el-page-header>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeExtra" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">主要内容</h2>
        <el-text class="mx-1" size="large">有时候我们想让页头显示一些协同响应内容，我们可以利用 default 插槽。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-page-header @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-3"> Title </span>
                    </template>
                    <template #extra>
                        <div class="flex items-center">
                            <el-button>Print</el-button>
                            <el-button type="primary" class="ml-2">Edit</el-button>
                        </div>
                    </template>
                    <el-descriptions :column="3" size="small" class="mt-4">
                        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                        <el-descriptions-item label="Remarks">
                            <el-tag size="small">School</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="Address">
                            No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                        </el-descriptions-item>
                    </el-descriptions>
                </el-page-header>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeContent" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">PageHeader API</h2>
        <h2 class="card_title_h3">PageHeader Attributes</h2>
        <el-table :data="pageHeaderTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">PageHeader Events</h2>
        <el-table :data="pageHeaderEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">PageHeader Slots</h2>
        <el-table :data="pageHeaderSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentPageHeader'
}
</script>

<script lang="tsx" setup>
import { ArrowLeft } from '@element-plus/icons-vue'

const goBack = () => {
    console.log('go back')
}

// 代码字符串
const codeBasic = `<template>
  <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
<\/script>`

const codeIcon = `<template>
  <el-page-header :icon="ArrowLeft" @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'

const goBack = () => {
  console.log('go back')
}
<\/script>`

const codeNoIcon = `<template>
  <el-page-header :icon="null">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>`

const codeBreadcrumb = `<template>
  <el-page-header @back="goBack">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
<\/script>`

const codeExtra = `<template>
  <el-page-header @back="goBack">
    <template #content>
      <div class="flex items-center">
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Title </span>
        <el-tag>Default</el-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button>Print</el-button>
        <el-button type="primary" class="ml-2">Edit</el-button>
      </div>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
<\/script>`

const codeContent = `<template>
  <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button>Print</el-button>
        <el-button type="primary" class="ml-2">Edit</el-button>
      </div>
    </template>
    <el-descriptions :column="3" size="small" class="mt-4">
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address">
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
  </el-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
  console.log('go back')
}
<\/script>`

// API 数据
const pageHeaderTableData: any[] = [
    { name: 'icon', desc: '图标组件', type: 'string | Component', default: 'Back' },
    { name: 'title', desc: '主标题，默认是 Back 即返回', type: 'string', default: 'Back' },
    { name: 'content', desc: '内容', type: 'string', default: '—' },
]

const pageHeaderEventData: any[] = [
    { name: 'back', desc: '点击左侧区域触发', type: '() => void' },
]

const pageHeaderSlotData: any[] = [
    { name: 'icon', desc: '自定义图标' },
    { name: 'title', desc: '标题内容' },
    { name: 'content', desc: '内容' },
    { name: 'extra', desc: '扩展设置' },
    { name: 'breadcrumb', desc: '面包屑内容' },
    { name: 'default', desc: '主体内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.text-large {
    font-size: 16px;
}

.font-600 {
    font-weight: 600;
}

.mr-3 {
    margin-right: 12px;
}

.ml-2 {
    margin-left: 8px;
}

.mt-4 {
    margin-top: 16px;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}
</style>
