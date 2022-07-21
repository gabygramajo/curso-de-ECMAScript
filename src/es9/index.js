// ¿Qué se implementó en ES9?
const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX'
}
// traer sólo las propiedades que queremos de un objeto, sin tener que crear orto objeto.
let { name,...newObject } = obj;
console.log( newObject );
//>> { age: 32, country: 'MX' }
let { country,...personNameAge } = obj;
console.log( personNameAge );
//>> { name: 'oscar', age: 32 }

// Unir Objetos usando el operador de propagacion/ Spread operator.
const obj1 = {
  name: 'Oscar',
  age: 32
}
const obj2 = {
  ...obj1,
  country: 'MX'
}
console.log(obj1);
console.log(obj2);

// Promise.finally

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? resolve('Hello World')
      : reject(new Error('Test Error'));
  });
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=> console.log('Finalizó'));

// Mejoras el RegE x. Agrupando bloques y accediendo a ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);