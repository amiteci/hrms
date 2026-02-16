const router=require("express").Router();
const ctrl=require("../../controllers/auth.controller");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: Admin User
 *               email: admin@test.com
 *               password: 123456
 *               role: admin
 *     responses:
 *       200:
 *         description: User created
 */
router.post("/register",ctrl.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example:
 *               email: superadmin@company.com
 *               password: 123456
 *     responses:
 *       200:
 *         description: JWT token
 */
router.post("/login",ctrl.login);

module.exports=router;