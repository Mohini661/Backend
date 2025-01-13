import express from "express";
import cors from "cors";
import todoRouter from "./routes/todo.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

export { app };
