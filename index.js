// Import stylesheets
import "./style.css";

// Write Javascript code!

//let has block scope

function test() {
  let a = 100;
  if (a === 100) {
    let a = 10;
    console.log(a); //10
  }
  console.log(a); //100
}
test();

//where as var is not block scope
function test1() {
  var a = 30;
  if (a === 30) {
    var a = 10;
    console.log(a); //10
  }
  console.log(a); //10
}
test1();

//arrow function
let addNumbers = (a, b) => {
  var x = a;
  var y = b;
  console.log(x + y);
};
addNumbers(1, 3);
addNumbers(10, 20);

let subtractNumbers = (x, y) => {
  var a = x;
  var b = y;
  console.log(a - b);
};
subtractNumbers(9, 8);

//default parameters
let multiply = (a = 10, b = 20) => {
  console.log(a * b);
};
multiply(); //if pararmeter is passed here it replaces the default parameter.

// //for in is for objects, its not good to use it for array
// for (let i in array){
//   console.log(i,array[i])
// }

//for of loop
function loop() {
  let array = ["a", "b", "c", "d", "e"];
  for (let i of array) {
    console.log(i);
  }
  let string = "JavaScript";
  for (let char of string) {
    console.log("......" + char + "......");
  }
}
loop();

//class
class Food{
  constructor(type,dish){
    this.type = type;
    this.dish = dish;
  }
  taste(){
    console.log(`${this.type} dishes like ${this.dish} are very tasty`);
  }
}

class Indian extends Food{
  construnctor(type,dish){
    super(type,dish);
  }
  taste(){
    console.log(`${this.type} dishes like ${this.dish} are very tasty`);
  }
}

var meal = new Indian('Indian','Roti');
meal.taste();