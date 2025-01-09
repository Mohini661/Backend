import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRouter from "./routes/todo.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

export { app };
