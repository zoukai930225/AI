<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Image 图片</h1>
        <el-text class="mx-1" size="large">图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">可通过 fit 确定图片如何适应到容器框，同原生 object-fit。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-image">
                    <div v-for="fit in fits" :key="fit" class="demo-image-item">
                        <span class="demo-image-label">{{ fit }}</span>
                        <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
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

        <h2 class="card_title_h2">占位内容</h2>
        <el-text class="mx-1" size="large">可通过 slot = placeholder 可自定义占位内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-image">
                    <div class="demo-image-item">
                        <span class="demo-image-label">Default</span>
                        <el-image :src="url" style="width: 100px; height: 100px" />
                    </div>
                    <div class="demo-image-item">
                        <span class="demo-image-label">Custom</span>
                        <el-image :src="url" style="width: 100px; height: 100px">
                            <template #placeholder>
                                <div class="image-slot">Loading<span class="dot">...</span></div>
                            </template>
                        </el-image>
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
                        <highlightjs autodetect :code="codePlaceholder" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">加载失败</h2>
        <el-text class="mx-1" size="large">可通过 slot = error 可自定义加载失败内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-image">
                    <div class="demo-image-item">
                        <span class="demo-image-label">Default</span>
                        <el-image style="width: 100px; height: 100px" />
                    </div>
                    <div class="demo-image-item">
                        <span class="demo-image-label">Custom</span>
                        <el-image style="width: 100px; height: 100px">
                            <template #error>
                                <div class="image-slot">
                                    <el-icon><Picture /></el-icon>
                                </div>
                            </template>
                        </el-image>
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
                        <highlightjs autodetect :code="codeError" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">懒加载</h2>
        <el-text class="mx-1" size="large">可通过 lazy 开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 scroll-container 来设置滚动容器， 若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-image-lazy">
                    <el-image v-for="src in srcList" :key="src" :src="src" lazy style="width: 200px; height: 200px; margin-right: 10px;" />
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
                        <highlightjs autodetect :code="codeLazy" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">图片预览</h2>
        <el-text class="mx-1" size="large">可通过 preview-src-list 开启预览大图的功能。 你可以通过 initial-index 初始化第一张预览图片的位置。 默认初始位置为 0。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-image">
                    <el-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        :zoom-rate="1.2"
                        :max-scale="7"
                        :min-scale="0.2"
                        :preview-src-list="srcList"
                        :initial-index="0"
                        fit="cover"
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
                        <highlightjs autodetect :code="codePreview" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Image API</h2>
        <h2 class="card_title_h3">Image Attributes</h2>
        <el-table :data="imageTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Image Events</h2>
        <el-table :data="imageEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Image Slots</h2>
        <el-table :data="imageSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Image Viewer API</h2>
        <h2 class="card_title_h3">Image Viewer Attributes</h2>
        <el-table :data="imageViewerTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Image Viewer Events</h2>
        <el-table :data="imageViewerEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Image Viewer Exposes</h2>
        <el-table :data="imageViewerExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentImage'
}
</script>

<script lang="tsx" setup>
import { Picture } from '@element-plus/icons-vue'

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
]

// 代码字符串
const codeBasic = `<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="demo-image-item">
      <span class="demo-image-label">{{ fit }}</span>
      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
<\/script>`

const codePlaceholder = `<template>
  <div class="demo-image">
    <div class="demo-image-item">
      <span class="demo-image-label">Default</span>
      <el-image :src="url" />
    </div>
    <div class="demo-image-item">
      <span class="demo-image-label">Custom</span>
      <el-image :src="url">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </div>
  </div>
</template>`

const codeError = `<template>
  <div class="demo-image">
    <div class="demo-image-item">
      <span class="demo-image-label">Default</span>
      <el-image />
    </div>
    <div class="demo-image-item">
      <span class="demo-image-label">Custom</span>
      <el-image>
        <template #error>
          <div class="image-slot">
            <el-icon><Picture /></el-icon>
          </div>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Picture } from '@element-plus/icons-vue'
<\/script>`

const codeLazy = `<template>
  <div class="demo-image-lazy">
    <el-image v-for="src in srcList" :key="src" :src="src" lazy />
  </div>
</template>

<script lang="ts" setup>
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
]
<\/script>`

const codePreview = `<template>
  <el-image
    style="width: 100px; height: 100px"
    :src="url"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="srcList"
    :initial-index="0"
    fit="cover"
  />
</template>

<script lang="ts" setup>
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
]
<\/script>`

// API 数据
const imageTableData: any[] = [
    { name: 'src', desc: '图片源地址，同原生属性一致', type: 'string', default: '—' },
    { name: 'fit', desc: '确定图片如何适应容器框', type: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'", default: '—' },
    { name: 'hide-on-click-modal', desc: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview', type: 'boolean', default: 'false' },
    { name: 'loading', desc: '浏览器加载图像的策略，和浏览器原生能力一致', type: "'eager' | 'lazy'", default: '—' },
    { name: 'lazy', desc: '是否使用懒加载', type: 'boolean', default: 'false' },
    { name: 'scroll-container', desc: '开启懒加载功能后，监听 scroll 事件的容器', type: 'string | HTMLElement', default: '—' },
    { name: 'alt', desc: '原生属性 alt', type: 'string', default: '—' },
    { name: 'referrerpolicy', desc: '原生属性 referrerPolicy', type: 'string', default: '—' },
    { name: 'preview-src-list', desc: '开启图片预览功能', type: 'string[]', default: '[]' },
    { name: 'z-index', desc: '设置图片预览的 z-index', type: 'number', default: '—' },
    { name: 'initial-index', desc: '初始预览图像索引，小于 srcList 的长度', type: 'number', default: '0' },
    { name: 'close-on-press-escape', desc: '是否可以通过按下 ESC 关闭 Image Viewer', type: 'boolean', default: 'true' },
    { name: 'zoom-rate', desc: '缩放事件的缩放速度', type: 'number', default: '1.2' },
    { name: 'min-scale', desc: '图片查看器缩放事件的最小缩放比例', type: 'number', default: '0.2' },
    { name: 'max-scale', desc: '图片查看器缩放事件的最大缩放比例', type: 'number', default: '7' },
    { name: 'preview-teleported', desc: 'image-viewer 是否插入至 body 元素上', type: 'boolean', default: 'false' },
]

const imageEventData: any[] = [
    { name: 'load', desc: '图片加载成功触发', type: '(e: Event) => void' },
    { name: 'error', desc: '图片加载失败触发', type: '(e: Event) => void' },
    { name: 'switch', desc: '切换图像时触发', type: '(index: number) => void' },
    { name: 'close', desc: '当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发', type: '() => void' },
    { name: 'show', desc: '当 Viewer 打开时触发', type: '() => void' },
]

const imageSlotData: any[] = [
    { name: 'placeholder', desc: '图片未加载的占位内容' },
    { name: 'error', desc: '加载失败的内容' },
    { name: 'viewer', desc: '预览区域的内容' },
]

const imageViewerTableData: any[] = [
    { name: 'url-list', desc: '用于预览的图片链接列表', type: 'string[]', default: '[]' },
    { name: 'z-index', desc: '预览时遮罩层的 z-index', type: 'number | string', default: '—' },
    { name: 'initial-index', desc: '初始预览图像索引，小于 url-list 的长度', type: 'number', default: '0' },
    { name: 'infinite', desc: '是否可以无限循环预览', type: 'boolean', default: 'true' },
    { name: 'hide-on-click-modal', desc: '是否可以通过点击遮罩层关闭预览', type: 'boolean', default: 'false' },
    { name: 'teleported', desc: '是否插入至 body 元素上', type: 'boolean', default: 'false' },
    { name: 'zoom-rate', desc: '缩放事件的缩放速度', type: 'number', default: '1.2' },
    { name: 'min-scale', desc: '缩放事件的最小缩放比例', type: 'number', default: '0.2' },
    { name: 'max-scale', desc: '缩放事件的最大缩放比例', type: 'number', default: '7' },
    { name: 'close-on-press-escape', desc: '是否可以通过按下 ESC 关闭预览', type: 'boolean', default: 'true' },
]

const imageViewerEventData: any[] = [
    { name: 'close', desc: '当点击 X 按钮或者 hide-on-click-modal 为 true 且点击遮罩层时触发', type: '() => void' },
    { name: 'switch', desc: '切换图像时触发', type: '(index: number) => void' },
    { name: 'rotate', desc: '旋转图像时触发', type: '(deg: number) => void' },
]

const imageViewerExposeData: any[] = [
    { name: 'setActiveItem', desc: '手动切换图片', type: '(index: number) => void' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-image {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .demo-image-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .demo-image-label {
        color: #606266;
        font-size: 14px;
    }
}

.demo-image-lazy {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 400px;
    overflow-y: auto;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
    font-size: 14px;
}
</style>
