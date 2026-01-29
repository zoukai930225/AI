<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Affix 固钉</h1>
        <el-text class="mx-1" size="large">将页面元素钉在可视范围。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">固钉默认固定在页面顶部。通过设置 offset 属性来改变吸顶距离，默认值为 0。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-affix :offset="120">
                    <el-button type="primary">Offset top 120px</el-button>
                </el-affix>
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

        <h2 class="card_title_h2">指定容器</h2>
        <el-text class="mx-1" size="large">通过设置 target 属性，让固钉始终保持在容器内，超过范围则隐藏。请注意容器避免出现滚动条。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="affix-container" id="affix-container">
                    <el-affix target="#affix-container" :offset="80">
                        <el-button type="primary">Target container</el-button>
                    </el-affix>
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
                        <highlightjs autodetect :code="codeTarget" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">固定位置</h2>
        <el-text class="mx-1" size="large">Affix 组件提供了两个固定位置：top 和 bottom。通过设置 position 属性来改变固定位置，默认值为 top。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-affix position="bottom" :offset="20">
                    <el-button type="primary">Offset bottom 20px</el-button>
                </el-affix>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codePosition" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Affix API</h2>
        <h2 class="card_title_h3">Affix Attributes</h2>
        <el-table :data="affixTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Affix Events</h2>
        <el-table :data="affixEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Affix Exposes</h2>
        <el-table :data="affixExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Affix Slots</h2>
        <el-table :data="affixSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentAffix'
}
</script>

<script lang="tsx" setup>
// 代码字符串
const codeBasic = `<template>
  <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
</template>`

const codeTarget = `<template>
  <div class="affix-container" id="affix-container">
    <el-affix target="#affix-container" :offset="80">
      <el-button type="primary">Target container</el-button>
    </el-affix>
  </div>
</template>

<style scoped>
.affix-container {
  height: 400px;
  text-align: center;
}
</style>`

const codePosition = `<template>
  <el-affix position="bottom" :offset="20">
    <el-button type="primary">Offset bottom 20px</el-button>
  </el-affix>
</template>`

// API 数据
const affixTableData: any[] = [
    { name: 'offset', desc: '偏移距离', type: 'number', default: '0' },
    { name: 'position', desc: '固钉位置', type: "'top' | 'bottom'", default: 'top' },
    { name: 'target', desc: '指定容器（CSS 选择器）', type: 'string', default: '—' },
    { name: 'z-index', desc: '固钉的 z-index', type: 'number', default: '100' },
]

const affixEventData: any[] = [
    { name: 'change', desc: '固钉状态改变时触发', type: '(fixed: boolean) => void' },
    { name: 'scroll', desc: '滚动时触发', type: '({ scrollTop: number, fixed: boolean }) => void' },
]

const affixExposeData: any[] = [
    { name: 'update', desc: '手动更新固钉状态', type: '() => void' },
    { name: 'updateRoot', desc: '手动更新根元素的位置信息', type: '() => void' },
]

const affixSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.affix-container {
    height: 300px;
    text-align: center;
    border: 1px dashed #dcdfe6;
    border-radius: 4px;
    background: linear-gradient(180deg, #f5f7fa 0%, #fff 100%);
}
</style>
