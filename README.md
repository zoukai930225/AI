# TimeFilter 组件

## 问题描述

1. **dayjs 问题**：使用 `dayjs.locale('zh-cn')` 设置中文语言环境后，`startOf('week')` 和 `endOf('week')` 方法仍然以周日作为一周的第一天。

2. **Element Plus 日期选择器问题**：日历显示周日（日）在第一列，而不是周一（一）。

## 解决方案

### 1. 创建自定义语言配置文件

创建 `src/locale/zhCnCustom.ts`：

```typescript
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const zhCnCustom = {
  name: 'zh-cn',
  ...zhCn,
  el: {
    ...zhCn.el,
    datepicker: {
      ...zhCn.el.datepicker,
      // 设置周一为一周的第一天 (1 = 周一, 7 = 周日)
      firstDayOfWeek: 1,
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      }
    }
  }
}

export default zhCnCustom
```

### 2. 在 main.ts 全局配置（重要！）

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCnCustom from './locale/zhCnCustom'
import App from './App.vue'

const app = createApp(App)

// 使用自定义语言配置
app.use(ElementPlus, {
  locale: zhCnCustom
})

app.mount('#app')
```

### 3. 组件中使用 el-config-provider（可选，双重保险）

```vue
<template>
  <el-config-provider :locale="zhCnCustom">
    <el-date-picker
      v-model="dateValue"
      type="daterange"
      :first-day-of-week="1"
    />
  </el-config-provider>
</template>

<script setup>
import zhCnCustom from '@/locale/zhCnCustom'
</script>
```

### 4. dayjs 配置

```typescript
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import isoWeek from 'dayjs/plugin/isoWeek'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(isoWeek)
dayjs.extend(updateLocale)
dayjs.locale('zh-cn')
dayjs.updateLocale('zh-cn', {
  weekStart: 1
})

// 计算周范围时使用 isoWeek
const weekStart = dayjs(date).startOf('isoWeek').format('YYYY-MM-DD')
const weekEnd = dayjs(date).endOf('isoWeek').format('YYYY-MM-DD')
```

## 环境差异问题排查

如果测试环境正常，但本地开发和生产环境失效：

### 可能原因

1. **Vite HMR（热更新）问题**：开发模式下，热更新可能导致语言配置被重置
2. **模块加载顺序**：不同构建模式下，模块加载顺序可能不同
3. **代码分割**：生产环境的代码分割可能影响配置加载时机

### 解决方案

#### 1. 使用插件模式确保配置一致

创建 `src/plugins/elementPlus.ts`：

```typescript
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

function createCustomLocale() {
  // 使用 JSON 深拷贝确保完全独立的对象
  const customLocale = JSON.parse(JSON.stringify(zhCn))
  customLocale.el.datepicker.firstDayOfWeek = 1
  return customLocale
}

export const zhCnCustom = createCustomLocale()

export function setupElementPlus(app: App) {
  app.use(ElementPlus, {
    locale: zhCnCustom
  })
}
```

在 `main.ts` 中使用：

```typescript
import { createApp } from 'vue'
import { setupElementPlus } from './plugins/elementPlus'
import App from './App.vue'

const app = createApp(App)
setupElementPlus(app)
app.mount('#app')
```

#### 2. 检查 App.vue 中是否有全局 ConfigProvider

如果 `App.vue` 中有 `<el-config-provider>`，需要同样设置 locale：

```vue
<template>
  <el-config-provider :locale="zhCnCustom">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { zhCnCustom } from '@/plugins/elementPlus'
</script>
```

#### 3. 检查 Vite 配置

确保 `vite.config.ts` 中没有影响模块加载的特殊配置：

```typescript
export default defineConfig({
  // 确保 element-plus 不被外部化
  build: {
    rollupOptions: {
      // 不要将 element-plus 放入 external
    }
  }
})
```

#### 4. 清除所有缓存

```bash
# 清除 node_modules
rm -rf node_modules
rm -rf node_modules/.vite

# 清除 pnpm/npm 缓存
pnpm store prune  # 或 npm cache clean --force

# 重新安装
pnpm install  # 或 npm install

# 重启开发服务器
pnpm dev
```

## 验证配置

组件会在开发模式下自动输出配置信息到控制台：

```
[TimeFilter] Element Plus locale firstDayOfWeek: 1
```

如果输出的值不是 `1`，说明配置没有正确加载。

## 终极解决方案

如果以上方法都不生效，可以在组件挂载时强制设置：

```typescript
import { onMounted } from 'vue'

onMounted(() => {
  // 强制修改 Element Plus 内部配置
  const configProvider = document.querySelector('.el-config-provider')
  if (configProvider) {
    // 触发重新渲染
  }
})
```
