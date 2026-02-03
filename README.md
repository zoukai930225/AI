# TimeFilter 组件

## 问题描述

1. **dayjs 问题**：使用 `dayjs.locale('zh-cn')` 设置中文语言环境后，`startOf('week')` 和 `endOf('week')` 方法仍然以周日作为一周的第一天。

2. **Element Plus 日期选择器问题**：日历显示周日（日）在第一列，而不是周一（一）。

## 重要：使用 unplugin-element-plus 按需导入时的配置

如果您使用 `unplugin-element-plus` 和 `unplugin-vue-components` 按需导入组件：

```typescript
// vite.config.ts
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
```

**`app.use(ElementPlus, { locale })` 全局配置不会生效！**

必须在 `App.vue` 中使用 `ElConfigProvider` 包裹整个应用。

## 解决方案

### 1. 修改 App.vue（关键！）

```vue
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 创建自定义语言配置，强制设置周一为第一天
const customLocale = {
  ...zhCn,
  el: {
    ...zhCn.el,
    datepicker: {
      ...zhCn.el.datepicker,
      firstDayOfWeek: 1
    }
  }
}
</script>

<template>
  <ElConfigProvider :locale="customLocale">
    <router-view />
  </ElConfigProvider>
</template>
```

### 2. dayjs 配置

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

## 为什么 unplugin 按需导入时全局配置不生效？

使用 `unplugin-element-plus` 和 `ElementPlusResolver` 时：

1. 组件是按需自动导入的，不经过 `app.use(ElementPlus)` 
2. 每个组件独立加载，不会读取全局配置
3. 只有 `ElConfigProvider` 能为子组件提供配置

## 验证配置

修改 `App.vue` 后，打开浏览器控制台：

```javascript
// 检查日历是否显示周一在第一列
// 日历头应该是：一 二 三 四 五 六 日
```

## 常见问题

### Q: 已有 ElConfigProvider 但没设置 locale

检查您现有的 `App.vue`，可能已经有 `ElConfigProvider` 但没有设置 `locale` 属性。

### Q: 多层 ElConfigProvider

如果有多层 `ElConfigProvider`，确保最外层设置了正确的 locale。

### Q: 缓存问题

```bash
rm -rf node_modules/.vite
pnpm dev  # 或 npm run dev
```
