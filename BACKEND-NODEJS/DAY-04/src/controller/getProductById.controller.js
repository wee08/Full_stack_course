const productList = require("../data/product");

const getProductById = (req, res) => {
  const id = req.query.id;
  const product = productList.filter((item) => item.id == id);
  res.send({
    id,
    product,
  });
};
module.exports = getProductById;
