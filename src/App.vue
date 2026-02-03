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
