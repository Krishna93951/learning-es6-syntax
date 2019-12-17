// Import stylesheets
import "./style.css";

// Write Javascript code!

//promise
let firstPromise = new Promise((resolve,reject) => {
  setTimeout(()=>{
    resolve('Success!');
  },1000);
})

firstPromise.then((successMessage)=>{
  console.log(`Ya ${successMessage}`);
})

