<template>
  <div class="modal fade show d-block">
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <h5>Assign Task</h5>

        <input v-model="form.title" class="form-control mb-2" placeholder="Title">
        <textarea v-model="form.description" class="form-control mb-2" placeholder="Description"></textarea>

        <select v-model="form.UserId" class="form-control mb-3">
          <option disabled value="">Select Employee</option>
          <option v-for="u in users" :key="u.id" :value="u.id">
            {{u.name}}
          </option>
        </select>

        <button class="btn btn-success" @click="save">Assign</button>
        <button class="btn btn-secondary ms-2" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createTask } from "../services/taskService"
import api from "../api/axios"

export default {
  data(){
    return{
      users:[],
      form:{title:"",description:"",UserId:""}
    }
  },
  async mounted(){
    const res = await api.get("/users?role=employee")
    this.users = res.data
  },
  methods:{
    async save(){
      await createTask(this.form)
      this.$emit("saved")
      this.$emit("close")
    }
  }
}
</script>