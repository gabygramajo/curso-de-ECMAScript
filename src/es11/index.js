// ECMAScript 2020

// dinamic import
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
})

// bigInt
const aBigNumber = 9007199254740991n; // op1
const anotherBigNumber = BigInt(9007199254740991); // op2

// Promise.AllSettled()

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

// globalThis

// operador logico ?? para null
const fooo = null ?? 'default string';
console.log(fooo);

// opcional chaining ?.
const user = {}
console.log(user?.profile?.email);
// ej 2
if(user?.profile?.email){
  console.log('email');
} else {
  console.log('fail');
}