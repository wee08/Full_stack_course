const updateProduct = require("../controller/updateProduct.controller");

const updateProductRoute = (app) => {
  app.get("/v1/api/product/update", updateProduct);
};

module.exports = updateProductRoute;
