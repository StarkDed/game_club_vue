import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AuthForm from "@/components/AuthForm.vue";
import Rants from "@/components/Rants.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/auth",
    component: AuthForm,
    props: (route) => ({ mode: route.query.mode || "login" }),
  },
  {
    path: "/rants",
    component: Rants,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
