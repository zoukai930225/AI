<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Breadcrumb 面包屑</h1>
        <el-text class="mx-1" size="large">显示当前页面的路径，快速返回之前的任意页面。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">在 el-breadcrumb 中使用 el-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator 来作为分隔符。 默认值为 '/'。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
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

        <h2 class="card_title_h2">图标分隔符</h2>
        <el-text class="mx-1" size="large">通过设置 separator-icon 可使用相应的 icon 组件作为分隔符，注意这将使 separator 设置失效。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb>
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

        <h2 class="card_title_h2">Breadcrumb API</h2>
        <h2 class="card_title_h3">Breadcrumb Attributes</h2>
        <el-table :data="breadcrumbTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Breadcrumb Slots</h2>
        <el-table :data="breadcrumbSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">BreadcrumbItem API</h2>
        <h2 class="card_title_h3">BreadcrumbItem Attributes</h2>
        <el-table :data="breadcrumbItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">BreadcrumbItem Slots</h2>
        <el-table :data="breadcrumbItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentBreadcrumb'
}
</script>

<script lang="tsx" setup>
import { ArrowRight } from '@element-plus/icons-vue'

// 代码字符串
const codeBasic = `<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>`

const codeIcon = `<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
<\/script>`

// API 数据
const breadcrumbTableData: any[] = [
    { name: 'separator', desc: '分隔符', type: 'string', default: '/' },
    { name: 'separator-icon', desc: '图标分隔符的组件或组件名', type: 'string | Component', default: '—' },
]

const breadcrumbSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]

const breadcrumbItemTableData: any[] = [
    { name: 'to', desc: '路由跳转目标，同 vue-router 的 to 属性', type: 'string | object', default: '—' },
    { name: 'replace', desc: '如果设置该属性为 true，导航将不会留下历史记录', type: 'boolean', default: 'false' },
]

const breadcrumbItemSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}
</style>
