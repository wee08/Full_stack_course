const {
  createCheckoutSession,
  paymentSuccess,
} = require("../controller/cardpayway.controller");
const cardpaywayRoute = (app) => {
  app.post("/api/v1/cardpayway/createCheckoutSession", createCheckoutSession);
  app.get("/api/v1/cardpayway/success", paymentSuccess);
};
module.exports = cardpaywayRoute;
