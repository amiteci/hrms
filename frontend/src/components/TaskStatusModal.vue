<template>
  <div class="modal fade show d-block">
    <div class="modal-dialog">
      <div class="modal-content p-3">
        <h5>Update Task Status</h5>

        <select v-model="status" class="form-control mb-3">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button class="btn btn-success" @click="save">Save</button>
        <button class="btn btn-secondary ms-2" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { updateTask } from "../services/taskService"

export default {
  props:["task"],
  data(){
    return{status:this.task.status}
  },
  methods:{
    async save(){
      await updateTask(this.task.id,{status:this.status})
      this.$emit("saved")
      this.$emit("close")
    }
  }
}
</script>