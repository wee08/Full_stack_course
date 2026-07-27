const listProduct = require("../data/product");
const connection = require("../config/config");
function getProduct(res, res) {
  res.send({
    product: listProduct,
  });
}

module.exports = getProduct;
