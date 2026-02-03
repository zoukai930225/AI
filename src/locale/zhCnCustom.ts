/**
 * 自定义中文语言配置
 * 强制设置周一为一周的第一天
 * 
 * 注意：这个配置需要在 Element Plus 初始化之前加载
 */
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 深度克隆语言配置，避免修改原始对象
const zhCnCustom = JSON.parse(JSON.stringify(zhCn))

// 强制设置周一为一周的第一天
zhCnCustom.el.datepicker.firstDayOfWeek = 1

// 冻结对象，防止被其他代码修改
Object.freeze(zhCnCustom.el.datepicker)

export default zhCnCustom
