<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Badge 徽章</h1>
        <el-text class="mx-1" size="large">按钮和图标上的数字或状态标记。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">可以用来展示新消息的数量。数量值可接受 Number 或 String。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-badge">
                    <el-badge :value="12" class="item">
                        <el-button>comments</el-button>
                    </el-badge>
                    <el-badge :value="3" class="item">
                        <el-button>replies</el-button>
                    </el-badge>
                    <el-badge :value="1" class="item" type="primary">
                        <el-button>comments</el-button>
                    </el-badge>
                    <el-badge :value="2" class="item" type="warning">
                        <el-button>replies</el-button>
                    </el-badge>
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

        <h2 class="card_title_h2">最大值</h2>
        <el-text class="mx-1" size="large">你还可以自定义最大值。由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-badge">
                    <el-badge :value="200" :max="99" class="item">
                        <el-button>comments</el-button>
                    </el-badge>
                    <el-badge :value="100" :max="10" class="item">
                        <el-button>replies</el-button>
                    </el-badge>
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
                        <highlightjs autodetect :code="codeMax" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义显示内容</h2>
        <el-text class="mx-1" size="large">你也可以展示除数字以外的任何其他文本内容。当 value 是 String 时，可以显示自定义文本。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-badge">
                    <el-badge value="new" class="item">
                        <el-button>comments</el-button>
                    </el-badge>
                    <el-badge value="hot" class="item">
                        <el-button>replies</el-button>
                    </el-badge>
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
                        <highlightjs autodetect :code="codeCustom" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">小红点</h2>
        <el-text class="mx-1" size="large">通过一个小红点标记来告知用户有新内容。使用 is-dot 属性，是一个布尔类型。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-badge">
                    <el-badge is-dot class="item">query</el-badge>
                    <el-badge is-dot class="item">
                        <el-button
                            class="share-button"
                            :icon="Share"
                            type="primary"
                        />
                    </el-badge>
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
                        <highlightjs autodetect :code="codeDot" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">偏移量</h2>
        <el-text class="mx-1" size="large">设置徽章点的偏移。偏移量格式为 [left, top]，代表徽章点从默认位置的左侧和顶部的偏移。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-badge">
                    <el-badge :value="12" :offset="[10, 0]" class="item">
                        <el-button>comments</el-button>
                    </el-badge>
                    <el-badge :value="12" :offset="[-10, 10]" class="item">
                        <el-button>replies</el-button>
                    </el-badge>
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
                        <highlightjs autodetect :code="codeOffset" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Badge API</h2>
        <h2 class="card_title_h3">Badge Attributes</h2>
        <el-table :data="badgeTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Badge Slots</h2>
        <el-table :data="badgeSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentBadge'
}
</script>

<script lang="tsx" setup>
import { Share } from '@element-plus/icons-vue'

// 代码字符串
const codeBasic = `<template>
  <el-badge :value="12" class="item">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge :value="3" class="item">
    <el-button>replies</el-button>
  </el-badge>
  <el-badge :value="1" class="item" type="primary">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge :value="2" class="item" type="warning">
    <el-button>replies</el-button>
  </el-badge>
</template>

<style scoped>
.item {
  margin-right: 40px;
}
</style>`

const codeMax = `<template>
  <el-badge :value="200" :max="99" class="item">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge :value="100" :max="10" class="item">
    <el-button>replies</el-button>
  </el-badge>
</template>

<style scoped>
.item {
  margin-right: 40px;
}
</style>`

const codeCustom = `<template>
  <el-badge value="new" class="item">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge value="hot" class="item">
    <el-button>replies</el-button>
  </el-badge>
</template>

<style scoped>
.item {
  margin-right: 40px;
}
</style>`

const codeDot = `<template>
  <el-badge is-dot class="item">query</el-badge>
  <el-badge is-dot class="item">
    <el-button
      class="share-button"
      :icon="Share"
      type="primary"
    />
  </el-badge>
</template>

<script lang="ts" setup>
import { Share } from '@element-plus/icons-vue'
<\/script>

<style scoped>
.item {
  margin-right: 40px;
}
</style>`

const codeOffset = `<template>
  <el-badge :value="12" :offset="[10, 0]" class="item">
    <el-button>comments</el-button>
  </el-badge>
  <el-badge :value="12" :offset="[-10, 10]" class="item">
    <el-button>replies</el-button>
  </el-badge>
</template>

<style scoped>
.item {
  margin-right: 40px;
}
</style>`

// API 数据
const badgeTableData: any[] = [
    { name: 'value', desc: '显示值', type: 'string | number', default: '—' },
    { name: 'max', desc: '最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。', type: 'number', default: '99' },
    { name: 'is-dot', desc: '是否显示小圆点', type: 'boolean', default: 'false' },
    { name: 'hidden', desc: '是否隐藏 Badge', type: 'boolean', default: 'false' },
    { name: 'type', desc: 'badge 类型', type: "'primary' | 'success' | 'warning' | 'danger' | 'info'", default: 'danger' },
    { name: 'show-zero', desc: '值为零时是否显示 Badge', type: 'boolean', default: 'true' },
    { name: 'color', desc: '背景颜色', type: 'string', default: '—' },
    { name: 'offset', desc: 'badge 的偏移量', type: '[number, number]', default: '—' },
    { name: 'badge-style', desc: 'badge 的样式', type: 'CSSProperties', default: '—' },
    { name: 'badge-class', desc: 'badge 的自定义类名', type: 'string', default: '—' },
]

const badgeSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-badge {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .item {
        margin-right: 40px;
        margin-bottom: 10px;
    }
}

.share-button {
    width: 36px;
}
</style>
