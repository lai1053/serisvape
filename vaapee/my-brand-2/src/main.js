import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)

// 初始化动画
AOS.init({
    duration: 800, // 动画持续时间 800ms
    offset: 100,   // 滚动多少距离触发
    easing: 'ease-out-cubic', // 缓动效果
    once: true     // 只播放一次，往回滚不重复播放
})
app.use(router)
app.use(i18n)

app.mount('#app')
