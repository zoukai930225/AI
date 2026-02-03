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

## 排查清单

如果仍然不生效，请检查：

1. **全局 ConfigProvider**：检查 `App.vue` 或其他父组件是否有 `<el-config-provider>` 覆盖了配置
2. **缓存问题**：清除 node_modules 并重新安装依赖，重启开发服务器
3. **Element Plus 版本**：确认版本是 2.12.0，不同版本可能有不同的配置方式
4. **检查控制台**：看是否有警告或错误信息

## 验证配置

在组件中添加以下代码验证配置是否正确：

```typescript
import zhCnCustom from '@/locale/zhCnCustom'

console.log('firstDayOfWeek:', zhCnCustom.el.datepicker.firstDayOfWeek)
// 应该输出: firstDayOfWeek: 1
```
