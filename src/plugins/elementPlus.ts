/**
 * Element Plus 配置插件
 * 确保在所有环境（开发、测试、生产）中语言配置一致
 */
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 创建自定义语言配置
function createCustomLocale() {
  // 使用 JSON 深拷贝确保完全独立的对象
  const customLocale = JSON.parse(JSON.stringify(zhCn))
  
  // 强制设置周一为一周的第一天
  if (customLocale.el && customLocale.el.datepicker) {
    customLocale.el.datepicker.firstDayOfWeek = 1
  }
  
  return customLocale
}

// 导出自定义语言配置供组件使用
export const zhCnCustom = createCustomLocale()

// Element Plus 安装插件
export function setupElementPlus(app: App) {
  app.use(ElementPlus, {
    locale: zhCnCustom
  })
}

export default {
  install(app: App) {
    setupElementPlus(app)
  }
}
