import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createTodo = asyncHandler(async (req, res) => {
  const { todoTask, description, isCompleted } = req.body;
  console.log("Resquested body", req.body);

  if (!todoTask) {
    throw new ApiError(400, "TodoTask is required");
  }

  const todo = await Todo.create({
    todoTask,
    description,
    isCompleted,
    user: req.user?._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo Created successfully"));
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;
  //   console.log(todoId);
  if (!todoId) {
    throw new ApiError(404, "todoId not found");
  }

  const todo = await Todo.findByIdAndDelete(todoId);

  if (!todo) {
    throw new ApiError(404, "Todo not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Todo deleted Successfully"));
});
const updateTodo = asyncHandler(async (req, res) => {
  const { todoTask, description, isCompleted } = req.body;
  const { todoId } = req.params;

  if (!todoId) {
    throw new ApiError(404, "todoId not found");
  }

  const todo = await Todo.findByIdAndUpdate(
    todoId,
    {
      $set: {
        todoTask,
        description,
        isCompleted,
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo Updated successfully"));
});
const getAllTodo = asyncHandler(async (req, res) => {
  // console.log("requested user", req.user._id);

  const todo = await Todo.find({ user: req.user._id });
  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todos fetched successfully"));
});

export { createTodo, deleteTodo, updateTodo, getAllTodo };
