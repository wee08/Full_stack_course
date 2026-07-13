const deletProduct = require("../controller/deleteProduct.controller");
const deleteProductRoute = (app) => {
  app.get("/v1/api/product/delete", deletProduct);
};
module.exports = deleteProductRoute;
