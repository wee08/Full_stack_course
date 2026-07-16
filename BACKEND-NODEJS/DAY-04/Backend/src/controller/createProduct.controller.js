const products = require("../data/product");

const createProduct = (req, res) => {
  const { name, price, color } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price: Number(price),
    color,
  };

  products.push(newProduct);

  res.send({
    product: newProduct,
    products,
  });
};

module.exports = createProduct;
