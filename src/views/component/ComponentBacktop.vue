<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Backtop 回到顶部</h1>
        <el-text class="mx-1" size="large">返回页面顶部的操作按钮。</el-text>

        <h2 class="card_title_h2">基础用法</h2>
        <el-text class="mx-1" size="large">滑动页面即可看到右下方的按钮。通过 visibility-height 属性来设置触发显示的滚动高度，默认值为 200。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-text class="mx-1">滚动页面查看右下角按钮效果</el-text>
                <el-backtop :right="100" :bottom="100" />
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
        <el-text class="mx-1" size="large">通过默认插槽自定义显示内容。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-text class="mx-1">滚动页面查看右下角自定义按钮效果</el-text>
                <el-backtop :right="160" :bottom="100" class="custom-backtop">
                    <div class="custom-content">UP</div>
                </el-backtop>
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

        <h2 class="card_title_h2">指定容器</h2>
        <el-text class="mx-1" size="large">通过 target 属性指定触发滚动的对象。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <div id="backtop-container" class="backtop-container">
                    <p v-for="i in 20" :key="i" class="scroll-item">Scroll item {{ i }}</p>
                    <el-backtop target="#backtop-container" :right="10" :bottom="10" />
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
                        <highlightjs autodetect :code="codeTarget" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Backtop API</h2>
        <h2 class="card_title_h3">Backtop Attributes</h2>
        <el-table :data="backtopTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Backtop Events</h2>
        <el-table :data="backtopEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Backtop Slots</h2>
        <el-table :data="backtopSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentBacktop'
}
</script>

<script lang="tsx" setup>
// 代码字符串
const codeBasic = `<template>
  <!-- 滚动页面查看右下角按钮效果 -->
  <el-backtop :right="100" :bottom="100" />
</template>`

const codeCustom = `<template>
  <el-backtop :right="160" :bottom="100" class="custom-backtop">
    <div class="custom-content">UP</div>
  </el-backtop>
</template>

<style scoped>
.custom-backtop {
  height: 100%;
  width: 100%;
  background-color: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}

.custom-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}
</style>`

const codeTarget = `<template>
  <div id="backtop-container" class="backtop-container">
    <p v-for="i in 20" :key="i" class="scroll-item">Scroll item {{ i }}</p>
    <el-backtop target="#backtop-container" :right="10" :bottom="10" />
  </div>
</template>

<style scoped>
.backtop-container {
  position: relative;
  height: 300px;
  overflow-y: auto;
  padding: 16px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.scroll-item {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
</style>`

// API 数据
const backtopTableData: any[] = [
    { name: 'target', desc: '触发滚动的对象', type: 'string', default: '—' },
    { name: 'visibility-height', desc: '滚动高度达到此参数值才出现', type: 'number', default: '200' },
    { name: 'right', desc: '控制其显示位置，距离页面右边距', type: 'number', default: '40' },
    { name: 'bottom', desc: '控制其显示位置，距离页面底部距离', type: 'number', default: '40' },
]

const backtopEventData: any[] = [
    { name: 'click', desc: '点击按钮触发的事件', type: '(event: MouseEvent) => void' },
]

const backtopSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.custom-backtop {
    height: 100%;
    width: 100%;
    background-color: var(--el-bg-color-overlay);
    box-shadow: var(--el-box-shadow-lighter);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
}

.custom-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
}

.backtop-container {
    position: relative;
    height: 300px;
    overflow-y: auto;
    padding: 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: #fafafa;
}

.scroll-item {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    color: #606266;

    &:last-child {
        border-bottom: none;
    }
}
</style>
