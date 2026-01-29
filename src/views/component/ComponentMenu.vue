<template>
    <card-body ref="bodyRef">
        <h1 class="card_title_h1">Menu 菜单</h1>
        <el-text class="mx-1" size="large">为网站提供导航功能的菜单。</el-text>

        <h2 class="card_title_h2">顶栏</h2>
        <el-text class="mx-1" size="large">顶部栏菜单可在各种场景中使用。导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。 另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了 background-color、text-color 和 active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                >
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="3" disabled>Info</el-menu-item>
                    <el-menu-item index="4">Orders</el-menu-item>
                </el-menu>
                <div style="margin-top: 20px;"></div>
                <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    @select="handleSelect"
                >
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="3" disabled>Info</el-menu-item>
                    <el-menu-item index="4">Orders</el-menu-item>
                </el-menu>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeHorizontal" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">侧栏</h2>
        <el-text class="mx-1" size="large">垂直菜单，可内嵌子菜单。通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-row class="tac">
                    <el-col :span="12">
                        <h5>Default colors</h5>
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                        >
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon><location /></el-icon>
                                    <span>Navigator One</span>
                                </template>
                                <el-menu-item-group title="Group One">
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-menu-item index="2">
                                <el-icon><icon-menu /></el-icon>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <el-icon><document /></el-icon>
                                <span>Navigator Three</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <el-icon><setting /></el-icon>
                                <span>Navigator Four</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="12">
                        <h5>Custom colors</h5>
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            @open="handleOpen"
                            @close="handleClose"
                        >
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon><location /></el-icon>
                                    <span>Navigator One</span>
                                </template>
                                <el-menu-item-group title="Group One">
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-menu-item index="2">
                                <el-icon><icon-menu /></el-icon>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <el-icon><document /></el-icon>
                                <span>Navigator Three</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <el-icon><setting /></el-icon>
                                <span>Navigator Four</span>
                            </el-menu-item>
                        </el-menu>
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
                        <highlightjs autodetect :code="codeVertical" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">折叠</h2>
        <el-text class="mx-1" size="large">垂直导航菜单可以被折叠。</el-text>
        <el-card style="max-width: 100%;margin-top: 1em;" shadow="never">
            <div class="demo-block">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                    <el-radio-button :value="false">expand</el-radio-button>
                    <el-radio-button :value="true">collapse</el-radio-button>
                </el-radio-group>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <el-icon><document /></el-icon>
                        <span>Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon><setting /></el-icon>
                        <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <template #footer>
                <el-collapse>
                    <el-collapse-item title="" name="1">
                        <template #icon="{ isActive }">
                            <el-tooltip placement="bottom" content="查看源代码">
                                <img src="@/assets/svg/code-icon.svg" class="code-icon" />
                            </el-tooltip>
                        </template>
                        <highlightjs autodetect :code="codeCollapse" />
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-card>

        <h2 class="card_title_h2">Menu API</h2>
        <h2 class="card_title_h3">Menu Attributes</h2>
        <el-table :data="menuTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="200" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Menu Events</h2>
        <el-table :data="menuEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="250" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Menu Slots</h2>
        <el-table :data="menuSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">Menu Exposes</h2>
        <el-table :data="menuExposeData" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="250" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">SubMenu API</h2>
        <h2 class="card_title_h3">SubMenu Attributes</h2>
        <el-table :data="subMenuTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="200" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">SubMenu Slots</h2>
        <el-table :data="subMenuSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">MenuItem API</h2>
        <h2 class="card_title_h3">MenuItem Attributes</h2>
        <el-table :data="menuItemTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">MenuItem Events</h2>
        <el-table :data="menuItemEventData" style="width: 100%">
            <el-table-column prop="name" label="事件名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="200" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">MenuItem Slots</h2>
        <el-table :data="menuItemSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>

        <h2 class="card_title_h2" style="margin-top: 2.6rem;">MenuItemGroup API</h2>
        <h2 class="card_title_h3">MenuItemGroup Attributes</h2>
        <el-table :data="menuItemGroupTableData" style="width: 100%">
            <el-table-column prop="name" label="属性名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
            <el-table-column prop="type" label="类型" min-width="150" />
            <el-table-column prop="default" label="Default" min-width="120" />
        </el-table>

        <h2 class="card_title_h3" style="margin-top: 2.6rem;">MenuItemGroup Slots</h2>
        <el-table :data="menuItemGroupSlotData" style="width: 100%">
            <el-table-column prop="name" label="插槽名" width="180" />
            <el-table-column prop="desc" label="说明" min-width="280" />
        </el-table>
    </card-body>
</template>

<script lang="tsx">
export default {
    name: 'ComponentMenu'
}
</script>

<script lang="tsx" setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const isCollapse = ref(false)

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

// 代码字符串
const codeHorizontal = `<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
<\/script>`

const codeVertical = `<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5>Default colors</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12">
      <h5>Custom colors</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <!-- Same structure as above -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
<\/script>`

const codeCollapse = `<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
<\/script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>`

// API 数据
const menuTableData: any[] = [
    { name: 'mode', desc: '菜单展示模式', type: "'horizontal' | 'vertical'", default: 'vertical' },
    { name: 'collapse', desc: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）', type: 'boolean', default: 'false' },
    { name: 'ellipsis', desc: '是否省略多余的子项（仅在横向模式生效）', type: 'boolean', default: 'true' },
    { name: 'ellipsis-icon', desc: '自定义省略图标 (仅在水平模式下生效)', type: 'string | Component', default: 'MoreFilled' },
    { name: 'popper-offset', desc: '弹出层的偏移量(对所有子菜单有效)', type: 'number', default: '6' },
    { name: 'background-color', desc: '菜单的背景颜色', type: 'string', default: '#ffffff' },
    { name: 'text-color', desc: '文字颜色', type: 'string', default: '#303133' },
    { name: 'active-text-color', desc: '活动菜单项的文本颜色', type: 'string', default: '#409eff' },
    { name: 'default-active', desc: '页面加载时默认激活菜单的 index', type: 'string', default: '—' },
    { name: 'default-openeds', desc: '默认打开的 sub-menu 的 index 的数组', type: 'string[]', default: '[]' },
    { name: 'unique-opened', desc: '是否只保持一个子菜单的展开', type: 'boolean', default: 'false' },
    { name: 'menu-trigger', desc: '子菜单打开的触发方式，只在 mode 为 horizontal 时有效', type: "'hover' | 'click'", default: 'hover' },
    { name: 'router', desc: '是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转', type: 'boolean', default: 'false' },
    { name: 'collapse-transition', desc: '是否开启折叠动画', type: 'boolean', default: 'true' },
    { name: 'popper-effect', desc: 'tooltip 主题，内置了 dark / light 两种主题', type: "'dark' | 'light'", default: 'dark' },
    { name: 'close-on-click-outside', desc: '是否在点击外部时关闭菜单', type: 'boolean', default: 'false' },
    { name: 'popper-class', desc: '自定义弹出层类名', type: 'string', default: '—' },
    { name: 'show-timeout', desc: '子菜单出现前的延迟', type: 'number', default: '300' },
    { name: 'hide-timeout', desc: '子菜单消失前的延迟', type: 'number', default: '300' },
]

const menuEventData: any[] = [
    { name: 'select', desc: '菜单激活回调', type: '(index: string, indexPath: string[], item: MenuItemClicked, routeResult?: Promise<void | NavigationFailure>) => void' },
    { name: 'open', desc: 'sub-menu 展开的回调', type: '(index: string, indexPath: string[]) => void' },
    { name: 'close', desc: 'sub-menu 收起的回调', type: '(index: string, indexPath: string[]) => void' },
]

const menuSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
]

const menuExposeData: any[] = [
    { name: 'open', desc: '展开指定的 sub-menu', type: '(index: string) => void' },
    { name: 'close', desc: '收起指定的 sub-menu', type: '(index: string) => void' },
]

const subMenuTableData: any[] = [
    { name: 'index', desc: '唯一标志', type: 'string', default: '—' },
    { name: 'popper-class', desc: '弹出菜单的自定义类名', type: 'string', default: '—' },
    { name: 'show-timeout', desc: '展开 sub-menu 的延时', type: 'number', default: '300' },
    { name: 'hide-timeout', desc: '收起 sub-menu 的延时', type: 'number', default: '300' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
    { name: 'teleported', desc: '是否将弹出菜单插入至 body 元素', type: 'boolean', default: 'true' },
    { name: 'popper-offset', desc: '弹出窗口偏移', type: 'number', default: '6' },
    { name: 'expand-close-icon', desc: '父菜单展开关闭图标', type: 'string | Component', default: '—' },
    { name: 'expand-open-icon', desc: '父菜单展开打开图标', type: 'string | Component', default: '—' },
    { name: 'collapse-close-icon', desc: '父菜单收起关闭图标', type: 'string | Component', default: '—' },
    { name: 'collapse-open-icon', desc: '父菜单收起打开图标', type: 'string | Component', default: '—' },
]

const subMenuSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'title', desc: '自定义标题内容' },
]

const menuItemTableData: any[] = [
    { name: 'index', desc: '唯一标志', type: 'string', default: '—' },
    { name: 'route', desc: 'Vue Router 路径对象', type: 'object', default: '—' },
    { name: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
]

const menuItemEventData: any[] = [
    { name: 'click', desc: '菜单点击回调', type: '(el: MenuItemRegistered) => void' },
]

const menuItemSlotData: any[] = [
    { name: 'default', desc: '自定义默认内容' },
    { name: 'title', desc: '自定义标题内容' },
]

const menuItemGroupTableData: any[] = [
    { name: 'title', desc: '组标题', type: 'string', default: '—' },
]

const menuItemGroupSlotData: any[] = [
    { name: 'default', desc: '默认插槽内容' },
    { name: 'title', desc: '自定义组标题内容' },
]
</script>

<style lang="scss" scoped>
@use '../style.scss' as *;

.demo-block {
    padding: 16px 0;
}

.el-menu-demo {
    margin-bottom: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.tac {
    text-align: center;
    
    h5 {
        font-size: 14px;
        color: #8492a6;
        margin-bottom: 20px;
    }
}
</style>
