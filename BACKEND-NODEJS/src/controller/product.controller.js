const listProduct = require("../data/product");
function getProduct(res, res) {
  res.send({
    product: listProduct,
  });
}

module.exports = getProduct;
