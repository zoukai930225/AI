/**
 * 自定义中文语言配置
 * 强制设置周一为一周的第一天
 */
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 深度克隆并修改语言配置
const zhCnCustom = {
  name: 'zh-cn',
  ...zhCn,
  el: {
    ...zhCn.el,
    datepicker: {
      ...zhCn.el.datepicker,
      // 设置周一为一周的第一天 (1 = 周一, 7 = 周日)
      firstDayOfWeek: 1,
      // 确保星期名称正确
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
