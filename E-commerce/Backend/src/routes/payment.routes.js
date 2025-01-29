import {
  downloadReceipt,
  stripePayment,
} from "../controllers/stripePayment.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import Stripe from "stripe";

const router = Router();

router.route("/stripe-checkout-session").post(stripePayment);
router.route("/download-receipt").get(downloadReceipt);
export default router;
