<template>
    <div class="card" ref="bodyRef">
        <h1 class="card_title_h1">Carousel 走马灯</h1>
        <el-text class="mx-1" size="large">在有限空间内，循环播放同一类型的图片、文字等内容。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">结合使用 el-carousel 和 el-carousel-item 标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在 el-carousel-item 标签内。 默认情况下，在鼠标 hover 底部的指示器时就会触发切换。 通过设置 trigger 属性为 click，可以达到点击触发的效果。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-carousel height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
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

        <h2 class="card_title_h2">指示器</h2>
        <el-text class="mx-1" size="large">可以将指示器的显示位置设置在容器外部。indicator-position 属性定义了指示器的位置。 默认情况下，它会显示在走马灯内部，设置为 outside 则会显示在外部；设置为 none 则不会显示指示器。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-carousel height="150px" indicator-position="outside">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeIndicator" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">切换箭头</h2>
        <el-text class="mx-1" size="large">可以设置切换箭头的显示时机。arrow 属性定义了切换箭头的显示时机。 默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将 arrow 设置为 always，则会一直显示；设置为 never，则会一直隐藏。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-carousel height="150px" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeArrow" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">卡片模式</h2>
        <el-text class="mx-1" size="large">当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格。将 type 属性设置为 card 即可启用卡片模式。 从交互上来说，卡片模式和一般模式的最大区别在于，卡片模式可以通过直接点击两侧的幻灯片进行切换。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-carousel height="200px" type="card">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 class="medium" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCard" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">垂直布局</h2>
        <el-text class="mx-1" size="large">默认情况下，direction 为 horizontal。 通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-carousel height="200px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="medium" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeVertical" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Carousel API</h2>
        <h2 class="card_title_h3">Carousel Attributes</h2>
        <el-table :data="carouselTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Carousel Events</h2>
        <el-table :data="carouselEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Carousel Slots</h2>
        <el-table :data="carouselSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Carousel Exposes</h2>
        <el-table :data="carouselExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Carousel-Item API</h2>
        <h2 class="card_title_h3">Carousel-Item Attributes</h2>
        <el-table :data="carouselItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Carousel-Item Slots</h2>
        <el-table :data="carouselItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </div>
</template>

<script lang="tsx">
export default {
    name: 'ComponentCarousel'
}
</script>

<script lang="tsx" setup>
// 代码字符串
const codeBasic = `<template>
  <el-carousel height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>`

const codeIndicator = `<template>
  <el-carousel height="150px" indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>`

const codeArrow = `<template>
  <el-carousel height="150px" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>`

const codeCard = `<template>
  <el-carousel height="200px" type="card">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>`

const codeVertical = `<template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>`

// API 数据
const carouselTableData: any[] = [
    { name: 'height', desc: '走马灯的高度', type: 'string', default: '—' },
    { name: 'initial-index', desc: '初始状态激活的幻灯片的索引，从 0 开始', type: 'number', default: '0' },
    { name: 'trigger', desc: '指示器的触发方式', type: "'hover' | 'click'", default: 'hover' },
    { name: 'autoplay', desc: '是否自动切换', type: 'boolean', default: 'true' },
    { name: 'interval', desc: '自动切换的时间间隔，单位为毫秒', type: 'number', default: '3000' },
    { name: 'indicator-position', desc: '指示器的位置', type: "'outside' | 'none' | ''", default: "''" },
    { name: 'arrow', desc: '切换箭头的显示时机', type: "'always' | 'hover' | 'never'", default: 'hover' },
    { name: 'type', desc: '走马灯的类型', type: "'card' | ''", default: "''" },
    { name: 'cardScale', desc: 'type 为 card 时，两侧卡片的缩放大小', type: 'number', default: '0.83' },
    { name: 'loop', desc: '是否循环显示', type: 'boolean', default: 'true' },
    { name: 'direction', desc: '展示的方向', type: "'horizontal' | 'vertical'", default: 'horizontal' },
    { name: 'pause-on-hover', desc: '鼠标悬浮时暂停自动切换', type: 'boolean', default: 'true' },
    { name: 'motion-blur', desc: '是否添加动态模糊效果以增强走马灯的运动感', type: 'boolean', default: 'false' },
]

const carouselEventData: any[] = [
    { name: 'change', desc: '幻灯片切换时触发', type: '(current: number, prev: number) => void' },
]

const carouselSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]

const carouselExposeData: any[] = [
    { name: 'setActiveItem', desc: '手动切换幻灯片', type: '(index: number | string) => void' },
    { name: 'prev', desc: '切换至上一张幻灯片', type: '() => void' },
    { name: 'next', desc: '切换至下一张幻灯片', type: '() => void' },
]

const carouselItemTableData: any[] = [
    { name: 'name', desc: '幻灯片的名字，可用作 setActiveItem 的参数', type: 'string', default: '—' },
    { name: 'label', desc: '该幻灯片所对应指示器的文本', type: 'string | number', default: '—' },
]

const carouselItemSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

:deep(.el-carousel__item) {
    h3 {
        color: #475669;
        opacity: 0.75;
        margin: 0;
        text-align: center;

        &.small {
            line-height: 150px;
        }

        &.medium {
            line-height: 200px;
        }
    }

    &:nth-child(2n) {
        background-color: #99a9bf;
    }

    &:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
}
</style>
