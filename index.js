// Import stylesheets
import "./style.css";

// Write Javascript code!

//Set
var  set1 = new Set();
set1.add(1);
set1.add(20);
set1.add({a:10,b:20});
let obj = {a:0,b:20};
set1.add(obj);
console.log(set1);
console.log(set1.has(obj));
console.log(set1.delete(20));
console.log(set1.has(20));
console.log(set1.size);

//Remove duplicate elements from array - works in console
// var  number = [1,1,2,1,1,1,1,1];
// console.log([...new Set(number)]);

//set related to string
let string ='HELLO WORLD';
let set2 = new Set(string);
console.log(set2);

//Map
let myMap = new Map();
let keyString = 'Hi',
keyObject = {a:10,b:20},
keyFunction =  function(){
  console.log('Hello world');
};

myMap.set(keyString,'Hi people');
myMap.set(keyObject,'This is an object');
myMap.set(keyFunction,'This is a function');

console.log(myMap.get('Hi'));
console.log(myMap.get(keyObject));
console.log(myMap.get(keyFunction));
