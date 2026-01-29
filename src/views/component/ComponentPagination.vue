<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Pagination 分页</h1>
        <el-text class="mx-1" size="large">当数据量过多时，使用分页分解数据。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">设置 layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 prev 表示上一页，next 为下一页，pager 表示页码列表，除此以外还提供了 jumper、total、sizes 和特殊的布局符号 ->，-> 后的元素会靠右显示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-pagination">
                    <el-pagination layout="prev, pager, next" :total="50" />
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
                        <highlightjs autodetect :code="codeBasic" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">设置最大页码按钮数</h2>
        <el-text class="mx-1" size="large">默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过 pager-count 属性可以设置最大页码按钮数。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-pagination">
                    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
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
                        <highlightjs autodetect :code="codePagerCount" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带有背景色的分页</h2>
        <el-text class="mx-1" size="large">设置 background 属性可以为分页按钮添加背景色。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-pagination">
                    <el-pagination background layout="prev, pager, next" :total="1000" />
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
                        <highlightjs autodetect :code="codeBackground" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">小型分页</h2>
        <el-text class="mx-1" size="large">在空间有限的情况下，可以使用简单的小型分页。设置 small 属性即可让分页变小。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-pagination">
                    <el-pagination small layout="prev, pager, next" :total="50" />
                </div>
                <div class="demo-pagination">
                    <el-pagination small background layout="prev, pager, next" :total="50" />
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
                        <highlightjs autodetect :code="codeSmall" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">附加功能</h2>
        <el-text class="mx-1" size="large">根据场景需要，可以添加其他功能模块。此示例是一个完整的用例。 使用了 size-change 和 current-change 事件来处理页码大小和当前页变动时候触发的事件。 page-sizes 接受一个整数类型的数组，数组元素为展示的选择每页显示个数的选项，[100, 200, 300, 400] 表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-pagination">
                    <el-pagination
                        v-model:current-page="currentPage1"
                        v-model:page-size="pageSize1"
                        :page-sizes="[100, 200, 300, 400]"
                        :size="size"
                        :disabled="disabled"
                        :background="background"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
                <div class="demo-pagination">
                    <el-pagination
                        v-model:current-page="currentPage2"
                        v-model:page-size="pageSize2"
                        :page-sizes="[100, 200, 300, 400]"
                        :size="size"
                        :disabled="disabled"
                        :background="background"
                        layout="prev, pager, next, jumper, ->, total"
                        :total="400"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
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
                        <highlightjs autodetect :code="codeExtra" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">当只有一页时隐藏分页</h2>
        <el-text class="mx-1" size="large">当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-switch v-model="showPagination" style="margin-bottom: 16px" />
                <el-pagination
                    :hide-on-single-page="!showPagination"
                    :total="5"
                    layout="prev, pager, next"
                />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeHide" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Pagination API</h2>
        <h2 class="card_title_h3">Pagination Attributes</h2>
        <el-table :data="paginationTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Pagination Events</h2>
        <el-table :data="paginationEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Pagination Slots</h2>
        <el-table :data="paginationSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentPagination'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'

// 附加功能
const currentPage1 = ref(1)
const pageSize1 = ref(100)
const currentPage2 = ref(1)
const pageSize2 = ref(100)
const size = ref<'default' | 'small' | 'large'>('default')
const disabled = ref(false)
const background = ref(false)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}

const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}

// 当只有一页时隐藏分页
const showPagination = ref(true)

// 代码字符串
const codeBasic = `<template>
  <el-pagination layout="prev, pager, next" :total="50" />
</template>`

const codePagerCount = `<template>
  <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
</template>`

const codeBackground = `<template>
  <el-pagination background layout="prev, pager, next" :total="1000" />
</template>`

const codeSmall = `<template>
  <el-pagination small layout="prev, pager, next" :total="50" />
  <el-pagination small background layout="prev, pager, next" :total="50" />
</template>`

const codeExtra = `<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[100, 200, 300, 400]"
    :size="size"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(100)
const size = ref<'default' | 'small' | 'large'>('default')
const disabled = ref(false)
const background = ref(false)

const handleSizeChange = (val: number) => {
  console.log(\`\${val} items per page\`)
}

const handleCurrentChange = (val: number) => {
  console.log(\`current page: \${val}\`)
}
<\/script>`

const codeHide = `<template>
  <el-switch v-model="value" />
  <el-pagination
    :hide-on-single-page="!value"
    :total="5"
    layout="prev, pager, next"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
<\/script>`

// API 数据
const paginationTableData: any[] = [
    { name: 'small', desc: '是否使用小型分页样式', type: 'boolean', default: 'false' },
    { name: 'background', desc: '是否为分页按钮添加背景色', type: 'boolean', default: 'false' },
    { name: 'page-size / v-model:page-size', desc: '每页显示条目个数', type: 'number', default: '10' },
    { name: 'default-page-size', desc: '每页显示条目数的初始值', type: 'number', default: '—' },
    { name: 'total', desc: '总条目数', type: 'number', default: '—' },
    { name: 'page-count', desc: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能', type: 'number', default: '—' },
    { name: 'pager-count', desc: '设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠', type: 'number (odd number between 5 and 21)', default: '7' },
    { name: 'current-page / v-model:current-page', desc: '当前页数', type: 'number', default: '1' },
    { name: 'default-current-page', desc: '当前页数的初始值', type: 'number', default: '—' },
    { name: 'layout', desc: '组件布局，子组件名用逗号分隔', type: 'string', default: "'prev, pager, next, jumper, ->, total'" },
    { name: 'page-sizes', desc: '每页显示个数选择器的选项设置', type: 'number[]', default: '[10, 20, 30, 40, 50, 100]' },
    { name: 'popper-class', desc: '每页显示个数选择器的下拉框类名', type: 'string', default: '—' },
    { name: 'prev-text', desc: '替代图标显示的上一页文字', type: 'string', default: '—' },
    { name: 'prev-icon', desc: '上一页的图标', type: 'string | Component', default: 'ArrowLeft' },
    { name: 'next-text', desc: '替代图标显示的下一页文字', type: 'string', default: '—' },
    { name: 'next-icon', desc: '下一页的图标', type: 'string | Component', default: 'ArrowRight' },
    { name: 'disabled', desc: '是否禁用分页', type: 'boolean', default: 'false' },
    { name: 'teleported', desc: '是否将下拉菜单 teleport 至 body', type: 'boolean', default: 'true' },
    { name: 'hide-on-single-page', desc: '只有一页时是否隐藏', type: 'boolean', default: 'false' },
]

const paginationEventData: any[] = [
    { name: 'size-change', desc: 'page-size 改变时触发', type: '(value: number) => void' },
    { name: 'current-change', desc: 'current-page 改变时触发', type: '(value: number) => void' },
    { name: 'change', desc: 'current-page 或 page-size 更改时触发', type: '(currentPage: number, pageSize: number) => void' },
    { name: 'prev-click', desc: '用户点击上一页按钮改变当前页时触发', type: '(value: number) => void' },
    { name: 'next-click', desc: '用户点击下一页按钮改变当前页时触发', type: '(value: number) => void' },
]

const paginationSlotData: any[] = [
    { name: 'default', desc: '自定义内容。 设置文案，需要在 layout 中列出 slot' },
    { name: 'prev', desc: '自定义上一页按钮内容' },
    { name: 'next', desc: '自定义下一页按钮内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-pagination {
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
}
</style>
