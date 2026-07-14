const products = require("../data/product");
const getAllProduct = (req, res) => {
  res.send({
    product: products,
  });
};

module.exports = getAllProduct;
