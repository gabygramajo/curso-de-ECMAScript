//Arrow Functions, Promesas y Parámetros en objetos

// Parámetros en objetos
let name = 'oscar',
    age = 32;

// Ustilizando clave y valor
const obj = {name: name, age: age}
console.log(obj);

// In ES6 - clave y valor en un solo parámetro. 
const obj2 = {name, age}
console.log(obj2);


// Promesas in ES6
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) 
      return resolve('Hey!');
    
    return reject('Ups!');
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));