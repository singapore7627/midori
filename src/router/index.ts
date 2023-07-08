import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrashCalendarView from '../views/TrashCalendarView.vue'
import MealsView from '../views/MealsView.vue'
import AdminTrashView from '../views/admin/TrashView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/trash',
    name: 'trash',
    component: TrashCalendarView,
  },
  {
    path: '/meals',
    name: 'meals',
    component: MealsView,
  },
  {
    path: '/admin/trash',
    name: 'admin/trash',
    component: AdminTrashView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
