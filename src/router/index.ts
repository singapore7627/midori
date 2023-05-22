import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrashCalendarView from '../views/TrashCalendarView.vue'
import MealView from '../views/MealView.vue'

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
    // TODO 変更 レストラン一覧⇒個別ページを配下に作る + ランダムなURLを発行してランダムに遷移させる 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/meal/:id',
    name: 'meal',
    component: MealView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
