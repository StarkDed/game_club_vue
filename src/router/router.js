import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
