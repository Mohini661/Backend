import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.route("/create-todo").post(createTodo);
router.route("/:todoId").delete(deleteTodo).put(updateTodo);
router.route("/all-todos").get(getAllTodo);

export default router;
