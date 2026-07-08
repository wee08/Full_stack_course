const express = require("express");
const productRoute = require("./src/route/product.route");

const app = express();
const PORT = 3000;

productRoute(app);

// running server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
