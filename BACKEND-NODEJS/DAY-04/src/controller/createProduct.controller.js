const products = require("../data/product");

const createProduct = (req, res) => {
  const { product, price, color } = req.body;

  const newProduct = {
    id: products.length + 1,
    product,
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
