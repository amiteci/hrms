const router=require("express").Router();
const {verifyToken}=require("../../middlewares/auth");
const ctrl=require("../../controllers/task.controller");

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
router.post("/",verifyToken,ctrl.createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
router.get("/",verifyToken,ctrl.getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 */
router.put("/:id",verifyToken,ctrl.updateTask);

module.exports=router;