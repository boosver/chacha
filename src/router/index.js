import Vue from "vue";
import VueRouter from "vue-router";
import Axios from 'axios'
Vue.use(VueRouter);
const Index = () => import("@/pages/Index");
const Search = () => import("@/pages/Search");
const User = () => import("@/pages/User");
const Pay = () => import("@/pages/Pay");
const Callback = () => import("@/pages/Callback");
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
    path: "/serch",
    name: "Search",
    component: Search,
    meta: {
      title: '开始搜索'
    }
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    meta: {
      title: '服务购买'
    }
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback,
    meta: {
      title: '请稍后...'
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
  console.log()
  if (to.path != '/callback') {
    Axios
      .post("/api/index", {})
      .then(r => {
        if(r.data.code == 0){
          window.location.href = r.data.url
        }
        

      })
      .catch(error => {

       });
  }

  next()
})
export default router;
