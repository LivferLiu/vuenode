import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/topic/:id",
    name: "About",
    component: () => import("@/views/Topic.vue")
  },
  {
    path: "/user/:loginname",
    name: "User",
    component: () => import("@/views/User.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
