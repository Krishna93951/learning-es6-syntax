// Import stylesheets
import "./style.css";

// Write Javascript code!

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

//Destructuring Assignment
let list = [1,2,3];
let [a,b] = list;
console.log(a,b);

// var object1 = {
// method1(){
// console.log('Hello World');
// }
// }

// var object2 = {
// method2(){
// super.method1();
// }
// }

// Object.setPrototypeOf(object2,object1);
// object2.method2()