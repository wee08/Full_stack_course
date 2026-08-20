const {createCheckoutSession ,PaymentSuccess ,generateKHQR} = require('../controller/cardpayway.controller');
const cardpaywayRoute = (app) => {
  app.post('/api/v1/cardpayway/createCheckoutSession', createCheckoutSession);
  
  app.get('/api/v1/cardpayway/Success', PaymentSuccess);


  //KHQR Route 
  app.post('/api/v1/cardpayway/generate' , generateKHQR);   
};


module.exports = cardpaywayRoute;