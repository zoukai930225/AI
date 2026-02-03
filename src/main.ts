import { createApp } from 'vue'
import { setupElementPlus } from './plugins/elementPlus'
import App from './App.vue'

const app = createApp(App)

// 使用 Element Plus 配置插件（包含自定义语言配置）
setupElementPlus(app)

app.mount('#app')
