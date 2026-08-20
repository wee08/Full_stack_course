const {
  createCheckoutSession,
  paymentSuccess,
  generateKHQR,
} = require("../controller/cardpayway.controller");
const cardpaywayRoute = (app) => {
  app.post("/api/v1/cardpayway/createCheckoutSession", createCheckoutSession);
  app.get("/api/v1/cardpayway/success", paymentSuccess);

  // khqr
  app.post("/api/khqr/generate", generateKHQR);
};
module.exports = cardpaywayRoute;
