<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Descriptions 描述列表</h1>
        <el-text class="mx-1" size="large">列表形式展示多个字段。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">基础的描述列表用法。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-descriptions title="User Info">
                    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
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

        <h2 class="card_title_h2">不同尺寸</h2>
        <el-text class="mx-1" size="large">通过 size 属性来设置描述列表的尺寸。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-radio-group v-model="sizeValue" style="margin-bottom: 20px">
                    <el-radio-button value="large">Large</el-radio-button>
                    <el-radio-button value="default">Default</el-radio-button>
                    <el-radio-button value="small">Small</el-radio-button>
                </el-radio-group>
                <el-descriptions title="With border" :column="3" :size="sizeValue" border>
                    <template #extra>
                        <el-button type="primary">Operation</el-button>
                    </template>
                    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
                <el-descriptions title="Without border" :column="3" :size="sizeValue" style="margin-top: 20px">
                    <template #extra>
                        <el-button type="primary">Operation</el-button>
                    </template>
                    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
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

        <h2 class="card_title_h2">垂直列表</h2>
        <el-text class="mx-1" size="large">通过 direction 属性设置排列方向。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
                    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
                <el-descriptions title="Vertical list without border" :column="4" direction="vertical" style="margin-top: 20px">
                    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
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

        <h2 class="card_title_h2">自定义样式</h2>
        <el-text class="mx-1" size="large">通过 label-class-name 和 class-name 属性自定义样式。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-descriptions title="Customized style list" :column="3" border>
                    <el-descriptions-item
                        label="Username"
                        label-class-name="my-label"
                        class-name="my-content"
                    >
                        kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag size="small">School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item
                        label="Address"
                        label-class-name="my-label"
                        class-name="my-content"
                    >
                        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
                    </el-descriptions-item>
                </el-descriptions>
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

        <h2 class="card_title_h2">Descriptions API</h2>
        <h2 class="card_title_h3">Descriptions Attributes</h2>
        <el-table :data="descriptionsTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Descriptions Slots</h2>
        <el-table :data="descriptionsSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">Descriptions-Item API</h2>
        <h2 class="card_title_h3">Descriptions-Item Attributes</h2>
        <el-table :data="descriptionsItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="180" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Descriptions-Item Slots</h2>
        <el-table :data="descriptionsItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentDescriptions'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'

// 不同尺寸
const sizeValue = ref<'large' | 'default' | 'small'>('default')

// 代码字符串
const codeBasic = `<template>
  <el-descriptions title="User Info">
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
</template>`

const codeSize = `<template>
  <el-radio-group v-model="size" style="margin-bottom: 20px">
    <el-radio-button value="large">Large</el-radio-button>
    <el-radio-button value="default">Default</el-radio-button>
    <el-radio-button value="small">Small</el-radio-button>
  </el-radio-group>
  <el-descriptions title="With border" :column="3" :size="size" border>
    <template #extra>
      <el-button type="primary">Operation</el-button>
    </template>
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'large' | 'default' | 'small'>('default')
<\/script>`

const codeVertical = `<template>
  <el-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
</template>`

const codeCustom = `<template>
  <el-descriptions title="Customized style list" :column="3" border>
    <el-descriptions-item
      label="Username"
      label-class-name="my-label"
      class-name="my-content"
    >
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item
      label="Address"
      label-class-name="my-label"
      class-name="my-content"
    >
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
</template>

<style>
.my-label {
  background: var(--el-color-success-light-9) !important;
}
.my-content {
  background: var(--el-color-danger-light-9);
}
</style>`

// API 数据
const descriptionsTableData: any[] = [
    { name: 'border', desc: '是否带有边框', type: 'boolean', default: 'false' },
    { name: 'column', desc: '一行 Descriptions Item 的数量', type: 'number', default: '3' },
    { name: 'direction', desc: '排列的方向', type: "'vertical' | 'horizontal'", default: 'horizontal' },
    { name: 'size', desc: '列表的尺寸', type: "'large' | 'default' | 'small'", default: 'default' },
    { name: 'title', desc: '标题文本，显示在左上方', type: 'string', default: '—' },
    { name: 'extra', desc: '操作区文本，显示在右上方', type: 'string', default: '—' },
]

const descriptionsSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'title', desc: '自定义标题，显示在左上方' },
    { name: 'extra', desc: '自定义操作区，显示在右上方' },
]

const descriptionsItemTableData: any[] = [
    { name: 'label', desc: '标签文本', type: 'string', default: '—' },
    { name: 'span', desc: '列的数量', type: 'number', default: '1' },
    { name: 'width', desc: '列的宽度，不同行相同列的宽度按最大值设定', type: 'string | number', default: '—' },
    { name: 'min-width', desc: '列的最小宽度', type: 'string | number', default: '—' },
    { name: 'align', desc: '列的内容对齐方式', type: "'left' | 'center' | 'right'", default: 'left' },
    { name: 'label-align', desc: '列的标签对齐方式', type: "'left' | 'center' | 'right'", default: '—' },
    { name: 'class-name', desc: '列的内容自定义类名', type: 'string', default: '—' },
    { name: 'label-class-name', desc: '列的标签自定义类名', type: 'string', default: '—' },
]

const descriptionsItemSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'label', desc: '自定义标签' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

:deep(.my-label) {
    background: var(--el-color-success-light-9) !important;
}

:deep(.my-content) {
    background: var(--el-color-danger-light-9);
}
</style>
