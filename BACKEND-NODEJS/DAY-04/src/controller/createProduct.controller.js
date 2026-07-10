const productList = require("../data/product");

const createProduct = (req, res) => {
  const newProduct = {
    product: "Skate Board",
    id: productList.length + 1,
    price: 95000,
    color: "blue",
  };
  productList.push(newProduct);
  res.send({
    product: productList,
  });
};
module.exports = createProduct;
