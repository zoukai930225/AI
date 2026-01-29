<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Steps 步骤条</h1>
        <el-text class="mx-1" size="large">引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">简单的步骤条。设置 active 属性，接受一个 Number，表明步骤的 index，从 0 开始。 需要定宽的步骤条时，设置 space 属性即可，它接受 Number， 单位为 px， 如果不设置，则为自适应。 设置 finish-status 属性可以改变已经完成的步骤的状态。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps :active="active" finish-status="success">
                    <el-step title="Step 1" />
                    <el-step title="Step 2" />
                    <el-step title="Step 3" />
                </el-steps>
                <el-button style="margin-top: 12px" @click="next">Next step</el-button>
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

        <h2 class="card_title_h2">含状态的步骤条</h2>
        <el-text class="mx-1" size="large">每一步骤显示出该步骤的状态。也可以使用 title 具名插槽，可以用 slot 的方式来取代属性的设置， 在本文档最后的列表中有所有的插槽可供参考。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps :active="1">
                    <el-step title="Done" />
                    <el-step title="Processing" />
                    <el-step title="Step 3" />
                </el-steps>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeStatus" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">有描述的步骤条</h2>
        <el-text class="mx-1" size="large">每个步骤有其对应的步骤状态描述。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps :active="1">
                    <el-step title="Step 1" description="Some description" />
                    <el-step title="Step 2" description="Some description" />
                    <el-step title="Step 3" description="Some description" />
                </el-steps>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeDescription" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">居中的步骤条</h2>
        <el-text class="mx-1" size="large">标题和描述可以居中。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps :active="2" align-center>
                    <el-step title="Step 1" description="Some description" />
                    <el-step title="Step 2" description="Some description" />
                    <el-step title="Step 3" description="Some description" />
                    <el-step title="Step 4" description="Some description" />
                </el-steps>
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

        <h2 class="card_title_h2">带图标的步骤条</h2>
        <el-text class="mx-1" size="large">步骤条内可以启用各种自定义的图标。通过 icon 属性来设置图标， 图标的类型可以参考 Icon 组件的文档， 除此以外，还能通过具名 slot 来使用自定义的图标。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps :active="1">
                    <el-step title="Step 1" :icon="Edit" />
                    <el-step title="Step 2" :icon="UploadFilled" />
                    <el-step title="Step 3" :icon="Picture" />
                </el-steps>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeIcon" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">垂直的步骤条</h2>
        <el-text class="mx-1" size="large">垂直方向的步骤条。只需要在 el-steps 元素中设置 direction 属性为 vertical 即可。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps direction="vertical" :active="1">
                    <el-step title="Step 1" description="Some description" />
                    <el-step title="Step 2" description="Some description" />
                    <el-step title="Step 3" description="Some description" />
                </el-steps>
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

        <h2 class="card_title_h2">简洁风格的步骤条</h2>
        <el-text class="mx-1" size="large">设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-steps :active="1" simple>
                    <el-step title="Step 1" :icon="Edit" />
                    <el-step title="Step 2" :icon="UploadFilled" />
                    <el-step title="Step 3" :icon="Picture" />
                </el-steps>

                <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="Step 1" />
                    <el-step title="Step 2" />
                    <el-step title="Step 3" />
                </el-steps>
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

        <h2 class="card_title_h2">Steps API</h2>
        <h2 class="card_title_h3">Steps Attributes</h2>
        <el-table :data="stepsTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Steps Slots</h2>
        <el-table :data="stepsSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Step API</h2>
        <h2 class="card_title_h3">Step Attributes</h2>
        <el-table :data="stepTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Step Slots</h2>
        <el-table :data="stepSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentSteps'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import { Edit, UploadFilled, Picture } from '@element-plus/icons-vue'

const active = ref(0)

const next = () => {
    if (active.value++ > 2) active.value = 0
}

// 代码字符串
const codeBasic = `<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>
  <el-button style="margin-top: 12px" @click="next">Next step</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
<\/script>`

const codeStatus = `<template>
  <el-steps :active="1">
    <el-step title="Done" />
    <el-step title="Processing" />
    <el-step title="Step 3" />
  </el-steps>
</template>`

const codeDescription = `<template>
  <el-steps :active="1">
    <el-step title="Step 1" description="Some description" />
    <el-step title="Step 2" description="Some description" />
    <el-step title="Step 3" description="Some description" />
  </el-steps>
</template>`

const codeCenter = `<template>
  <el-steps :active="2" align-center>
    <el-step title="Step 1" description="Some description" />
    <el-step title="Step 2" description="Some description" />
    <el-step title="Step 3" description="Some description" />
    <el-step title="Step 4" description="Some description" />
  </el-steps>
</template>`

const codeIcon = `<template>
  <el-steps :active="1">
    <el-step title="Step 1" :icon="Edit" />
    <el-step title="Step 2" :icon="UploadFilled" />
    <el-step title="Step 3" :icon="Picture" />
  </el-steps>
</template>

<script lang="ts" setup>
import { Edit, UploadFilled, Picture } from '@element-plus/icons-vue'
<\/script>`

const codeVertical = `<template>
  <el-steps direction="vertical" :active="1">
    <el-step title="Step 1" description="Some description" />
    <el-step title="Step 2" description="Some description" />
    <el-step title="Step 3" description="Some description" />
  </el-steps>
</template>`

const codeSimple = `<template>
  <el-steps :active="1" simple>
    <el-step title="Step 1" :icon="Edit" />
    <el-step title="Step 2" :icon="UploadFilled" />
    <el-step title="Step 3" :icon="Picture" />
  </el-steps>

  <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>
</template>

<script lang="ts" setup>
import { Edit, UploadFilled, Picture } from '@element-plus/icons-vue'
<\/script>`

// API 数据
const stepsTableData: any[] = [
    { name: 'space', desc: '每个 step 的间距，不填写将自适应间距。 支持百分比。', type: 'number | string', default: '—' },
    { name: 'direction', desc: '显示方向', type: "'vertical' | 'horizontal'", default: 'horizontal' },
    { name: 'active', desc: '设置当前激活步骤', type: 'number', default: '0' },
    { name: 'process-status', desc: '设置当前步骤的状态', type: "'wait' | 'process' | 'finish' | 'error' | 'success'", default: 'process' },
    { name: 'finish-status', desc: '设置结束步骤的状态', type: "'wait' | 'process' | 'finish' | 'error' | 'success'", default: 'finish' },
    { name: 'align-center', desc: '进行居中对齐', type: 'boolean', default: 'false' },
    { name: 'simple', desc: '是否应用简洁风格', type: 'boolean', default: 'false' },
]

const stepsSlotData: any[] = [
    { name: 'default', desc: '默认插槽' },
]

const stepTableData: any[] = [
    { name: 'title', desc: '标题', type: 'string', default: '—' },
    { name: 'description', desc: '描述文案', type: 'string', default: '—' },
    { name: 'icon', desc: 'Step 组件的自定义图标。 也支持 slot 方式写入', type: 'string | Component', default: '—' },
    { name: 'status', desc: '设置当前步骤的状态，不设置则根据 steps 确定状态', type: "'wait' | 'process' | 'finish' | 'error' | 'success'", default: '—' },
]

const stepSlotData: any[] = [
    { name: 'icon', desc: '自定义图标' },
    { name: 'title', desc: '自定义标题' },
    { name: 'description', desc: '自定义描述文案' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}
</style>
