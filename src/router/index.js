import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/user",
    component: () => import("@/views/UserPage.vue"),
  },
  {
    path: "/post",
    component: () => import("@/views/PostPage.vue"),
  },
  {
    path: "/post/:id",
    component: () => import("@/views/PostPageId.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
