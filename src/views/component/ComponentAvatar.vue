<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Avatar 头像</h1>
        <el-text class="mx-1" size="large">Avatar 组件可以用来代表人物或对象，支持使用图片、图标或者文字作为 Avatar。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">使用 shape 和 size 属性来设置 Avatar 的形状和大小。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-basic">
                    <div class="demo-basic-row">
                        <span class="demo-basic-label">circle</span>
                        <div class="demo-basic-items">
                            <el-avatar :size="50" :src="circleUrl" />
                            <el-avatar :size="100" :src="circleUrl" />
                            <el-avatar :size="150" :src="circleUrl" />
                        </div>
                    </div>
                    <div class="demo-basic-row">
                        <span class="demo-basic-label">square</span>
                        <div class="demo-basic-items">
                            <el-avatar shape="square" :size="50" :src="squareUrl" />
                            <el-avatar shape="square" :size="100" :src="squareUrl" />
                            <el-avatar shape="square" :size="150" :src="squareUrl" />
                        </div>
                    </div>
                    <div class="demo-basic-row">
                        <span class="demo-basic-label">size preset</span>
                        <div class="demo-basic-items">
                            <el-avatar :size="'large'" :src="circleUrl" />
                            <el-avatar :src="circleUrl" />
                            <el-avatar :size="'small'" :src="circleUrl" />
                        </div>
                    </div>
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

        <h2 class="card_title_h2">展示类型</h2>
        <el-text class="mx-1" size="large">支持使用图片，图标或者文字作为 Avatar。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-type">
                    <el-avatar :icon="UserFilled" />
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <el-avatar> user </el-avatar>
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
                        <highlightjs autodetect :code="codeTypes" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">回退行为</h2>
        <el-text class="mx-1" size="large">图片加载失败时的回退行为。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-type">
                    <el-avatar :size="60" src="https://empty" @error="errorHandler">
                        <img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        />
                    </el-avatar>
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
                        <highlightjs autodetect :code="codeFallback" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">适应容器</h2>
        <el-text class="mx-1" size="large">当展示类型为图片的时候，设置图片如何在容器中展示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-fit">
                    <div v-for="fit in fits" :key="fit" class="demo-fit-item">
                        <el-avatar shape="square" :size="100" :fit="fit" :src="fitUrl" />
                        <span class="demo-fit-label">{{ fit }}</span>
                    </div>
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
                        <highlightjs autodetect :code="codeFit" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Avatar API</h2>
        <h2 class="card_title_h3">Avatar Attributes</h2>
        <el-table :data="avatarTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Avatar Events</h2>
        <el-table :data="avatarEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Avatar Slots</h2>
        <el-table :data="avatarSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentAvatar'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'

// 基础用法
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'

// 适应容器
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
const fitUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

// 回退行为
const errorHandler = () => {
    return true
}

// 代码字符串
const codeBasic = `<template>
  <div class="demo-basic">
    <div class="demo-basic-row">
      <span class="demo-basic-label">circle</span>
      <div class="demo-basic-items">
        <el-avatar :size="50" :src="circleUrl" />
        <el-avatar :size="100" :src="circleUrl" />
        <el-avatar :size="150" :src="circleUrl" />
      </div>
    </div>
    <div class="demo-basic-row">
      <span class="demo-basic-label">square</span>
      <div class="demo-basic-items">
        <el-avatar shape="square" :size="50" :src="squareUrl" />
        <el-avatar shape="square" :size="100" :src="squareUrl" />
        <el-avatar shape="square" :size="150" :src="squareUrl" />
      </div>
    </div>
    <div class="demo-basic-row">
      <span class="demo-basic-label">size preset</span>
      <div class="demo-basic-items">
        <el-avatar :size="'large'" :src="circleUrl" />
        <el-avatar :src="circleUrl" />
        <el-avatar :size="'small'" :src="circleUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
<\/script>

<style scoped>
.demo-basic-row {
  margin-bottom: 16px;
}
.demo-basic-label {
  display: inline-block;
  width: 100px;
  color: #606266;
}
.demo-basic-items {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}
</style>`

const codeTypes = `<template>
  <div class="demo-type">
    <el-avatar :icon="UserFilled" />
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <el-avatar> user </el-avatar>
  </div>
</template>

<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
<\/script>

<style scoped>
.demo-type {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>`

const codeFallback = `<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </el-avatar>
  </div>
</template>

<script lang="ts" setup>
const errorHandler = () => {
  return true
}
<\/script>`

const codeFit = `<template>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="demo-fit-item">
      <el-avatar shape="square" :size="100" :fit="fit" :src="url" />
      <span class="demo-fit-label">{{ fit }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
<\/script>

<style scoped>
.demo-fit {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.demo-fit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.demo-fit-label {
  color: #606266;
  font-size: 14px;
}
</style>`

// API 数据
const avatarTableData: any[] = [
    { name: 'icon', desc: '设置 Avatar 的图标类型，具体参考 Icon 组件', type: 'string | Component', default: '—' },
    { name: 'size', desc: 'Avatar 大小', type: "number | 'large' | 'default' | 'small'", default: 'default' },
    { name: 'shape', desc: 'Avatar 形状', type: "'circle' | 'square'", default: 'circle' },
    { name: 'src', desc: 'Avatar 图片的源地址', type: 'string', default: '—' },
    { name: 'src-set', desc: '图片 Avatar 的原生 srcset 属性', type: 'string', default: '—' },
    { name: 'alt', desc: '图片 Avatar 的原生 alt 属性', type: 'string', default: '—' },
    { name: 'fit', desc: '当展示类型为图片的时候，设置图片如何适应容器', type: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'", default: 'cover' },
]

const avatarEventData: any[] = [
    { name: 'error', desc: '图片加载失败时触发', type: '(e: Event) => void' },
]

const avatarSlotData: any[] = [
    { name: 'default', desc: '自定义 Avatar 展示内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-basic {
    .demo-basic-row {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
    }

    .demo-basic-label {
        display: inline-block;
        width: 120px;
        color: #606266;
        font-size: 14px;
    }

    .demo-basic-items {
        display: inline-flex;
        align-items: center;
        gap: 16px;
    }
}

.demo-type {
    display: flex;
    align-items: center;
    gap: 16px;
}

.demo-fit {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    .demo-fit-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .demo-fit-label {
        color: #606266;
        font-size: 14px;
    }
}

.code-icon {
    width: 16px;
    height: 16px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;

    &:hover {
        opacity: 1;
    }
}
</style>
