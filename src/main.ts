import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 使用自定义中文语言配置（强制周一为第一天）
import zhCnCustom from './locale/zhCnCustom'
import App from './App.vue'

const app = createApp(App)

// 配置 Element Plus，设置自定义中文语言环境
app.use(ElementPlus, {
  locale: zhCnCustom
})

app.mount('#app')
