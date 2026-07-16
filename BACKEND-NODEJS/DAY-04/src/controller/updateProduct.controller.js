const products = require("../data/product");

const updateProduct = (req, res) => {
  const { id, name, price, color } = req.body;
  const newProduct = {
    id: Number(id),
    name,
    price: Number(price),
    color,
  };
  products.map((item, idx) => {
    let replace_idx;
    if (item.id == id) {
      replace_idx = idx;
      products[replace_idx] = newProduct;
      res.send({
        message: "updated",
        products,
      });
    } else {
      res.send({
        message: "product not found!",
      });
      return;
    }
  });
};
module.exports = updateProduct;
