<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Empty 空状态</h1>
        <el-text class="mx-1" size="large">空状态时的占位提示。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">简单的展示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-empty description="description" />
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

        <h2 class="card_title_h2">自定义图片</h2>
        <el-text class="mx-1" size="large">通过设置 image 属性传入图片 URL。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustomImage" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">图片尺寸</h2>
        <el-text class="mx-1" size="large">通过设置 image-size 属性来控制图片大小。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-empty :image-size="200" />
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeImageSize" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">底部内容</h2>
        <el-text class="mx-1" size="large">使用默认插槽可在底部插入内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-empty description="No Data">
                    <el-button type="primary">Create</el-button>
                </el-empty>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeBottom" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Empty API</h2>
        <h2 class="card_title_h3">Empty Attributes</h2>
        <el-table :data="emptyTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Empty Slots</h2>
        <el-table :data="emptySlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentEmpty'
}
</script>

<script lang="tsx" setup>
// 代码字符串
const codeBasic = `<template>
  <el-empty description="description" />
</template>`

const codeCustomImage = `<template>
  <el-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
</template>`

const codeImageSize = `<template>
  <el-empty :image-size="200" />
</template>`

const codeBottom = `<template>
  <el-empty description="No Data">
    <el-button type="primary">Create</el-button>
  </el-empty>
</template>`

// API 数据
const emptyTableData: any[] = [
    { name: 'image', desc: '空状态的图片地址', type: 'string', default: '—' },
    { name: 'image-size', desc: '空状态图片的大小（宽度）', type: 'number', default: '—' },
    { name: 'description', desc: '空状态的描述', type: 'string', default: '—' },
]

const emptySlotData: any[] = [
    { name: 'default', desc: '自定义底部内容' },
    { name: 'image', desc: '自定义图片' },
    { name: 'description', desc: '自定义描述' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}
</style>
