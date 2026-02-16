import api from "../api/axios"

// Get tasks (role based)
export const getTasks = () => api.get("/tasks")

// Create task (admin / superadmin)
export const createTask = (data) => api.post("/tasks", data)

// Update task status (employee)
export const updateTask = (id, data) => api.put(`/tasks/${id}`, data)