// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Adoptions from "../views/adoptions.vue";
import Home from "../views/home.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/adoptions",
    name: "Adoptions",
    component: Adoptions,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
