// Import stylesheets
import "./style.css";

// Write Javascript code!

//promise
// let firstPromise = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     resolve('Success!');
//   },1000);
// })

// firstPromise.then((successMessage)=>{
//   console.log(`Ya ${successMessage}`);
// })

//promise - resolve
function resolve() {
  console.log("Resolved");
}

Promise.resolve().then(resolve); //it returns a promise object first to which .then is calling the function resolve.

//promise - reject
function rejected(error) {
  console.error(error);
}
Promise.reject(new Error("Something Went Wrong")).catch(rejected);

//promise chaining
let test = job1();

test
  .then(function(data1) {
    console.log("data1", data1);
    return job2();
  })
  .then(function(data2) {
    console.log("data2", data2);
    return "Third Promise";
  })
  .then(function(data3) {
    console.log("data3", data3);
  });

function job1() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('First Promise');
    }, 500);
  });
}

function job2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Second Promise");
    }, 1000);
  });
}
