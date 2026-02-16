<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const email = ref("");
const password = ref("");

const login = () => {
  auth.login({ email: email.value, password: password.value });
};
</script>

<template>
<div class="container mt-5" style="max-width:400px">
  <h3 class="mb-3">Login</h3>

  <input v-model="email" class="form-control mb-2" placeholder="Email">
  <input v-model="password" type="password" class="form-control mb-2" placeholder="Password">

  <button class="btn btn-primary w-100" @click="login">Login</button>
</div>
</template>