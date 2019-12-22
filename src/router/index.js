import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path:"/home/create",
    name:"news-create",
    component: () => import('../views/NewsCreate')
  },
  {
    path: "/acticle/:id",
    name: "acticle-Show",
    component: () => import('../views/acticleShow')
  },
  {
    path: "/acticle/:id/edit",
    name: "article-edit",
    component: () => import('../views/ArticleEdit')
  },
  {
    path:"/MHome",
    name:"m-home",
    component: () => import('../views/MNews/MHome')
  },
  {
    path:"/MHome/MShow/:id",
    name:"m-show",
    component: () => import('../views/MNews/MShow')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
