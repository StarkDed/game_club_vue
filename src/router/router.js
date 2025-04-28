import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AuthForm from "@/components/AuthForm.vue";
import Rates from "@/components/Rates.vue";

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
    path: "/rates",
    component: Rates,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
