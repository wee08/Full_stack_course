const products = require("../data/product");

const updateProduct = (req, res) => {
  const { id, name, price, color } = req.body;
  const newProduct = {
    id: Number(id),
    name,
    price: Number(price),
    color,
  };
  const index = products.findIndex((item) => item.id === Number(id));
  if (index === -1) {
    res.send({
      message: "product not found",
    });
    return;
  }
  products[index] = newProduct;
  res.send({
    message: "updated",
    products,
  });
};
module.exports = updateProduct;
