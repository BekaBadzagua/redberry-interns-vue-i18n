import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdvancedExamplesView from "@/views/AdvancedExamplesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/advanced",
      name: "advanced",
      component: AdvancedExamplesView,
    },
  ],
});

export default router;
