<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";

const role = localStorage.getItem("role");
const leaves = ref([]);

const form = ref({
  fromDate:"",
  toDate:"",
  reason:"",
  file:null
});

const loadLeaves = async () => {
  const res = await api.get("/leaves").catch(()=>({data:[]}));
  leaves.value = res.data;
};

onMounted(loadLeaves);

const handleFile = (e) => {
  form.value.file = e.target.files[0];
};

const applyLeave = async () => {
  const fd = new FormData();
  fd.append("fromDate", form.value.fromDate);
  fd.append("toDate", form.value.toDate);
  fd.append("reason", form.value.reason);
  fd.append("file", form.value.file);

  await api.post("/leaves", fd);
  alert("Leave applied");
  loadLeaves();
};

const updateStatus = async (id,status)=>{
  await api.put("/leaves/"+id,{status});
  loadLeaves();
};
</script>

<template>
  <h3>Leave Management</h3>

  <!-- Employee Apply Leave -->
  <div v-if="role==='employee'" class="card p-3 mb-4">
    <h5>Apply Leave</h5>
    <input type="date" v-model="form.fromDate" class="form-control mb-2">
    <input type="date" v-model="form.toDate" class="form-control mb-2">
    <textarea v-model="form.reason" class="form-control mb-2" placeholder="Reason"></textarea>
    <input type="file" @change="handleFile" class="form-control mb-2">
    <button class="btn btn-primary" @click="applyLeave">Submit</button>
  </div>

  <!-- Leave Table -->
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>User</th>
        <th>From</th>
        <th>To</th>
        <th>Reason</th>
        <th>Status</th>
        <th v-if="role!=='employee'">Action</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="l in leaves" :key="l.id">
        <td>{{l.User?.name}}</td>
        <td>{{l.fromDate}}</td>
        <td>{{l.toDate}}</td>
        <td>{{l.reason}}</td>
        <td>
          <span class="badge bg-warning" v-if="l.status==='pending'">Pending</span>
          <span class="badge bg-success" v-if="l.status==='approved'">Approved</span>
          <span class="badge bg-danger" v-if="l.status==='rejected'">Rejected</span>
        </td>

        <td v-if="role!=='employee' && l.status==='pending'">
          <button class="btn btn-sm btn-success me-2" @click="updateStatus(l.id,'approved')">Approve</button>
          <button class="btn btn-sm btn-danger" @click="updateStatus(l.id,'rejected')">Reject</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>