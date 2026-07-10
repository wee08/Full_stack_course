const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
