import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.route("/create-todo").post(verifyJWT, createTodo);
router
  .route("/:todoId")
  .delete(verifyJWT, deleteTodo)
  .put(verifyJWT, updateTodo);
router.route("/all-todos").get(verifyJWT, getAllTodo);

export default router;
