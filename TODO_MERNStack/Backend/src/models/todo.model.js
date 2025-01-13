import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    todoTask: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false, 
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
