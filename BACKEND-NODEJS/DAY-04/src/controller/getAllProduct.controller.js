const products = require("../data/product");
const getAllProduct = (req, res) => {
  res.send({
    products,
  });
};

module.exports = getAllProduct;
