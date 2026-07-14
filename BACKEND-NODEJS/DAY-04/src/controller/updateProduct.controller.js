const products = require("../data/product");

const updateProduct = (req, res) => {
  const { id, name, price, color } = req.body;
  const newProduct = {
    name,
    id: Number(id),
    price: Number(price),
    color,
  };
  products.map((item, idx) => {
    let replace_idx;
    if (item.id == id) {
      replace_idx = idx;
    }
    products[replace_idx] = newProduct;
  });

  res.send({
    message: "updated",
    product: products,
  });
};
module.exports = updateProduct;
