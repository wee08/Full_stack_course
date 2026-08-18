const {
  createCheckoutSession,
  PaymentSuccess,
} = require("../controller/cardpayway.controller");
const cardpaywayRoute = (app) => {
  app.post("/api/v1/cardpayway/createCheckoutSession", createCheckoutSession);
  app.post("/api/v1/cardpayway/success", PaymentSuccess);
};
module.exports = cardpaywayRoute;
