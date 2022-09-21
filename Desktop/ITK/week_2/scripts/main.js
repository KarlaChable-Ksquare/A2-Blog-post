const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
myHeading.textContent = "Hello Pokelitos!";

const adicionE = document.querySelector("#adicionE");
let numA = 6;
let numB = 9;
adicionE.textContent = `La suma de ${numA} + ${numB} es ${numA + numB}`;

const divisionE = document.querySelector("#divisionE");
let numC = 6;
let numD = 9;
let divCD = (numC / numD).toFixed(2);
divicionE.textContent = `La divicion de ${numC} / ${numD} es ${divCD}`;

const doesNot = document.querySelector("#doesNot");
let numE = 19;
let numF = 9;
if (numE !== numF) {
  doesNot.textContent = `El numero ${numE} no es igual a ${numF}`;
} else {
  doesNot.textContent = `El numero ${numE} SI es igual a ${numF}`;
}

const iceCream = document.querySelector("#iceCream");
let helado = "chocolate";
if (helado === "chocolate") {
  iceCream.textContent = "Yay, I love chocolate ice cream!";
} else {
  iceCream.textContent = "Awwww, but chocolate is my favorite…";
}

const esFuncion = document.querySelector("#esFuncion");

const laFuncion = (n1, n2) => {
  let multiply = n1 * n2;
  return multiply;
};

console.log(laFuncion(4, 7));
esFuncion.textContent = `La funcion da ${laFuncion(4, 7)}`;

document.querySelector("#pockMe").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

let myPockMe2 = document.querySelector("#pockMe2");
myPockMe2.addEventListener("click", function () {
  alert("Duh! Stop poking me please!");
});

let footbar;
//console.log(footbar);
footbar = "hola mundo!";

//Boolean, T-F, 0-1
//Null - case sensitive, absence of value.
//Undefined - values does not exist.
//symbol - represent something that needs be unique.
//string - secuence of caracters that represent a text. "a" - "ab" - "Howdy!" - "Hola!"
//array - This is a structure that allows you to store multiple values in a single reference.
//object - This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.
//number - 3 or 3.1416
/* BigInt es un tipo de dato numerico que puede representar números enteros en el formato de precision arbitrario */

const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10);
//console.log(bigintFromNumber); // lo mismo que 10n.

let varA = "";
let varB = 0;
let varC = true || false;

//let varD = 5 + "47";
let varD = 5 + parseInt("hola");
//NaN: es un valor que representa Not-A-Number.
//console.log(varD);

/* Literals: Objects and Arrays */
/*  
An array is an ordered collection of data (either primitive or object depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.
*/
const arr = [0, [], {}, "hello"];

/* 
In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String value or a Symbol value.

There are two types of object properties: The data property and the accessor property.
*/

const obj = {
  key: "value",
};

/* 21 de Septiembre de 2022, Leccion de la Mañana: Control Flow */
//Expression.
let x;
x = 4;
console.log(x);
//console.log(3 + x);
//x = 3 + x;
console.log(x);

/* y = 4;
x += 1; //y = y + 1
x -= 1; //y = y - 1
x *= 2; //y = y * 2
//x /= 2; //y = y / 2
x %= 2; // module
x **= 2; //y = y ** 2  Exponentiation assignment
console.log(`El valor de y es ${y}`); */

x = -0;
if (x) {
  console.log(`El valor de x es ${x}, True`);
} else if (x === 0) {
  console.log(`El valor de x es ${x}, False`);
}

//console.log("42" == 42);
/* 
The difference between == and === is that:
== converts the variable values to the same type before performing comparison. This is called type coercion.
=== does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
*/
console.log("42" === 42); //strict equality.

const arrayK = [1, 2, 3, 4, 5];
let arrIndexK = [];
for (let k = 0; k < arrayK.length; k++) {
  arrIndexK.push(arrayK[k]);
}
console.log(arrIndexK);

let z = "";
z = "Hello!";
switch (z) {
  case "Hello!":
    z = "Hola";
    break;

  case "Bye!":
    z = "Adios";
    break;

  default: //
    //console.log(z);
    break;
}
console.log(z);

//Operador ternario.
z === "Hola" ? (f = 10) : (f = 25);
//throw "True";
console.log(f);

const evalN = (grade) => {
  if (grade >= 85) {
    return "Good Job!";
  } else {
    throw new Error("You shall no pass");
  }
};
console.log(evalN(95));

try {
  const feedBack = evalN(84);
  console.log(feedBack);
} catch (error) {
  console.log(error);
  //throw new Error("anteater");
} finally {
  console.log("Anything that you wants ;)");
}
console.log("Life goes on man!");

let myVar = "Holita!";
try {
  console.log(myVar);
} catch (error) {
  console.error(error);
  console.log("i can continue to write code");
}
