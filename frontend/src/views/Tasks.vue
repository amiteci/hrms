<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between mb-3">
      <h3>Tasks Management</h3>

      <button v-if="isAdmin" class="btn btn-primary" @click="showModal=true">
        Assign Task
      </button>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th v-if="isAdmin">Action</th>
          <th v-if="!isAdmin">Update</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="t in tasks" :key="t.id">
          <td>{{t.title}}</td>
          <td>{{t.description}}</td>
          <td>{{t.User?.name}}</td>
          <td>
            <span class="badge bg-warning" v-if="t.status=='pending'">Pending</span>
            <span class="badge bg-info" v-if="t.status=='in-progress'">In Progress</span>
            <span class="badge bg-success" v-if="t.status=='completed'">Completed</span>
          </td>

          <td v-if="isAdmin">
            <button class="btn btn-sm btn-success" @click="editTask(t)">
              Update Status
            </button>
          </td>

          <td v-if="!isAdmin">
            <button class="btn btn-sm btn-primary" @click="editTask(t)">
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Assign Modal -->
    <TaskModal v-if="showModal" @close="showModal=false" @saved="loadTasks"/>
    <TaskStatusModal v-if="showStatusModal" :task="selectedTask" @close="showStatusModal=false" @saved="loadTasks"/>
  </div>
</template>

<script>
import {getTasks} from "../services/taskService"
import TaskModal from "../components/TaskModal.vue"
import TaskStatusModal from "../components/TaskStatusModal.vue"

export default {
  components:{TaskModal,TaskStatusModal},
  data(){
    return{
      tasks:[],
      showModal:false,
      showStatusModal:false,
      selectedTask:null,
      role:localStorage.getItem("role")
    }
  },
  computed:{
    isAdmin(){
      return this.role === "admin" || this.role === "superadmin"
    }
  },
  mounted(){ this.loadTasks() },
  methods:{
    async loadTasks(){
      const res = await getTasks()
      this.tasks = res.data
    },
    editTask(task){
      this.selectedTask = task
      this.showStatusModal = true
    }
  }
}
</script>