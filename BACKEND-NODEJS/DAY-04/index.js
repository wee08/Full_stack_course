const getAllProductRoute = require("./src/router/getAllProduct.route");

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Homepage");
});

getAllProductRoute(app);

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
