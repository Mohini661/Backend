import { isAdmin, verifyJWT } from "../middlewares/auth.middleware.js";

import {
  addToCart,
  getCartById,
  removeFromCart,
} from "../controllers/cart.controller.js";
import { Router } from "express";

const router = Router();

//secure routes

router.route("/add/:productId").post(verifyJWT, addToCart);
router.route("/increase/:productId").patch(verifyJWT, addToCart);
router.route("/decrease/:productId").patch(verifyJWT, addToCart);
router.route("/remove/:productId").delete(verifyJWT, removeFromCart);
router.route("/get/").get(verifyJWT, getCartById);

export default router;
