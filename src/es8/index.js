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

// Async Await

const helloWorld = () => {
  return new Promise( ( resolve, reject )=> {
    (false)
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'));
  }); 
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}
helloAsync();

// Manera Correcta de ejecutar Async Await
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}
anotherFunction();