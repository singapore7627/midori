import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrashCalendar from '../views/TrashCalendar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'みどり市ポータル',
      desc: 'みどり市のポータルサイトです。市民に役立つ情報を発信します。'
    }
  },
  {
    path: '/trash',
    name: 'trash',
    component: TrashCalendar,
    meta: {
      title: 'みどり市ポータル|ごみカレンダー',
      desc: '笠懸町のごみカレンダーです。'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
