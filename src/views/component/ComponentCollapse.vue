<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Collapse 折叠面板</h1>
        <el-text class="mx-1" size="large">通过折叠面板收纳内容区域。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">可同时展开多个面板，面板之间不影响。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="Consistency" name="1">
                        <div>
                            Consistent with real life: in line with the process and logic of real
                            life, and target at the most familiar operation patterns.
                        </div>
                        <div>
                            Consistent within interface: all elements should be consistent, such
                            as: design style, icons and texts, position of elements, etc.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>
                            Operation feedback: enable the users to clearly perceive their
                            operations by style updates and interactive effects.
                        </div>
                        <div>
                            Visual feedback: reflect current state by updating or rearranging
                            elements of the page.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>
                            Simplify the process: keep operating process simple and intuitive.
                        </div>
                        <div>
                            Definite and clear: enunciate your intentions clearly so that the
                            users can quickly understand and make decisions.
                        </div>
                        <div>
                            Easy to identify: the interface should be straightforward, which helps
                            users to identify and frees them from memorizing and recalling.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>
                            Decision making: giving advice about operations is acceptable, but do
                            not make decisions for the users.
                        </div>
                        <div>
                            Controlled consequences: users should be granted the freedom to
                            operate, including canceling, aborting or terminating current
                            operation.
                        </div>
                    </el-collapse-item>
                </el-collapse>
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

        <h2 class="card_title_h2">手风琴效果</h2>
        <el-text class="mx-1" size="large">每次只能展开一个面板。通过 accordion 属性来设置是否以手风琴模式显示。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-collapse v-model="activeAccordion" accordion>
                    <el-collapse-item title="Consistency" name="1">
                        <div>
                            Consistent with real life: in line with the process and logic of real
                            life, and target at the most familiar operation patterns.
                        </div>
                        <div>
                            Consistent within interface: all elements should be consistent, such
                            as: design style, icons and texts, position of elements, etc.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>
                            Operation feedback: enable the users to clearly perceive their
                            operations by style updates and interactive effects.
                        </div>
                        <div>
                            Visual feedback: reflect current state by updating or rearranging
                            elements of the page.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>
                            Simplify the process: keep operating process simple and intuitive.
                        </div>
                        <div>
                            Definite and clear: enunciate your intentions clearly so that the
                            users can quickly understand and make decisions.
                        </div>
                        <div>
                            Easy to identify: the interface should be straightforward, which helps
                            users to identify and frees them from memorizing and recalling.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>
                            Decision making: giving advice about operations is acceptable, but do
                            not make decisions for the users.
                        </div>
                        <div>
                            Controlled consequences: users should be granted the freedom to
                            operate, including canceling, aborting or terminating current
                            operation.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeAccordion" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">自定义标题</h2>
        <el-text class="mx-1" size="large">除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-collapse v-model="activeCustom" accordion>
                    <el-collapse-item name="1">
                        <template #title>
                            <span class="collapse-title">
                                Consistency
                                <el-icon class="header-icon"><InfoFilled /></el-icon>
                            </span>
                        </template>
                        <div>
                            Consistent with real life: in line with the process and logic of real
                            life, and target at the most familiar operation patterns.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>
                            Operation feedback: enable the users to clearly perceive their
                            operations by style updates and interactive effects.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>
                            Simplify the process: keep operating process simple and intuitive.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>
                            Decision making: giving advice about operations is acceptable, but do
                            not make decisions for the users.
                        </div>
                    </el-collapse-item>
                </el-collapse>
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

        <h2 class="card_title_h2">Collapse API</h2>
        <h2 class="card_title_h3">Collapse Attributes</h2>
        <el-table :data="collapseTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Collapse Events</h2>
        <el-table :data="collapseEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Collapse Slots</h2>
        <el-table :data="collapseSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Collapse-Item API</h2>
        <h2 class="card_title_h3">Collapse-Item Attributes</h2>
        <el-table :data="collapseItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Collapse-Item Slots</h2>
        <el-table :data="collapseItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentCollapse'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

// 基础用法
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}

// 手风琴效果
const activeAccordion = ref('1')

// 自定义标题
const activeCustom = ref('1')

// 代码字符串
const codeBasic = `<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="Consistency" name="1">
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and target at the most familiar operation patterns.
      </div>
      <div>
        Consistent within interface: all elements should be consistent, such
        as: design style, icons and texts, position of elements, etc.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects.
      </div>
      <div>
        Visual feedback: reflect current state by updating or rearranging
        elements of the page.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Efficiency" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive.
      </div>
      <div>
        Definite and clear: enunciate your intentions clearly so that the
        users can quickly understand and make decisions.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Controllability" name="4">
      <div>
        Decision making: giving advice about operations is acceptable, but do
        not make decisions for the users.
      </div>
      <div>
        Controlled consequences: users should be granted the freedom to
        operate, including canceling, aborting or terminating current operation.
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
<\/script>`

const codeAccordion = `<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Consistency" name="1">
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and target at the most familiar operation patterns.
      </div>
      <div>
        Consistent within interface: all elements should be consistent, such
        as: design style, icons and texts, position of elements, etc.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects.
      </div>
      <div>
        Visual feedback: reflect current state by updating or rearranging
        elements of the page.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Efficiency" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Controllability" name="4">
      <div>
        Decision making: giving advice about operations is acceptable, but do
        not make decisions for the users.
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
<\/script>`

const codeCustom = `<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item name="1">
      <template #title>
        <span class="collapse-title">
          Consistency
          <el-icon class="header-icon"><InfoFilled /></el-icon>
        </span>
      </template>
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and target at the most familiar operation patterns.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Efficiency" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive.
      </div>
    </el-collapse-item>
    <el-collapse-item title="Controllability" name="4">
      <div>
        Decision making: giving advice about operations is acceptable, but do
        not make decisions for the users.
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

const activeName = ref('1')
<\/script>

<style scoped>
.collapse-title {
  display: flex;
  align-items: center;
}
.header-icon {
  margin-left: 4px;
}
</style>`

// API 数据
const collapseTableData: any[] = [
    { name: 'model-value / v-model', desc: '当前活动面板，在手风琴模式下其类型是 string，在其他模式下是 array', type: 'string | string[]', default: '—' },
    { name: 'accordion', desc: '是否手风琴模式', type: 'boolean', default: 'false' },
]

const collapseEventData: any[] = [
    { name: 'change', desc: '切换当前活动面板，在手风琴模式下其类型是 string，在其他模式下是 array', type: '(activeNames: string | string[]) => void' },
]

const collapseSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]

const collapseItemTableData: any[] = [
    { name: 'name', desc: '唯一标志符', type: 'string | number', default: '—' },
    { name: 'title', desc: '面板标题', type: 'string', default: '—' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
]

const collapseItemSlotData: any[] = [
    { name: 'default', desc: '面板内容' },
    { name: 'title', desc: '面板标题内容' },
    { name: 'icon', desc: '自定义图标' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.collapse-title {
    display: flex;
    align-items: center;
}

.header-icon {
    margin-left: 4px;
}
</style>
