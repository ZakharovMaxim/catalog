import Vue from 'vue'
import Router from 'vue-router'
const MainPage = () => import('@/components/main-page')
const ProductPage = () => import('@/components/product-page')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/product/:id',
      component: ProductPage
    },
    {
      path: '/*',
      component: MainPage
    }
  ],
  mode: 'history'
})
