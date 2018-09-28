import Vue from 'vue'
import Router from 'vue-router'
const MainPage = () => import('@/components/main-page')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    }
  ],
  mode: 'history'
})
