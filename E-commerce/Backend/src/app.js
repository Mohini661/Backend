import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import { stripePayment } from "./controllers/stripePayment.controller.js";
// import paypal from "./controllers/paypal.controller.js"

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);
// app.get("api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID);
// });
app.use("/api/v1/payment", paymentRouter);
export { app };
