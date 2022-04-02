import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginBakerView from '../views/LoginBakerView.vue'
import BakerView from '../views/BakerView.vue'
import OrderView from '../views/OrderView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginBakerView
  },
  {
    path: '/baker',
    name: 'baker',
    component: BakerView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
