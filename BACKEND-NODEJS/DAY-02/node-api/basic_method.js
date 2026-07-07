const express = require("express");
const app = express();
const PORT = 3000;
// middleware
app.use(express.json());
// route, app.get() is an endpoint of api
app.get("/", (req, res) => {
  res.send("Hello express");
});
app.get("/products", (req, res) => {
  res.send("Basket ball");
});
app.get("/api/cart", (req, res) => {
  res.send("Basket ball : 10");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
