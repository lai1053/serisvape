import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/index.js';
import App from './App.vue';

// Initialize AOS animations on mount
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');

// Kick off AOS after app has been mounted
router.isReady().then(() => {
  AOS.init({ duration: 800, easing: 'ease-out-cubic', offset: 50 });
});