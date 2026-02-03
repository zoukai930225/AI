import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

const app = createApp(App)

// 配置 Element Plus，设置中文语言环境
// 注意：zhCn 语言包默认将周一设为一周的第一天
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
