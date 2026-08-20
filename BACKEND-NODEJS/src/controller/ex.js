const {
  BakongKHQR,
  khqrData,
  IndividualInfo,
  MerchantInfo,
  SourceInfo,
} = require("bakong-khqr");

const dotenv = require("dotenv");
dotenv.config();

const optionalData = {
  currency: khqrData.currency.khr,
  amount: 100,
  expirationTimestamp: Date.now() + 60 * 10000, // always need to be able to generate qrcode
  mobileNumber: process.env.MERCHANT_PHONE,
  languagePreference: "km",
  merchantNameAlternateLanguage: process.env.MERCHANT_NAME,
  merchantCity: process.env.MERCHANT_CITY,
};
const individualInfo = new IndividualInfo(
  process.env.BAKONG_ACCOUNT_ID,
  process.env.MERCHANT_NAME,
  process.env.MERCHANT_CITY,
  optionalData,
);
const KHQR = new BakongKHQR();
const individual = KHQR.generateIndividual(individualInfo);
console.log("qr: " + individual.data.qr);
// const SECRETE_INFO = {
//   BAKONG_ACCOUNT_ID: process.env.BAKONG_ACCOUNT_ID,
//   MERCHANT_ID: process.env.MERCHANT_ID,
//   MERCHANT_NAME: process.env.MERCHANT_NAME,
//   MERCHANT_CITY: process.env.MERCHANT_NAME,
// };

// const generateKHQR = async (req, res) => {};
