// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Adoptions from "../views/adoptions.vue";
import Adoptions_SnoopTagada from "../views/adoptions/snoop-tagada.vue";
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
    path: "/adoptions/snoop-tagada",
    name: "Adoption de Snoop & Tagada",
    component: Adoptions_SnoopTagada,
    meta: {
      title: "Adoption chez Les Petits Clochards : Notre duo Snoop & Tagada",
    },
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

// Navigation guard to handle title changes
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Les Petits Clochards 91 - En construction"; // Fallback title if none specified
  next();
});

export default router;
