import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/HelloWorld.vue"),
    },
    {
      path: "/weight",
      component: () => import("./views/ViewWeight.vue"),
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
