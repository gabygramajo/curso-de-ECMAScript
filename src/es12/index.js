// ECMAScript 2021

// replaceall
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la Web";

// old replace. Se para al encontrar la primer coincidencia.
const replacedString = string.replace("Javascript", "Python");
console.log(replacedString);
//>> Python es maravilloso, con Javascript puedo crear el futuro de la Web


// replaceAll. Reemplaza en todas las coincidencias que haya.
const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);
//>> Python es maravilloso, con Python puedo crear el futuro de la Web

// Indicar metodos privados en clases con #
class Message {
  show(val) {
    console.log(val);
  }
}
class Message2 {
  #show(val) {
    console.log(val);
  }
}
const message1 = new Message();
const message2 = new Message2();

message1.show('Hola!');
//>> Hola!
message2.show('Hola!');
/* >> Uncaught TypeError: message2.show is not a function
    at <anonymous>:15:10
    (anonymous) @ VM68:15 */

// Promise any -> retorna la primer promesa en resolverse primero
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));

// waekRef() para evitar que un objeto sea recogido por el garbage collector
class anyCLass {
  constructor(element) {
    this.ref = new weakRef(element)
  }
  // {...}
}

// Asignaciones lógicas
let isTrue = true;
let isFalse = false;

console.log( isTrue &&= isFalse);

console.log( isTrue ||= isFalse);

isTrue = undefined;
console.log( isTrue ??= isFalse);
