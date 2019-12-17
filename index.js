// Import stylesheets
import "./style.css";

// Write Javascript code!

//Object merge
let obj1 = {a:10,b:20};
let obj2 = {c:30,d:40};
let target = {};
let merged = Object.assign(target,obj1,obj2);
console.log(merged);

//Object Clone
let a = {name:'Zabuza'};
let clone = Object.assign({},a);
console.log(clone);

//Array Element Finding
let array1 = ['a','b','c','d','e'];
let array2 = [1,2,3,4,1,2,3,4];
let element = array1.find((x)=>x ==='e');
console.log(element);
let index = array2.findIndex((x)=> x === 4);
console.log(index);

//String repeating
let repeat = 'King '.repeat(5);
console.log(repeat);

//String searching - first parameter is string and second parameter is index from where to search.
console.log('Hi everyone'.startsWith('H'));
console.log('I am King'.endsWith('King'));
console.log('Learning ES6'.includes(' '));

//Number type checking
console.log(Number.isNaN(42));
console.log(Number.isNaN(NaN));

//Number Truncation
console.log(Math.trunc(42.0));
console.log(Math.trunc(-102.90));

//Number Sign Determination
console.log(Math.sign(34));
console.log(Math.sign(-29));
console.log(Math.sign(NaN));