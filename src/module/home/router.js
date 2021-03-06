import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './view/Home.vue'
import articleDetail from './view/articleDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/describe/:arId',
    name: 'describe',
    component: articleDetail
  },
  {
    path: '/source',
    name: 'source',
    component: Home
  },
  {
    path: '/note',
    name: 'note',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
