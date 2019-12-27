import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Index = () => import("@/pages/Index");
const User = () => import("@/pages/User");
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/user",
    name: "User",
    component: User
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
