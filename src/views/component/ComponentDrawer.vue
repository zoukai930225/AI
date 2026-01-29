<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Drawer 抽屉</h1>
        <el-text class="mx-1" size="large">有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">呼出一个临时的侧边栏, 可以从多个方向呼出。设置 model-value 属性来控制 Drawer 的显示与隐藏。通过 title 属性来设置标题, 默认情况下的它是一个空字符串，通过 direction 属性来设置 Drawer 从哪个方向打开。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-radio-group v-model="direction">
                    <el-radio value="ltr">left to right</el-radio>
                    <el-radio value="rtl">right to left</el-radio>
                    <el-radio value="ttb">top to bottom</el-radio>
                    <el-radio value="btt">bottom to top</el-radio>
                </el-radio-group>

                <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
                    open
                </el-button>

                <el-drawer
                    v-model="drawer"
                    title="I am the title"
                    :direction="direction"
                >
                    <span>Hi, there!</span>
                </el-drawer>
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

        <h2 class="card_title_h2">不添加 Title</h2>
        <el-text class="mx-1" size="large">当你不需要标题到时候, 你还可以去掉标题。通过设置 with-header 属性为 false 来去掉标题栏。如果你的应用需要具备可访问性, 请务必设置好 title。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="drawerNoHeader = true">
                    open
                </el-button>

                <el-drawer v-model="drawerNoHeader" :with-header="false">
                    <span>Hi there!</span>
                </el-drawer>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeNoHeader" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义内容</h2>
        <el-text class="mx-1" size="large">像 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="drawerTable = true">
                    Open Drawer with nested table
                </el-button>
                <el-button type="primary" @click="drawerForm = true" style="margin-left: 16px;">
                    Open Drawer with nested form
                </el-button>

                <el-drawer v-model="drawerTable" title="I have a nested table inside!" size="50%">
                    <el-table :data="gridData">
                        <el-table-column property="date" label="Date" width="150" />
                        <el-table-column property="name" label="Name" width="200" />
                        <el-table-column property="address" label="Address" />
                    </el-table>
                </el-drawer>

                <el-drawer
                    v-model="drawerForm"
                    title="I have a nested form inside!"
                    :before-close="handleClose"
                    direction="ltr"
                >
                    <div class="demo-drawer__content">
                        <el-form :model="form">
                            <el-form-item label="Name" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="Area" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="Please select activity area">
                                    <el-option label="Area1" value="shanghai" />
                                    <el-option label="Area2" value="beijing" />
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div class="demo-drawer__footer">
                            <el-button @click="cancelForm">Cancel</el-button>
                            <el-button type="primary" :loading="loading" @click="submitForm">
                                {{ loading ? 'Submitting ...' : 'Submit' }}
                            </el-button>
                        </div>
                    </div>
                </el-drawer>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustomContent" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">多层嵌套</h2>
        <el-text class="mx-1" size="large">Drawer 组件也拥有多层嵌套的方法。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="drawerOuter = true">
                    Open outer Drawer
                </el-button>

                <el-drawer v-model="drawerOuter" title="I'm outer Drawer" size="50%">
                    <div>
                        <el-button type="primary" @click="drawerInner = true">
                            Click me!
                        </el-button>
                        <el-drawer
                            v-model="drawerInner"
                            title="I'm inner Drawer"
                            :append-to-body="true"
                        >
                            <p>_(:зゝ∠)_</p>
                        </el-drawer>
                    </div>
                </el-drawer>
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

        <h2 class="card_title_h2">自定义头部</h2>
        <el-text class="mx-1" size="large">header 可用于自定义显示标题的区域。为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId 插槽属性来指定哪些元素应该被读取为抽屉标题。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button type="primary" @click="drawerCustomHeader = true">
                    Open Drawer with customized header
                </el-button>

                <el-drawer v-model="drawerCustomHeader" :show-close="false">
                    <template #header="{ close, titleId, titleClass }">
                        <div class="my-header">
                            <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
                            <el-button type="danger" @click="close">
                                <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                                Close
                            </el-button>
                        </div>
                    </template>
                    This is drawer content.
                </el-drawer>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCustomHeader" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Drawer API</h2>
        <h2 class="card_title_h3">Drawer Attributes</h2>
        <el-table :data="drawerTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="200" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Drawer Events</h2>
        <el-table :data="drawerEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Drawer Slots</h2>
        <el-table :data="drawerSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Drawer Exposes</h2>
        <el-table :data="drawerExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentDrawer'
}
</script>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

type Direction = 'ltr' | 'rtl' | 'ttb' | 'btt'

const drawer = ref(false)
const drawerNoHeader = ref(false)
const drawerTable = ref(false)
const drawerForm = ref(false)
const drawerOuter = ref(false)
const drawerInner = ref(false)
const drawerCustomHeader = ref(false)
const direction = ref<Direction>('rtl')
const loading = ref(false)

const formLabelWidth = '80px'
const form = reactive({
    name: '',
    region: '',
})

const gridData = [
    { date: '2016-05-02', name: 'John Smith', address: 'No.1518, Jinshajiang Road, Putuo District' },
    { date: '2016-05-04', name: 'John Smith', address: 'No.1518, Jinshajiang Road, Putuo District' },
    { date: '2016-05-01', name: 'John Smith', address: 'No.1518, Jinshajiang Road, Putuo District' },
    { date: '2016-05-03', name: 'John Smith', address: 'No.1518, Jinshajiang Road, Putuo District' },
]

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure you want to close this?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

const cancelForm = () => {
    loading.value = false
    drawerForm.value = false
}

const submitForm = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        drawerForm.value = false
    }, 2000)
}

// 代码字符串
const codeBasic = `<template>
  <el-radio-group v-model="direction">
    <el-radio value="ltr">left to right</el-radio>
    <el-radio value="rtl">right to left</el-radio>
    <el-radio value="ttb">top to bottom</el-radio>
    <el-radio value="btt">bottom to top</el-radio>
  </el-radio-group>

  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </el-button>

  <el-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type Direction = 'ltr' | 'rtl' | 'ttb' | 'btt'

const drawer = ref(false)
const direction = ref<Direction>('rtl')
<\/script>`

const codeNoHeader = `<template>
  <el-button type="primary" @click="drawer = true">
    open
  </el-button>

  <el-drawer v-model="drawer" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
<\/script>`

const codeCustomContent = `<template>
  <el-button type="primary" @click="tableDrawer = true">
    Open Drawer with nested table
  </el-button>
  <el-button type="primary" @click="formDrawer = true">
    Open Drawer with nested form
  </el-button>

  <el-drawer v-model="tableDrawer" title="I have a nested table inside!" size="50%">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-drawer>

  <el-drawer
    v-model="formDrawer"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
  >
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Area" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select activity area">
          <el-option label="Area1" value="shanghai" />
          <el-option label="Area2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="cancelForm">Cancel</el-button>
      <el-button type="primary" :loading="loading" @click="submitForm">
        Submit
      </el-button>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'

const tableDrawer = ref(false)
const formDrawer = ref(false)
const loading = ref(false)
const formLabelWidth = '80px'

const form = reactive({
  name: '',
  region: '',
})

const gridData = [
  { date: '2016-05-02', name: 'John Smith', address: 'No.1518, Jinshajiang Road' },
  { date: '2016-05-04', name: 'John Smith', address: 'No.1518, Jinshajiang Road' },
]

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => { done() })
    .catch(() => {})
}
<\/script>`

const codeNested = `<template>
  <el-button type="primary" @click="outerDrawer = true">
    Open outer Drawer
  </el-button>

  <el-drawer v-model="outerDrawer" title="I'm outer Drawer" size="50%">
    <div>
      <el-button type="primary" @click="innerDrawer = true">
        Click me!
      </el-button>
      <el-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
      >
        <p>_(:зゝ∠)_</p>
      </el-drawer>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerDrawer = ref(false)
const innerDrawer = ref(false)
<\/script>`

const codeCustomHeader = `<template>
  <el-button type="primary" @click="drawer = true">
    Open Drawer with customized header
  </el-button>

  <el-drawer v-model="drawer" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    This is drawer content.
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const drawer = ref(false)
<\/script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>`

// API 数据
const drawerTableData: any[] = [
    { name: 'model-value / v-model', desc: '是否显示 Drawer', type: 'boolean', default: 'false' },
    { name: 'append-to-body', desc: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true', type: 'boolean', default: 'false' },
    { name: 'lock-scroll', desc: '是否在 Drawer 出现时将 body 滚动锁定', type: 'boolean', default: 'true' },
    { name: 'before-close', desc: '关闭前的回调，会暂停 Drawer 的关闭', type: 'Function(done)', default: '—' },
    { name: 'close-on-click-modal', desc: '是否可以通过点击 modal 关闭 Drawer', type: 'boolean', default: 'true' },
    { name: 'close-on-press-escape', desc: '是否可以通过按下 ESC 关闭 Drawer', type: 'boolean', default: 'true' },
    { name: 'open-delay', desc: 'Drawer 打开的延时时间，单位毫秒', type: 'number', default: '0' },
    { name: 'close-delay', desc: 'Drawer 关闭的延时时间，单位毫秒', type: 'number', default: '0' },
    { name: 'custom-class', desc: 'Drawer 的自定义类名', type: 'string', default: '—' },
    { name: 'destroy-on-close', desc: '控制是否在关闭 Drawer 之后将子元素全部销毁', type: 'boolean', default: 'false' },
    { name: 'modal', desc: '是否需要遮罩层', type: 'boolean', default: 'true' },
    { name: 'modal-class', desc: '遮罩层的自定义类名', type: 'string', default: '—' },
    { name: 'direction', desc: 'Drawer 打开的方向', type: "'rtl' | 'ltr' | 'ttb' | 'btt'", default: 'rtl' },
    { name: 'show-close', desc: '是否显示关闭按钮', type: 'boolean', default: 'true' },
    { name: 'size', desc: 'Drawer 窗体的大小，当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 "x%"', type: 'number | string', default: '30%' },
    { name: 'title', desc: 'Drawer 的标题，也可通过具名 slot 传入', type: 'string', default: '—' },
    { name: 'with-header', desc: '控制是否显示 header 栏', type: 'boolean', default: 'true' },
    { name: 'z-index', desc: '设置 z-index', type: 'number', default: '—' },
    { name: 'header-aria-level', desc: 'header 的 aria-level 属性', type: 'string', default: '2' },
]

const drawerEventData: any[] = [
    { name: 'open', desc: 'Drawer 打开的回调', type: '() => void' },
    { name: 'opened', desc: 'Drawer 打开动画结束时的回调', type: '() => void' },
    { name: 'close', desc: 'Drawer 关闭的回调', type: '() => void' },
    { name: 'closed', desc: 'Drawer 关闭动画结束时的回调', type: '() => void' },
    { name: 'open-auto-focus', desc: '输入焦点聚焦在 Drawer 内容时的回调', type: '() => void' },
    { name: 'close-auto-focus', desc: '输入焦点从 Drawer 内容失焦时的回调', type: '() => void' },
]

const drawerSlotData: any[] = [
    { name: 'default', desc: 'Drawer 的内容' },
    { name: 'header', desc: 'Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮' },
    { name: 'title', desc: '与 header 作用相同 请使用 header' },
    { name: 'footer', desc: 'Drawer 页脚部分' },
]

const drawerExposeData: any[] = [
    { name: 'handleClose', desc: '用于关闭 Drawer, 该方法会调用传入的 before-close 方法', type: '() => void' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.demo-drawer__content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.demo-drawer__footer {
    display: flex;
    margin-top: 20px;
}
</style>
