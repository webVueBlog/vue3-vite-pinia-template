import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Example",
    component: () => import("@/modules/example/pages/Example.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/modules/example/pages/About.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 全局路由守卫的方法跟vue-router3一样
//路由全局前置守卫
router.beforeEach((to, from, next) => {
  console.log("路由全局前置守卫", to, from)
  next()
})
//路由全局后置守卫
router.afterEach((to, from) => {
  console.log("路由全局后置守卫", to, from)
})

export default router
