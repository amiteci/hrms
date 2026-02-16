const router=require("express").Router();
const {verifyToken}=require("../../middlewares/auth");
const {allowRoles}=require("../../middlewares/roles");
const ctrl=require("../../controllers/user.controller");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: SuperAdmin user management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/",verifyToken,allowRoles("superadmin"),ctrl.getUsers);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */
router.delete("/:id",verifyToken,allowRoles("superadmin"),ctrl.deleteUser);

module.exports=router;