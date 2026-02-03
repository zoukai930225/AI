import { createApp } from 'vue'
// 注意：使用 unplugin-element-plus 按需导入时，不需要全局 app.use(ElementPlus)
// 语言配置需要在 App.vue 中通过 ElConfigProvider 设置
import App from './App.vue'

const app = createApp(App)

// 其他插件配置...
// app.use(router)
// app.use(pinia)

app.mount('#app')
