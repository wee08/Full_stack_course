const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("homepage");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
