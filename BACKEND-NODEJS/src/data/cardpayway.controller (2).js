const stripe = require("stripe");
require("dotenv").config();
const { BakongKHQR, khqrData, IndividualInfo } = require("bakong-khqr");
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const appUrl = "http://localhost:3000";

//handle Create KHQR payment
const generateKHQR = async (req, res) => {
  try {
    const { amount, currency, billNumber } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Amount is required and must be greater than 0",
      });
    }

    // ─── Configure your Bakong account info here ───
    // TODO: Replace with your real Bakong account ID (e.g., "yourname@wing", "yourname@abaa")
    const BAKONG_ACCOUNT_ID =
      process.env.BAKONG_ACCOUNT_ID || "khouch_phorn@bkrt";
    const ACCOUNT_NAME = process.env.ACCOUNT_NAME || "test";
    const MERCHANT_CITY = process.env.MERCHANT_CITY || "Phnom Penh";

    // Determine currency (default USD)
    const qrCurrency =
      currency === "KHR" ? khqrData.currency.khr : khqrData.currency.usd;

    const optionalData = {
      currency: qrCurrency,
      amount: parseFloat(amount),
      billNumber: billNumber || `INV-${Date.now()}`,
      mobileNumber: process.env.MERCHANT_PHONE || "",
      storeLabel: process.env.STORE_LABEL || "POS Store",
      terminalLabel: "POS-T1",
      expirationTimestamp: Date.now() + 5 * 60 * 1000, // expires in 5 minutes
    };

    // bakong-khqr v1.x signature: (bakongAccountID, merchantName, merchantCity, optional)
    // currency, amount and expirationTimestamp all live inside `optional`.
    // An amount is what makes the QR *dynamic* (trackable by MD5); without it
    // Bakong returns "System does not support static QR code" on check-payment.
    const individualInfo = new IndividualInfo(
      BAKONG_ACCOUNT_ID,
      ACCOUNT_NAME,
      MERCHANT_CITY,
      optionalData,
    );

    const khqr = new BakongKHQR();
    const response = khqr.generateIndividual(individualInfo);

    if (response && response.data) {
      // response.data.qr contains the EMV-compliant KHQR string
      // This string can be encoded into a QR code image for customers to scan
      // with any Bakong-supported banking app (ABA, Wing, ACLEDA, etc.)
      return res.status(200).json({
        success: true,
        data: {
          qr: response.data.qr, // The KHQR string to encode as QR image
          md5: response.data.md5, // MD5 hash for verification
          merchantName: ACCOUNT_NAME,
          currency: currency || "USD",
          amount: parseFloat(amount),
        },
        message: "KHQR generated successfully",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to generate KHQR",
    });
  } catch (error) {
    console.error("KHQR generation error:", error);
    //logError(res, { message: error.message || 'Unknown error' }, "khqrController");
  }
};
module.exports = { createCheckoutSession, PaymentSuccess, generateKHQR };
