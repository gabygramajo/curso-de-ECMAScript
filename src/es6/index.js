// Default Params before ES6
function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || '32';
  var country = country || 'MX';

  console.log(name, age, country);
}

newFunction();
newFunction('gabriel', '25', 'ARG');

// Now in ES6
function newFunction2(name = 'oscar', age = '32', country = 'MX') {
  console.log(name, age, country);
}

newFunction();
newFunction('gabriel', '25', 'ARG');

// Template Literals 

// before
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Now in ES6
let epicPhrase2 = ` ${hello} ${world}`;
console.log(epicPhrase2);