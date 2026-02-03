# TimeFilter 组件

## 问题描述

1. **dayjs 问题**：使用 `dayjs.locale('zh-cn')` 设置中文语言环境后，`startOf('week')` 和 `endOf('week')` 方法仍然以周日作为一周的第一天。

2. **Element Plus 日期选择器问题**：日历显示周日（日）在第一列，而不是周一（一）。

## 解决方案

### 1. dayjs 配置

需要使用 `isoWeek` 插件来正确计算周的开始和结束：

```typescript
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import isoWeek from 'dayjs/plugin/isoWeek'
import updateLocale from 'dayjs/plugin/updateLocale'

// 扩展 dayjs 插件
dayjs.extend(isoWeek)
dayjs.extend(updateLocale)

// 设置中文语言环境
dayjs.locale('zh-cn')

// 更新语言环境配置，确保周一为一周的第一天
dayjs.updateLocale('zh-cn', {
  weekStart: 1 // 周一为一周的第一天
})
```

在计算周的范围时，使用 `isoWeek`：

```typescript
case '周':
  // 使用 isoWeek 插件确保周一为一周的第一天
  dateBackValue.value = [
    dayjs(dateValue.value).startOf('isoWeek').format(props.defaultFormat),
    dayjs(dateValue.value).endOf('isoWeek').format(props.defaultFormat)
  ]
  break
```

### 2. Element Plus 日期选择器配置

**方法一：使用 `el-config-provider` 包裹组件（推荐）**

```vue
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-date-picker
      v-model="dateValue"
      type="daterange"
    />
  </el-config-provider>
</template>
```

**方法二：在 main.ts 全局配置**

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

const app = createApp(App)

// 配置 Element Plus，设置中文语言环境
// zhCn 语言包默认将周一设为一周的第一天
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
```

### 为什么 `:first-day-of-week="1"` 不生效？

在 Element Plus 2.x 版本中，`:first-day-of-week` 属性可能不会正确生效，因为：

1. 需要正确配置语言环境（locale）
2. 中文语言包 `zh-cn` 已经内置了周一为一周第一天的配置
3. 使用 `el-config-provider` 或全局配置语言环境是更可靠的方法

### 完整示例

组件中使用 `el-config-provider` 包裹日期选择器：

```vue
<template>
  <el-config-provider :locale="zhCn">
    <el-date-picker
      ref="dateRef"
      v-model="dateValue"
      :type="componentType"
      :value-format="format"
    />
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
```

这样日历就会显示：**一 二 三 四 五 六 日**（周一在第一列）
