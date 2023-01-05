import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "mainLayout",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title: "Home",
        },
        component: HomeView,
      },
      {
        path: ":id",
        name: "postDetails",
        meta: {
          title: "Post Details",
        },
        component: () => import("../views/PostDetailsView.vue"),
      },
      {
        path: "/map",
        name: "map",
        meta: {
          title: "Map",
        },
        component: () => import("../views/MapView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
