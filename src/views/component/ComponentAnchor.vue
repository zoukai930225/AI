<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Anchor 锚点</h1>
        <el-text class="mx-1" size="large">通过锚点可快速找到信息内容在当前页面的位置。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">最简单的 Anchor。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="40">
                    <el-col :span="16">
                        <div id="basic-part-1" class="anchor-section">Part 1</div>
                        <div id="basic-part-2" class="anchor-section">Part 2</div>
                        <div id="basic-part-3" class="anchor-section">Part 3</div>
                        <div id="basic-part-4" class="anchor-section">Part 4</div>
                    </el-col>
                    <el-col :span="8">
                        <el-anchor :offset="100">
                            <el-anchor-link href="#basic-part-1" title="Part 1" />
                            <el-anchor-link href="#basic-part-2" title="Part 2" />
                            <el-anchor-link href="#basic-part-3" title="Part 3" />
                            <el-anchor-link href="#basic-part-4" title="Part 4" />
                        </el-anchor>
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

        <h2 class="card_title_h2">水平锚点</h2>
        <el-text class="mx-1" size="large">设置 direction 属性为 horizontal 可以使用水平锚点。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-anchor direction="horizontal" :offset="100">
                    <el-anchor-link href="#horizontal-part-1" title="Part 1" />
                    <el-anchor-link href="#horizontal-part-2" title="Part 2" />
                    <el-anchor-link href="#horizontal-part-3" title="Part 3" />
                    <el-anchor-link href="#horizontal-part-4" title="Part 4" />
                </el-anchor>
                <div style="margin-top: 20px;">
                    <div id="horizontal-part-1" class="anchor-section-small">Part 1</div>
                    <div id="horizontal-part-2" class="anchor-section-small">Part 2</div>
                    <div id="horizontal-part-3" class="anchor-section-small">Part 3</div>
                    <div id="horizontal-part-4" class="anchor-section-small">Part 4</div>
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
                        <highlightjs autodetect :code="codeHorizontal" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">锚点类型</h2>
        <el-text class="mx-1" size="large">设置 type 属性可以改变锚点类型，支持 default 和 underline 两种类型。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row :gutter="40">
                    <el-col :span="12">
                        <span class="demo-label">Default</span>
                        <el-anchor type="default" :offset="100">
                            <el-anchor-link href="#type-part-1" title="Part 1" />
                            <el-anchor-link href="#type-part-2" title="Part 2" />
                            <el-anchor-link href="#type-part-3" title="Part 3" />
                        </el-anchor>
                    </el-col>
                    <el-col :span="12">
                        <span class="demo-label">Underline</span>
                        <el-anchor type="underline" :offset="100">
                            <el-anchor-link href="#type-part-1" title="Part 1" />
                            <el-anchor-link href="#type-part-2" title="Part 2" />
                            <el-anchor-link href="#type-part-3" title="Part 3" />
                        </el-anchor>
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
                        <highlightjs autodetect :code="codeType" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">子链接</h2>
        <el-text class="mx-1" size="large">锚点支持嵌套子链接。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-anchor :offset="100">
                    <el-anchor-link href="#nested-part-1" title="Part 1">
                        <el-anchor-link href="#nested-part-1-1" title="Part 1-1" />
                        <el-anchor-link href="#nested-part-1-2" title="Part 1-2" />
                    </el-anchor-link>
                    <el-anchor-link href="#nested-part-2" title="Part 2">
                        <el-anchor-link href="#nested-part-2-1" title="Part 2-1" />
                        <el-anchor-link href="#nested-part-2-2" title="Part 2-2" />
                    </el-anchor-link>
                    <el-anchor-link href="#nested-part-3" title="Part 3" />
                </el-anchor>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeNested" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Anchor API</h2>
        <h2 class="card_title_h3">Anchor Attributes</h2>
        <el-table :data="anchorTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Anchor Events</h2>
        <el-table :data="anchorEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="250" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Anchor Slots</h2>
        <el-table :data="anchorSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Anchor Exposes</h2>
        <el-table :data="anchorExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">AnchorLink API</h2>
        <h2 class="card_title_h3">AnchorLink Attributes</h2>
        <el-table :data="anchorLinkTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">AnchorLink Slots</h2>
        <el-table :data="anchorLinkSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentAnchor'
}
</script>

<script lang="tsx" setup>
// 代码字符串
const codeBasic = `<template>
  <el-row :gutter="40">
    <el-col :span="16">
      <div id="part-1" class="anchor-section">Part 1</div>
      <div id="part-2" class="anchor-section">Part 2</div>
      <div id="part-3" class="anchor-section">Part 3</div>
      <div id="part-4" class="anchor-section">Part 4</div>
    </el-col>
    <el-col :span="8">
      <el-anchor>
        <el-anchor-link href="#part-1" title="Part 1" />
        <el-anchor-link href="#part-2" title="Part 2" />
        <el-anchor-link href="#part-3" title="Part 3" />
        <el-anchor-link href="#part-4" title="Part 4" />
      </el-anchor>
    </el-col>
  </el-row>
</template>

<style scoped>
.anchor-section {
  height: 300px;
  background: #f5f7fa;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #909399;
}
</style>`

const codeHorizontal = `<template>
  <el-anchor direction="horizontal">
    <el-anchor-link href="#part-1" title="Part 1" />
    <el-anchor-link href="#part-2" title="Part 2" />
    <el-anchor-link href="#part-3" title="Part 3" />
    <el-anchor-link href="#part-4" title="Part 4" />
  </el-anchor>
  <div id="part-1" class="anchor-section">Part 1</div>
  <div id="part-2" class="anchor-section">Part 2</div>
  <div id="part-3" class="anchor-section">Part 3</div>
  <div id="part-4" class="anchor-section">Part 4</div>
</template>`

const codeType = `<template>
  <el-row :gutter="40">
    <el-col :span="12">
      <span>Default</span>
      <el-anchor type="default">
        <el-anchor-link href="#part-1" title="Part 1" />
        <el-anchor-link href="#part-2" title="Part 2" />
        <el-anchor-link href="#part-3" title="Part 3" />
      </el-anchor>
    </el-col>
    <el-col :span="12">
      <span>Underline</span>
      <el-anchor type="underline">
        <el-anchor-link href="#part-1" title="Part 1" />
        <el-anchor-link href="#part-2" title="Part 2" />
        <el-anchor-link href="#part-3" title="Part 3" />
      </el-anchor>
    </el-col>
  </el-row>
</template>`

const codeNested = `<template>
  <el-anchor>
    <el-anchor-link href="#part-1" title="Part 1">
      <el-anchor-link href="#part-1-1" title="Part 1-1" />
      <el-anchor-link href="#part-1-2" title="Part 1-2" />
    </el-anchor-link>
    <el-anchor-link href="#part-2" title="Part 2">
      <el-anchor-link href="#part-2-1" title="Part 2-1" />
      <el-anchor-link href="#part-2-2" title="Part 2-2" />
    </el-anchor-link>
    <el-anchor-link href="#part-3" title="Part 3" />
  </el-anchor>
</template>`

// API 数据
const anchorTableData: any[] = [
    { name: 'container', desc: '滚动的容器', type: 'string | HTMLElement | Window', default: 'window' },
    { name: 'offset', desc: '设置锚点滚动偏移量', type: 'number', default: '0' },
    { name: 'bound', desc: '触发锚点的元素的位置偏移量', type: 'number', default: '15' },
    { name: 'duration', desc: '设置容器滚动持续时间，单位为毫秒', type: 'number', default: '300' },
    { name: 'marker', desc: '是否显示标记', type: 'boolean', default: 'true' },
    { name: 'type', desc: '设置锚点类型', type: "'default' | 'underline'", default: 'default' },
    { name: 'direction', desc: '设置锚点方向', type: "'vertical' | 'horizontal'", default: 'vertical' },
]

const anchorEventData: any[] = [
    { name: 'change', desc: '当锚点链接改变时触发', type: '(href: string) => void' },
    { name: 'click', desc: '点击链接时触发', type: '(e: MouseEvent, href?: string) => void' },
]

const anchorSlotData: any[] = [
    { name: 'default', desc: 'AnchorLink 组件列表' },
    { name: 'marker', desc: '自定义指示器' },
]

const anchorExposeData: any[] = [
    { name: 'scrollTo', desc: '手动滚动到指定位置', type: '(href: string) => void' },
]

const anchorLinkTableData: any[] = [
    { name: 'title', desc: '链接的文本内容', type: 'string', default: '—' },
    { name: 'href', desc: '链接的地址', type: 'string', default: '—' },
]

const anchorLinkSlotData: any[] = [
    { name: 'default', desc: '链接的内容，默认是 title' },
    { name: 'sub-link', desc: '子链接的插槽' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.anchor-section {
    height: 200px;
    background: #f5f7fa;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #909399;
    border-radius: 4px;
}

.anchor-section-small {
    height: 100px;
    background: #f5f7fa;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #909399;
    border-radius: 4px;
}

.demo-label {
    display: block;
    font-size: 14px;
    color: #606266;
    margin-bottom: 8px;
}
</style>
