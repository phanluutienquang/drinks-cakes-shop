
import { Router } from "express";
import { makeUserController } from "./user.factory";

const router = Router();
const userController = makeUserController();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", userController.findAllUsers);

/**
 * @swagger
 * /users/email/{email}:
 *   get:
 *     summary: Get user by email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/email/:email", userController.findUserByEmail);

/**
 * @swagger
 * /users/id/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/id/:id", userController.findUserById);

router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;