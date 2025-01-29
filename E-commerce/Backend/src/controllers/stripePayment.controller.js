import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Stripe } from "stripe";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const stripePayment = asyncHandler(async (req, res) => {
  const { totalAmount } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // Replace with your desired currency (e.g., "usd")
            product_data: {
              name: "Total Payment", // Description for the payment
            },
            unit_amount: totalAmount * 100, // Convert dollars to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success-payment",
      cancel_url: "http://localhost:3000/cancel-payment",
    });
    res.json({ url: session.url }); // Send back the session URL to redirect the user
  } catch (error) {
    res.status(500).json(new ApiError(500, "error creating session checkout"));
  }
});

const transactionDetails = {
  amount: 100.0,
  transactionId: "TX123456789",
  paymentMethod: "Stripe",
  date: new Date().toLocaleString(),
};

const downloadReceipt = asyncHandler(async (transactionDetails, res) => {
  const doc = new PDFDocument();

  // Set the filename and Content-Disposition header to prompt download
  const fileName = `receipt_${transactionDetails.transactionId}.pdf`;
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  res.setHeader("Content-Type", "application/pdf");

  // Pipe the PDF document to the response
  doc.pipe(res);

  // Add content to the PDF
  doc.fontSize(16).text("Payment Receipt", { align: "center" }).moveDown();

  doc.fontSize(12).text(`Transaction ID: ${transactionDetails.transactionId}`);
  doc.text(`Amount Paid: $${transactionDetails.amount}`);
  doc.text(`Payment Method: ${transactionDetails.paymentMethod}`);
  doc.text(`Date: ${transactionDetails.date}`);

  doc
    .moveDown()
    .fontSize(10)
    .text("Thank you for your payment!", { align: "center" });

  // Finalize the PDF document
  doc.end();

  return res.json({ doc });
});

export { stripePayment, downloadReceipt };
