# TimeFilter 组件

## dayjs 周一为一周第一天的修复

### 问题描述

在使用 `dayjs.locale('zh-cn')` 设置中文语言环境后，`startOf('week')` 和 `endOf('week')` 方法仍然以周日作为一周的第一天，而不是周一。

### 解决方案

需要使用 `isoWeek` 插件和 `updateLocale` 插件来正确设置周一为一周的第一天：

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

### 关键修改

在 `buildBackValue` 函数中，将 `startOf('week')` 和 `endOf('week')` 改为使用 `isoWeek` 插件的方法：

```typescript
case '周':
  // 使用 isoWeek 插件确保周一为一周的第一天
  dateBackValue.value = [
    dayjs(dateValue.value).startOf('isoWeek').format(props.defaultFormat),
    dayjs(dateValue.value).endOf('isoWeek').format(props.defaultFormat)
  ]
  break
```

### 为什么 `dayjs.locale('zh-cn')` 不够？

`dayjs.locale('zh-cn')` 只是设置了语言环境（如月份名称、星期名称等），但 `startOf('week')` 和 `endOf('week')` 方法默认使用的是周日作为一周的开始。

要正确设置周一为一周的第一天，有两种方法：

1. **使用 `isoWeek` 插件**（推荐）：ISO 标准定义周一为一周的第一天
   - 使用 `startOf('isoWeek')` 和 `endOf('isoWeek')`

2. **使用 `updateLocale` 插件**：
   - 调用 `dayjs.updateLocale('zh-cn', { weekStart: 1 })`
   - 然后可以继续使用 `startOf('week')` 和 `endOf('week')`

### Element Plus 日期选择器

Element Plus 的日期选择器已经通过 `:first-day-of-week="1"` 属性正确设置了周一为一周的第一天：

```vue
<el-date-picker 
  :first-day-of-week="1"
  ...
/>
```

这个设置与 dayjs 的配置是独立的，Element Plus 会正确处理日历显示。
