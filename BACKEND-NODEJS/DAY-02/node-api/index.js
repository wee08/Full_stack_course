// const func = require("./src/app.js");
import { app, sum } from "./src/app.js";
var person = {
  name: "Dara",
  age: 20,
  address: "Phnom Penh",
};
// console.table(person);   
// console.time(person);

// func.app();
// console.log(func.sum(12, 12));

app();
console.log(sum(2, 12));
