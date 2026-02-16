<script setup>
import { onMounted, ref } from "vue";
import api from "../api/axios";

const stats = ref({ users:0, leaves:0, tasks:0 });

onMounted(async()=>{
  const users = await api.get("/users").catch(()=>({data:[]}));
  const leaves = await api.get("/leaves").catch(()=>({data:[]}));
  const tasks = await api.get("/tasks").catch(()=>({data:[]}));

  stats.value = {
    users: users.data.length || 0,
    leaves: leaves.data.length || 0,
    tasks: tasks.data.length || 0
  }
});
</script>

<template>
  <h2>Dashboard</h2>
  <div class="row mt-4">
    <div class="col-md-4">
      <div class="card p-3">Employees: {{stats.users}}</div>
    </div>
    <div class="col-md-4">
      <div class="card p-3">Leaves: {{stats.leaves}}</div>
    </div>
    <div class="col-md-4">
      <div class="card p-3">Tasks: {{stats.tasks}}</div>
    </div>
  </div>
</template>