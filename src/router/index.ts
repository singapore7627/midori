import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrashCalendarView from '../views/TrashCalendarView.vue'
import MealsView from '../views/MealsView.vue'

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
    path: '/meal-list',
    name: 'meal-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/meals',
    name: 'meals',
    component: MealsView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
