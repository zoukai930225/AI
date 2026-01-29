<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Result 结果</h1>
        <el-text class="mx-1" size="large">用于对用户的操作结果或者异常状态做反馈。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">通过 icon 属性来展示不同的结果状态。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row>
                    <el-col :sm="12" :lg="6">
                        <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
                            <template #extra>
                                <el-button type="primary">Back</el-button>
                            </template>
                        </el-result>
                    </el-col>
                    <el-col :sm="12" :lg="6">
                        <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
                            <template #extra>
                                <el-button type="primary">Back</el-button>
                            </template>
                        </el-result>
                    </el-col>
                    <el-col :sm="12" :lg="6">
                        <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
                            <template #extra>
                                <el-button type="primary">Back</el-button>
                            </template>
                        </el-result>
                    </el-col>
                    <el-col :sm="12" :lg="6">
                        <el-result icon="info" title="Info Tip" sub-title="Please follow the instructions">
                            <template #extra>
                                <el-button type="primary">Back</el-button>
                            </template>
                        </el-result>
                    </el-col>
                </el-row>
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
        <el-text class="mx-1" size="large">通过插槽来自定义 Result 组件的内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-result title="404" sub-title="Sorry, request error">
                    <template #icon>
                        <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                    </template>
                    <template #extra>
                        <el-button type="primary">Back</el-button>
                    </template>
                </el-result>
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

        <h2 class="card_title_h2">Result API</h2>
        <h2 class="card_title_h3">Result Attributes</h2>
        <el-table :data="resultTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Result Slots</h2>
        <el-table :data="resultSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentResult'
}
</script>

<script lang="tsx" setup>
// 代码字符串
const codeBasic = `<template>
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="info" title="Info Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>`

const codeCustom = `<template>
  <el-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
    </template>
    <template #extra>
      <el-button type="primary">Back</el-button>
    </template>
  </el-result>
</template>`

// API 数据
const resultTableData: any[] = [
    { name: 'title', desc: '标题', type: 'string', default: '—' },
    { name: 'sub-title', desc: '二级标题', type: 'string', default: '—' },
    { name: 'icon', desc: '图标类型', type: "'success' | 'warning' | 'info' | 'error'", default: 'info' },
]

const resultSlotData: any[] = [
    { name: 'icon', desc: '自定义图标' },
    { name: 'title', desc: '自定义标题' },
    { name: 'sub-title', desc: '自定义二级标题' },
    { name: 'extra', desc: '自定义底部额外区域' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}
</style>
