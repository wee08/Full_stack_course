const getAllProduct = require("../controller/getAllProduct.controller");

const getAllProductRoute = (app) => {
  app.get("/v1/api/product/list", getAllProduct);
};

module.exports = getAllProductRoute;
