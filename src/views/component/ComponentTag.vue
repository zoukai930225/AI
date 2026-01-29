<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Tag 标签</h1>
        <el-text class="mx-1" size="large">用于标记和选择。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">由 type 属性来选择 tag 的类型。 也可以通过 color 属性来自定义背景色。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-tag">
                    <el-tag>Tag 1</el-tag>
                    <el-tag type="success">Tag 2</el-tag>
                    <el-tag type="info">Tag 3</el-tag>
                    <el-tag type="warning">Tag 4</el-tag>
                    <el-tag type="danger">Tag 5</el-tag>
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

        <h2 class="card_title_h2">可移除标签</h2>
        <el-text class="mx-1" size="large">设置 closable 属性可以定义一个标签是否可移除。 它接受一个 Boolean。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 disable-transitions 属性，它接受一个 Boolean，true 为关闭。 当 Tag 被移除时会触发 close 事件。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-tag">
                    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" @close="handleClose(tag)">
                        {{ tag.name }}
                    </el-tag>
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
                        <highlightjs autodetect :code="codeClosable" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">动态编辑标签</h2>
        <el-text class="mx-1" size="large">动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-tag">
                    <el-tag
                        v-for="tag in dynamicTags"
                        :key="tag"
                        closable
                        :disable-transitions="false"
                        @close="handleCloseDynamic(tag)"
                    >
                        {{ tag }}
                    </el-tag>
                    <el-input
                        v-if="inputVisible"
                        ref="InputRef"
                        v-model="inputValue"
                        class="tag-input"
                        size="small"
                        @keyup.enter="handleInputConfirm"
                        @blur="handleInputConfirm"
                    />
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">
                        + New Tag
                    </el-button>
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
                        <highlightjs autodetect :code="codeDynamic" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">不同尺寸</h2>
        <el-text class="mx-1" size="large">Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。使用 size 属性来设置额外尺寸，可选值包括 large、default 或 small。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-tag">
                    <el-tag size="large">Large</el-tag>
                    <el-tag>Default</el-tag>
                    <el-tag size="small">Small</el-tag>
                </div>
                <div class="demo-tag" style="margin-top: 16px">
                    <el-tag size="large" closable>Large</el-tag>
                    <el-tag closable>Default</el-tag>
                    <el-tag size="small" closable>Small</el-tag>
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
                        <highlightjs autodetect :code="codeSize" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">主题</h2>
        <el-text class="mx-1" size="large">Tag 组件提供了三个不同的主题：dark、light 和 plain。通过设置 effect 属性来改变主题，默认为 light。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-tag-group">
                    <span class="demo-tag-label">Dark</span>
                    <div class="demo-tag">
                        <el-tag effect="dark">Tag 1</el-tag>
                        <el-tag type="success" effect="dark">Tag 2</el-tag>
                        <el-tag type="info" effect="dark">Tag 3</el-tag>
                        <el-tag type="warning" effect="dark">Tag 4</el-tag>
                        <el-tag type="danger" effect="dark">Tag 5</el-tag>
                    </div>
                </div>
                <div class="demo-tag-group">
                    <span class="demo-tag-label">Light</span>
                    <div class="demo-tag">
                        <el-tag effect="light">Tag 1</el-tag>
                        <el-tag type="success" effect="light">Tag 2</el-tag>
                        <el-tag type="info" effect="light">Tag 3</el-tag>
                        <el-tag type="warning" effect="light">Tag 4</el-tag>
                        <el-tag type="danger" effect="light">Tag 5</el-tag>
                    </div>
                </div>
                <div class="demo-tag-group">
                    <span class="demo-tag-label">Plain</span>
                    <div class="demo-tag">
                        <el-tag effect="plain">Tag 1</el-tag>
                        <el-tag type="success" effect="plain">Tag 2</el-tag>
                        <el-tag type="info" effect="plain">Tag 3</el-tag>
                        <el-tag type="warning" effect="plain">Tag 4</el-tag>
                        <el-tag type="danger" effect="plain">Tag 5</el-tag>
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
                        <highlightjs autodetect :code="codeEffect" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">圆形标签</h2>
        <el-text class="mx-1" size="large">Tag 可以向按钮组件一样变为完全圆形。使用 round 属性来设置。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div class="demo-tag">
                    <el-tag round>Tag 1</el-tag>
                    <el-tag type="success" round>Tag 2</el-tag>
                    <el-tag type="info" round>Tag 3</el-tag>
                    <el-tag type="warning" round>Tag 4</el-tag>
                    <el-tag type="danger" round>Tag 5</el-tag>
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
                        <highlightjs autodetect :code="codeRound" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Tag API</h2>
        <h2 class="card_title_h3">Tag Attributes</h2>
        <el-table :data="tagTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tag Events</h2>
        <el-table :data="tagEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Tag Slots</h2>
        <el-table :data="tagSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentTag'
}
</script>

<script lang="tsx" setup>
import { ref, nextTick } from 'vue'
import type { InputInstance } from 'element-plus'

// 可移除标签
const tags = ref([
    { name: 'Tag 1', type: '' },
    { name: 'Tag 2', type: 'success' },
    { name: 'Tag 3', type: 'info' },
    { name: 'Tag 4', type: 'warning' },
    { name: 'Tag 5', type: 'danger' },
])

const handleClose = (tag: { name: string; type: string }) => {
    tags.value.splice(tags.value.indexOf(tag), 1)
}

// 动态编辑标签
const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const InputRef = ref<InputInstance>()

const handleCloseDynamic = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
        InputRef.value!.input!.focus()
    })
}

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
    }
    inputVisible.value = false
    inputValue.value = ''
}

// 代码字符串
const codeBasic = `<template>
  <el-tag>Tag 1</el-tag>
  <el-tag type="success">Tag 2</el-tag>
  <el-tag type="info">Tag 3</el-tag>
  <el-tag type="warning">Tag 4</el-tag>
  <el-tag type="danger">Tag 5</el-tag>
</template>`

const codeClosable = `<template>
  <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" @close="handleClose(tag)">
    {{ tag.name }}
  </el-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
])

const handleClose = (tag) => {
  tags.value.splice(tags.value.indexOf(tag), 1)
}
<\/script>`

const codeDynamic = `<template>
  <el-tag
    v-for="tag in dynamicTags"
    :key="tag"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </el-tag>
  <el-input
    v-if="inputVisible"
    ref="InputRef"
    v-model="inputValue"
    class="tag-input"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <el-button v-else class="button-new-tag" size="small" @click="showInput">
    + New Tag
  </el-button>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import type { InputInstance } from 'element-plus'

const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const InputRef = ref<InputInstance>()

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
<\/script>

<style scoped>
.tag-input {
  width: 80px;
  margin-left: 8px;
}
</style>`

const codeSize = `<template>
  <el-tag size="large">Large</el-tag>
  <el-tag>Default</el-tag>
  <el-tag size="small">Small</el-tag>

  <el-tag size="large" closable>Large</el-tag>
  <el-tag closable>Default</el-tag>
  <el-tag size="small" closable>Small</el-tag>
</template>`

const codeEffect = `<template>
  <div class="demo-tag-group">
    <span>Dark</span>
    <el-tag effect="dark">Tag 1</el-tag>
    <el-tag type="success" effect="dark">Tag 2</el-tag>
    <el-tag type="info" effect="dark">Tag 3</el-tag>
    <el-tag type="warning" effect="dark">Tag 4</el-tag>
    <el-tag type="danger" effect="dark">Tag 5</el-tag>
  </div>
  <div class="demo-tag-group">
    <span>Light</span>
    <el-tag effect="light">Tag 1</el-tag>
    <el-tag type="success" effect="light">Tag 2</el-tag>
    <el-tag type="info" effect="light">Tag 3</el-tag>
    <el-tag type="warning" effect="light">Tag 4</el-tag>
    <el-tag type="danger" effect="light">Tag 5</el-tag>
  </div>
  <div class="demo-tag-group">
    <span>Plain</span>
    <el-tag effect="plain">Tag 1</el-tag>
    <el-tag type="success" effect="plain">Tag 2</el-tag>
    <el-tag type="info" effect="plain">Tag 3</el-tag>
    <el-tag type="warning" effect="plain">Tag 4</el-tag>
    <el-tag type="danger" effect="plain">Tag 5</el-tag>
  </div>
</template>`

const codeRound = `<template>
  <el-tag round>Tag 1</el-tag>
  <el-tag type="success" round>Tag 2</el-tag>
  <el-tag type="info" round>Tag 3</el-tag>
  <el-tag type="warning" round>Tag 4</el-tag>
  <el-tag type="danger" round>Tag 5</el-tag>
</template>`

// API 数据
const tagTableData: any[] = [
    { name: 'type', desc: '标签类型', type: "'success' | 'info' | 'warning' | 'danger' | ''", default: "''" },
    { name: 'closable', desc: '是否可关闭', type: 'boolean', default: 'false' },
    { name: 'disable-transitions', desc: '是否禁用渐变动画', type: 'boolean', default: 'false' },
    { name: 'hit', desc: '是否有边框描边', type: 'boolean', default: 'false' },
    { name: 'color', desc: '背景色', type: 'string', default: '—' },
    { name: 'size', desc: '尺寸', type: "'large' | 'default' | 'small'", default: 'default' },
    { name: 'effect', desc: '主题', type: "'dark' | 'light' | 'plain'", default: 'light' },
    { name: 'round', desc: '是否圆形标签', type: 'boolean', default: 'false' },
]

const tagEventData: any[] = [
    { name: 'click', desc: '点击 Tag 时触发的事件', type: '(event: MouseEvent) => void' },
    { name: 'close', desc: '关闭 Tag 时触发的事件', type: '(event: MouseEvent) => void' },
]

const tagSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.demo-tag {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
}

.demo-tag-group {
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
}

.demo-tag-label {
    display: inline-block;
    width: 60px;
    font-size: 14px;
    color: #606266;
}

.tag-input {
    width: 80px;
}

.button-new-tag {
    margin-left: 0;
}
</style>
