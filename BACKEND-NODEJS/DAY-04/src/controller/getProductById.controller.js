const products = require("../data/product");

const getProductById = (req, res) => {
  const id = req.params.id;

  const product = products.filter((item) =>
    item.id == id ?
      res.send({ product })
    : res.send({ message: "product not found!" }),
  );
};
module.exports = getProductById;
