import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Employees from "../views/Employees.vue";
import MainLayout from "../layouts/MainLayout.vue";
import Leaves from "../views/Leaves.vue";
import Tasks from "../views/Tasks.vue"

const routes = [
  { path: "/login", component: Login },

  {
    path: "/",
    component: MainLayout,
    meta:{requiresAuth:true},
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "employees", component: Employees },
      { path: "leaves", component: Leaves },
      { path: "tasks", component: Tasks },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if(to.meta.requiresAuth && !token) return next("/login");

  if(to.path==="/employees" && role==="employee")
    return next("/dashboard");

  next();
});

export default router;