const products = require("../data/product");

const deletProduct = (req, res) => {
  const { id } = req.body;

  const index = products.findIndex((item) => item.id == Number(id));

  if (index === -1) {
    res.send({
      message: "product not found!",
    });
    return;
  }

  products.splice(index, 1);
  res.send({
    products,
  });
};

module.exports = deletProduct;
