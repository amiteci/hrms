const router=require("express").Router();
const {verifyToken}=require("../../middlewares/auth");
const {allowRoles}=require("../../middlewares/roles");
const upload=require("../../middlewares/upload");
const ctrl=require("../../controllers/leave.controller");

/**
 * @swagger
 * tags:
 *   name: Leaves
 *   description: Leave management
 */

/**
 * @swagger
 * /leaves:
 *   post:
 *     summary: Apply leave (Employee)
 *     tags: [Leaves]
 *     security:
 *       - bearerAuth: []
 */
router.post("/",verifyToken,allowRoles("employee"),upload.single("file"),ctrl.applyLeave);

/**
 * @swagger
 * /leaves:
 *   get:
 *     summary: Get all leaves (Admin)
 *     tags: [Leaves]
 *     security:
 *       - bearerAuth: []
 */
router.get("/",verifyToken,allowRoles("admin","superadmin","employee"),ctrl.getLeaves);

/**
 * @swagger
 * /leaves/{id}:
 *   put:
 *     summary: Approve/Reject leave (Admin)
 *     tags: [Leaves]
 *     security:
 *       - bearerAuth: []
 */
router.put("/:id",verifyToken,allowRoles("admin"),ctrl.updateLeaveStatus);

module.exports=router;