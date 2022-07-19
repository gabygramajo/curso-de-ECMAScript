// ¿Qué se implementó en ES8?

// Object.entries() convierte un objeto en una matriz
const data = {
  fontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

// Object.values() retorna los valores del objeto.
const values = Object.values(data);
console.log(values);

// padStart() y padEnd()
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(13, ' -----'));