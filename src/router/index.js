import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PreviewPage from "../components/PreviewPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/preview",
    name: "preview.page",
    component: PreviewPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
