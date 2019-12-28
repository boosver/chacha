import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Index = () => import("@/pages/Index");
const Search = () => import("@/pages/Search");
const User = () => import("@/pages/User");
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: '私查查'
    }
  },
  {
    path: "/w/serch",
    name: "Search",
    component: Search,
    meta: {
      title: '开始搜索'
    }
  },
  {
    path: "/w/user",
    name: "User",
    component: User,
    meta:{
      title: '个人中心'
  }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;
