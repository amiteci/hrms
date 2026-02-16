<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";

const users = ref([]);
const showModal = ref(false);
const editMode = ref(false);

const form = ref({
  id:null,
  name:"",
  email:"",
  password:"",
  role:"employee"
});

const loadUsers = async () => {
  const res = await api.get("/users");
  users.value = res.data;
};

onMounted(loadUsers);

const openCreate = ()=>{
  editMode.value=false;
  form.value={name:"",email:"",password:"",role:"employee"};
  showModal.value=true;
};

const openEdit = (u)=>{
  editMode.value=true;
  form.value={...u,password:""};
  showModal.value=true;
};

const saveUser = async ()=>{
  if(editMode.value){
    await api.post("/auth/register", form.value);
  }else{
    await api.post("/auth/register", form.value);
  }
  showModal.value=false;
  loadUsers();
};

const deleteUser = async(id)=>{
  if(confirm("Delete user?")){
    await api.delete("/users/"+id);
    loadUsers();
  }
};
</script>

<template>
  <div class="d-flex justify-content-between mb-3">
    <h3>Employees</h3>
    <button class="btn btn-primary" @click="openCreate">Add Employee</button>
  </div>

  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th width="150">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u.id">
        <td>{{u.name}}</td>
        <td>{{u.email}}</td>
        <td>{{u.role}}</td>
        <td>
          <button class="btn btn-sm btn-warning me-2" @click="openEdit(u)">Edit</button>
          <button class="btn btn-sm btn-danger" @click="deleteUser(u.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
  <div v-if="showModal" class="modal d-block bg-dark bg-opacity-50">
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <h5>{{editMode?'Edit':'Create'}} Employee</h5>

        <input v-model="form.name" class="form-control mb-2" placeholder="Name">
        <input v-model="form.email" class="form-control mb-2" placeholder="Email">
        <input v-model="form.password" type="password" class="form-control mb-2" placeholder="Password">

        <select v-model="form.role" class="form-control mb-2">
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>

        <button class="btn btn-success w-100" @click="saveUser">Save</button>
        <button class="btn btn-secondary w-100 mt-2" @click="showModal=false">Cancel</button>
      </div>
    </div>
  </div>

</template>