import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: () => import('@/view/ProductDetail.vue'),
      props: true
    },
    {
      path: '/product-all/:series/:file',
      name: 'ProductDetailAll',
      component: () => import('@/view/ProductDetailAll.vue'),
      props: true
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: () => import('@/view/NewsDetail.vue'),
      props: true
    },
    {
      path: '/certificates',
      name: 'Certificates',
      component: () => import('@/view/Certificates.vue')
    }
  ],
})

export default router
