const getProductById = require("../controller/getProductById.controller");
const getProductByIdRoute = (app) => {
  app.get("/v1/api/product", getProductById);
};

module.exports = getProductByIdRoute;
