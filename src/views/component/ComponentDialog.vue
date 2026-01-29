<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Dialog 对话框</h1>
        <el-text class="mx-1" size="large">在保留当前页面状态的情况下，告知用户并承载相关操作。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">Dialog 弹出一个对话框，适合需要定制性更大的场景。需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="dialogVisible = true">
                    Click to open the Dialog
                </el-button>

                <el-dialog
                    v-model="dialogVisible"
                    title="Tips"
                    width="500"
                >
                    <span>This is a message</span>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="dialogVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="dialogVisible = false">
                                Confirm
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
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

        <h2 class="card_title_h2">自定义内容</h2>
        <el-text class="mx-1" size="large">对话框的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Plus 的表格和表单组件的两个样例。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="dialogTableVisible = true">
                    Open a Table nested Dialog
                </el-button>
                <el-button plain @click="dialogFormVisible = true">
                    Open a Form nested Dialog
                </el-button>

                <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
                    <el-table :data="gridData">
                        <el-table-column property="date" label="Date" width="150" />
                        <el-table-column property="name" label="Name" width="200" />
                        <el-table-column property="address" label="Address" />
                    </el-table>
                </el-dialog>

                <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
                    <el-form :model="form">
                        <el-form-item label="Promotion name" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="Zones" :label-width="formLabelWidth">
                            <el-select v-model="form.region" placeholder="Please select a zone">
                                <el-option label="Zone No.1" value="shanghai" />
                                <el-option label="Zone No.2" value="beijing" />
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">
                                Confirm
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
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

        <h2 class="card_title_h2">自定义头部</h2>
        <el-text class="mx-1" size="large">header 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId 插槽属性来指定哪些元素应该被读取为对话框标题。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="dialogHeaderVisible = true">
                    Open Dialog with customized header
                </el-button>

                <el-dialog v-model="dialogHeaderVisible" :show-close="false" width="500">
                    <template #header="{ close, titleId, titleClass }">
                        <div class="my-header">
                            <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
                            <el-button type="danger" @click="close">
                                <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                                Close
                            </el-button>
                        </div>
                    </template>
                    This is dialog content.
                </el-dialog>
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

        <h2 class="card_title_h2">嵌套的对话框</h2>
        <el-text class="mx-1" size="large">如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。 对于确实需要嵌套 Dialog 的场景，我们提供了 append-to-body 属性。 将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="outerVisible = true">
                    Open outer Dialog
                </el-button>

                <el-dialog v-model="outerVisible" title="Outer Dialog" width="800">
                    <template #default>
                        <el-dialog
                            v-model="innerVisible"
                            width="500"
                            title="Inner Dialog"
                            append-to-body
                        >
                            <span>This is inner dialog content.</span>
                        </el-dialog>
                        <div>This is outer dialog content.</div>
                    </template>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="outerVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="innerVisible = true">
                                Open inner Dialog
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
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

        <h2 class="card_title_h2">居中布局</h2>
        <el-text class="mx-1" size="large">标题和底部可水平居中。将 center 设置为 true 即可使标题和底部居中。 center 仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="centerDialogVisible = true">
                    Open centered Dialog
                </el-button>

                <el-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
                    <span>
                        It should be noted that the content will not be aligned in center by
                        default
                    </span>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="centerDialogVisible = false">
                                Confirm
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCenter" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">居中对话框</h2>
        <el-text class="mx-1" size="large">从屏幕中心打开对话框。设置 align-center 为 true 使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以 top 属性将不起作用。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="alignCenterVisible = true">
                    Open align center Dialog
                </el-button>

                <el-dialog v-model="alignCenterVisible" title="Warning" width="500" align-center>
                    <span>Open a dialog from the center of the screen</span>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="alignCenterVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="alignCenterVisible = false">
                                Confirm
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeAlignCenter" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">可拖拽对话框</h2>
        <el-text class="mx-1" size="large">设置 draggable 属性为 true 以做到拖拽。设置 overflow 属性为 true 可以拖拽超出可视区。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-button plain @click="draggableVisible = true">
                    Open draggable Dialog
                </el-button>

                <el-dialog v-model="draggableVisible" title="Draggable Dialog" width="500" draggable>
                    <span>It's a draggable Dialog</span>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="draggableVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="draggableVisible = false">
                                Confirm
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeDraggable" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Dialog API</h2>
        <h2 class="card_title_h3">Dialog Attributes</h2>
        <el-table :data="dialogTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="200" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Dialog Events</h2>
        <el-table :data="dialogEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Dialog Slots</h2>
        <el-table :data="dialogSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentDialog'
}
</script>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const dialogVisible = ref(false)
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const dialogHeaderVisible = ref(false)
const outerVisible = ref(false)
const innerVisible = ref(false)
const centerDialogVisible = ref(false)
const alignCenterVisible = ref(false)
const draggableVisible = ref(false)

const formLabelWidth = '140px'
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

// 代码字符串
const codeBasic = `<template>
  <el-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog v-model="dialogVisible" title="Tips" width="500">
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>`

const codeCustomContent = `<template>
  <el-button plain @click="dialogTableVisible = true">
    Open a Table nested Dialog
  </el-button>
  <el-button plain @click="dialogFormVisible = true">
    Open a Form nested Dialog
  </el-button>

  <!-- Table Dialog -->
  <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-dialog>

  <!-- Form Dialog -->
  <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)

const formLabelWidth = '140px'
const form = reactive({
  name: '',
  region: '',
})

const gridData = [
  { date: '2016-05-02', name: 'John Smith', address: 'No.1518, Jinshajiang Road' },
  { date: '2016-05-04', name: 'John Smith', address: 'No.1518, Jinshajiang Road' },
]
<\/script>`

const codeCustomHeader = `<template>
  <el-button plain @click="dialogVisible = true">
    Open Dialog with customized header
  </el-button>

  <el-dialog v-model="dialogVisible" :show-close="false" width="500">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    This is dialog content.
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const dialogVisible = ref(false)
<\/script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>`

const codeNested = `<template>
  <el-button plain @click="outerVisible = true">
    Open outer Dialog
  </el-button>

  <el-dialog v-model="outerVisible" title="Outer Dialog" width="800">
    <template #default>
      <el-dialog
        v-model="innerVisible"
        width="500"
        title="Inner Dialog"
        append-to-body
      >
        <span>This is inner dialog content.</span>
      </el-dialog>
      <div>This is outer dialog content.</div>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">
          Open inner Dialog
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
<\/script>`

const codeCenter = `<template>
  <el-button plain @click="centerDialogVisible = true">
    Open centered Dialog
  </el-button>

  <el-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
    <span>
      It should be noted that the content will not be aligned in center by default
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
<\/script>`

const codeAlignCenter = `<template>
  <el-button plain @click="alignCenterVisible = true">
    Open align center Dialog
  </el-button>

  <el-dialog v-model="alignCenterVisible" title="Warning" width="500" align-center>
    <span>Open a dialog from the center of the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="alignCenterVisible = false">Cancel</el-button>
        <el-button type="primary" @click="alignCenterVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const alignCenterVisible = ref(false)
<\/script>`

const codeDraggable = `<template>
  <el-button plain @click="draggableVisible = true">
    Open draggable Dialog
  </el-button>

  <el-dialog v-model="draggableVisible" title="Draggable Dialog" width="500" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="draggableVisible = false">Cancel</el-button>
        <el-button type="primary" @click="draggableVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const draggableVisible = ref(false)
<\/script>`

// API 数据
const dialogTableData: any[] = [
    { name: 'model-value / v-model', desc: '是否显示 Dialog', type: 'boolean', default: 'false' },
    { name: 'title', desc: 'Dialog 对话框 Dialog 的标题', type: 'string', default: '—' },
    { name: 'width', desc: 'Dialog 的宽度', type: 'string | number', default: '50%' },
    { name: 'fullscreen', desc: '是否为全屏 Dialog', type: 'boolean', default: 'false' },
    { name: 'top', desc: 'Dialog CSS 中的 margin-top 值', type: 'string', default: '15vh' },
    { name: 'modal', desc: '是否需要遮罩层', type: 'boolean', default: 'true' },
    { name: 'modal-class', desc: '遮罩的自定义类名', type: 'string', default: '—' },
    { name: 'append-to-body', desc: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true', type: 'boolean', default: 'false' },
    { name: 'lock-scroll', desc: '是否在 Dialog 出现时将 body 滚动锁定', type: 'boolean', default: 'true' },
    { name: 'custom-class', desc: 'Dialog 的自定义类名', type: 'string', default: '—' },
    { name: 'open-delay', desc: 'Dialog 打开的延时时间，单位毫秒', type: 'number', default: '0' },
    { name: 'close-delay', desc: 'Dialog 关闭的延时时间，单位毫秒', type: 'number', default: '0' },
    { name: 'close-on-click-modal', desc: '是否可以通过点击 modal 关闭 Dialog', type: 'boolean', default: 'true' },
    { name: 'close-on-press-escape', desc: '是否可以通过按下 ESC 关闭 Dialog', type: 'boolean', default: 'true' },
    { name: 'show-close', desc: '是否显示关闭按钮', type: 'boolean', default: 'true' },
    { name: 'before-close', desc: '关闭前的回调，会暂停 Dialog 的关闭', type: 'Function(done)', default: '—' },
    { name: 'draggable', desc: '为 Dialog 启用可拖拽功能', type: 'boolean', default: 'false' },
    { name: 'overflow', desc: '拖动范围可以超出可视区', type: 'boolean', default: 'false' },
    { name: 'center', desc: '是否让 Dialog 的 header 和 footer 部分居中排列', type: 'boolean', default: 'false' },
    { name: 'align-center', desc: '是否水平垂直对齐对话框', type: 'boolean', default: 'false' },
    { name: 'destroy-on-close', desc: '当关闭 Dialog 时，销毁其中的元素', type: 'boolean', default: 'false' },
    { name: 'close-icon', desc: '自定义关闭图标', type: 'string | Component', default: 'Close' },
    { name: 'z-index', desc: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序', type: 'number', default: '—' },
    { name: 'header-aria-level', desc: 'header 的 aria-level 属性', type: 'string', default: '2' },
]

const dialogEventData: any[] = [
    { name: 'open', desc: 'Dialog 打开的回调', type: '() => void' },
    { name: 'opened', desc: 'Dialog 打开动画结束时的回调', type: '() => void' },
    { name: 'close', desc: 'Dialog 关闭的回调', type: '() => void' },
    { name: 'closed', desc: 'Dialog 关闭动画结束时的回调', type: '() => void' },
    { name: 'open-auto-focus', desc: '输入焦点聚焦在 Dialog 内容时的回调', type: '() => void' },
    { name: 'close-auto-focus', desc: '输入焦点从 Dialog 内容失焦时的回调', type: '() => void' },
]

const dialogSlotData: any[] = [
    { name: 'default', desc: 'Dialog 的内容' },
    { name: 'header', desc: '对话框标题的内容；会替换标题部分，但不会移除关闭按钮' },
    { name: 'title', desc: '与 header 作用相同 请使用 header' },
    { name: 'footer', desc: 'Dialog 按钮操作区的内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.dialog-footer {
    text-align: right;
}

.my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>
