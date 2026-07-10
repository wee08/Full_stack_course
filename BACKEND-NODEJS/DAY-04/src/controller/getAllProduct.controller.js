const productList = require("../data/product");

const getAllProduct = (req, res) => {
  res.send({
    product: productList,
  });
};

module.exports = getAllProduct;
