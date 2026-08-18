const {createCheckoutSession ,PaymentSuccess} = require('../controller/cardpayway.controller');
const cardpaywayRoute = (app) => {
  app.post('/api/v1/cardpayway/createCheckoutSession', createCheckoutSession);
  
  app.get('/api/v1/cardpayway/Success', PaymentSuccess);
};


module.exports = cardpaywayRoute;