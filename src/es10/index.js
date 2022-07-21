// ¿Qué se implementó en ES10?

// flat(niveles) -> aplanar niveles de un arrays 
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)); // aplana 2 niveles
//>> [ 1, 2, 3, 1, 2, 3, 1, 2, 3]

// flatMap
let array2 = [1, 2, 3, 4, 5];
console.log( array2.flatMap( value => [value, value * 2] ) );
//>> [ 1, 2, 2, 4,  3, 6, 4, 8, 5, 10]

// trimStart, trimEnd eliminar los espacios de un string
let hello = '         hello world         ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// fromEntries -> Convierte arrays en objetos
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));
//>> { name: 'oscar', age: 32 }

// Objeto de tipo Symbol

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);