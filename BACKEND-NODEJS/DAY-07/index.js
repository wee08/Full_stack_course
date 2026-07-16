const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", "homepage");
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
