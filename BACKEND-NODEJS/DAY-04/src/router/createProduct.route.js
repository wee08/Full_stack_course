const createProduct = require("../controller/createProduct.controller");
const createProductRoute = (app) => {
  app.get("/v1/api/product/create", createProduct);
};
module.exports = createProductRoute;
