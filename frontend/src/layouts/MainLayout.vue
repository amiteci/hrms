<script setup>
import { useAuthStore } from "../stores/auth";
const auth = useAuthStore();
</script>

<template>
<div class="d-flex">
  <div class="bg-dark text-white p-3 vh-100" style="width:250px">
    <h4>RMS</h4>
    <hr>
    <router-link to="/dashboard" class="text-white d-block mb-2">Dashboard</router-link>
    <router-link v-if="auth.role!='employee'" to="/employees" class="text-white d-block mb-2">Employees</router-link>
    <router-link to="/leaves" class="text-white d-block mb-2">Leaves</router-link>
    <router-link to="/tasks" class="text-white d-block mb-2">Tasks</router-link>
    <button class="btn btn-danger mt-3" @click="auth.logout()">Logout</button>
  </div>

  <div class="p-4 w-100">
    <router-view />
  </div>
</div>
</template>