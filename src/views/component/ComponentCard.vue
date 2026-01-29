<template>
    <div class="card" ref="bodyRef">
        <h1 class="card_title_h1">Card 卡片</h1>
        <el-text class="mx-1" size="large">将信息聚合在卡片容器中展示。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">卡片包含标题，内容以及操作区域。Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-card style="max-width: 480px">
                    <template #header>
                        <div class="card-header">
                            <span>Card name</span>
                            <el-button class="button" text>Operation</el-button>
                        </div>
                    </template>
                    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
                    <template #footer>Footer content</template>
                </el-card>
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

        <h2 class="card_title_h2">简单卡片</h2>
        <el-text class="mx-1" size="large">卡片可以只有内容区域。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-card style="max-width: 480px">
                    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
                </el-card>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeSimple" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">有图片内容的卡片</h2>
        <el-text class="mx-1" size="large">可配置定义更丰富的内容展示。配置 body-style 属性来自定义 body 部分的样式。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-image-card">
                    <el-card v-for="(item, index) in imageCards" :key="index" :body-style="{ padding: '0px' }" style="max-width: 240px">
                        <img
                            :src="item.image"
                            class="image"
                        />
                        <div style="padding: 14px">
                            <span>{{ item.title }}</span>
                            <div class="bottom">
                                <time class="time">{{ item.date }}</time>
                                <el-button text class="button">Operating</el-button>
                            </div>
                        </div>
                    </el-card>
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
                        <highlightjs autodetect :code="codeImage" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">带有阴影效果的卡片</h2>
        <el-text class="mx-1" size="large">你可以定义什么时候展示卡片的阴影效果。通过 shadow 属性设置卡片阴影出现的时机：always、hover 或 never。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-shadow-card">
                    <el-card shadow="always" style="width: 240px">Always</el-card>
                    <el-card shadow="hover" style="width: 240px">Hover</el-card>
                    <el-card shadow="never" style="width: 240px">Never</el-card>
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
                        <highlightjs autodetect :code="codeShadow" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Card API</h2>
        <h2 class="card_title_h3">Card Attributes</h2>
        <el-table :data="cardTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Card Slots</h2>
        <el-table :data="cardSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </div>
</template>

<script lang="tsx">
export default {
    name: 'ComponentCard'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'

// 有图片内容的卡片
const imageCards = ref([
    {
        title: 'Yummy hamburger',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        date: '2024-01-01',
    },
    {
        title: 'Yummy hamburger',
        image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        date: '2024-01-01',
    },
])

// 代码字符串
const codeBasic = `<template>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation</el-button>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>`

const codeSimple = `<template>
  <el-card style="max-width: 480px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
</template>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>`

const codeImage = `<template>
  <el-card v-for="(item, index) in cards" :key="index" :body-style="{ padding: '0px' }" style="max-width: 240px">
    <img :src="item.image" class="image" />
    <div style="padding: 14px">
      <span>{{ item.title }}</span>
      <div class="bottom">
        <time class="time">{{ item.date }}</time>
        <el-button text class="button">Operating</el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Yummy hamburger',
    image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    date: '2024-01-01',
  },
])
<\/script>

<style scoped>
.image {
  width: 100%;
  display: block;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 12px;
  color: #999;
}
</style>`

const codeShadow = `<template>
  <el-card shadow="always" style="width: 240px">Always</el-card>
  <el-card shadow="hover" style="width: 240px">Hover</el-card>
  <el-card shadow="never" style="width: 240px">Never</el-card>
</template>`

// API 数据
const cardTableData: any[] = [
    { name: 'header', desc: '卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点', type: 'string', default: '—' },
    { name: 'footer', desc: '卡片页脚。 你既可以通过设置 footer 来修改标题，也可以通过 slot#footer 传入 DOM 节点', type: 'string', default: '—' },
    { name: 'body-style', desc: 'body 的 CSS 样式', type: 'CSSProperties', default: '—' },
    { name: 'body-class', desc: 'body 的自定义类名', type: 'string', default: '—' },
    { name: 'shadow', desc: '卡片阴影显示时机', type: "'always' | 'hover' | 'never'", default: 'always' },
]

const cardSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'header', desc: '卡片标题内容' },
    { name: 'footer', desc: '卡片页脚内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.demo-image-card {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    .image {
        width: 100%;
        display: block;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .time {
        font-size: 12px;
        color: #999;
    }
}

.demo-shadow-card {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
</style>
