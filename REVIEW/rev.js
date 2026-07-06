// import num from "./script.js";
const num = require("./script.js");

function sum(a = 10) {
  return a + 20;
}
var Person = {
  name: "Sean Manutnithya",
  age: 10,
  address: "UAE",
};

// const name = Person.name;
// const age = Person.age;
// const address = Person.address;

// console.log(name);
// console.log(age);
// console.log(address);

var { name, age, address } = Person;
console.log(name);
console.log(age);
console.log(address);

const colors = ["red", "green", "blue", "purple"];
console.log(colors);
const newColors = [...colors, "black"];
console.log(newColors);

console.log(num);
