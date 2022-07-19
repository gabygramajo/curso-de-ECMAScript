// CLASE 2: LET y CONST, Multilínea, Spread Operator y Desestructuración

// Multilínea antes
let lorem = "JavaScript es un lenguaje de programación. \n" 
+ "React es un Biblioteca Frontend.";

// ES6
let lorem2 = `Python es un lenguaje de programación.
Django es un Framework Backend`;

console.log(lorem);
console.log(lorem2);

//objetos. 

let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'MX'
}
console.log(person.name, person.age);

//Object Destructuring in ES6
let { name, age } = person;
console.log( name, age);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// Array Destructuring in ES6
let education = ['David', ...team1, ...team2];
console.log(education);

// var & let:
{ // scope 1 
  var globalVar = "Global var | scope 1";
}
{ // scope 2
  let globalLet = "Global let | scope 2";
  console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

// constantes en ES6:
const a = 'no puedo cambiar el valor';
a = 'Soy una constante';
console.log(a);