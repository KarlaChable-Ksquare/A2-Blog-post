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

// * * * * * //

const cToF = (c) => {
  /* Only make changes below this comment */
  if (typeof c === "number" && c !== undefined) {
    let farh = (c * 9) / 5 + 32;
    return farh;
  } else {
    return "Please only number for 'c'";
  }
  /* Only make changes below this comment */
};
//console.log(cToF());
//console.log(cToF(100));
//console.log(cToF(0));
//console.log(cToF("100"));

// const palindrome = (str) => {
//   /* Only make changes below this comment */
//   if (!str) {
//     return console.warn("Enter a string");
//   } else if (typeof str !== "string") {
//     return console.warn("Only string values");
//   } else if (str.length === 1) {
//     return console.warn("lengh of string need be more that 1 character");
//   } else {
//     str = str.toLowerCase();
//     let stringBack = str.replace(/ /g, "").split("").reverse().join("");
//     stringNoE = str.replace(/ /g, "");

//     return stringNoE === stringBack //true
//       ? true
//       : false;
//   }
//   /* Only make changes below this comment */
// };
// console.log(palindrome("Anita Lava la Tina"));
// console.log(palindrome("a"));
// console.log(palindrome("race a car"));
// console.log(palindrome("madam"));
// console.log(palindrome("taco cat"));
// console.log(palindrome("noon"));
// console.log(palindrome("almost a palindrome"));

const palindrome = (str) => {
  /* Only make changes below this comment */
  //first write to lower case the string and re-assign the variable.
  str = str.toLowerCase();
  // for 'stringBack' we replace blank spaces (for nothing ""), next convert string to array, for reverse it and join again all letters for .
  let stringBack = str.replace(/ /g, "").split("").reverse().join("");
  //addition we create other variable called "stringNoS" (string without spaces) then replace blank spaces for nothing ("") and create 1 word for comparate it.
  stringNoS = str.replace(/ /g, "");
  //first evaluation; if 'str' not exist we send a warning.
  if (!str) {
    return console.warn("Only string characters");
    //second evaluation; besides if "str" not is a "string" type we send another warning.
  } else if (typeof str !== "string") {
    return console.warn("Only string values");
    //third evaluation; for cases of "str" lenght ir less or equal to 1 we can't evaluate the word, for that we send a "false"
  } else if (str.lenght <= 1) {
    return false;
    //for case that all works fine, we comparate our 2 variables:
  } else {
    return stringNoS === stringBack
      ? true //if are equals
      : false; //or not equals
  }
  /* Only make changes below this comment */
};
//console.log(palindrome("Anita Lava la Tina"));
//console.log(palindrome("a"));
//console.log(palindrome("race a car"));
//console.log(palindrome("madam"));
//console.log(palindrome("taco cat"));
//console.log(palindrome("noon"));
//console.log(palindrome("almost a palindrome"));

const youShallNotPass = (arr) => {
  /* Only make changes below this comment */

  //first evaluation, if "arr" not exist we send a warning or a second evaluation, for cases when arr is not a Array element we return a warning.
  if (!arr || !Array.isArray(arr)) {
    return console.warn("Please input a array");
  } else {
    //if all it's ok, we filter the array deleting all boolean values and return them in a new value "arrFilter"
    var arrFilter = arr.filter(Boolean);
    return arrFilter;
  }

  /* for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean")
  }*/
  /* Only make changes below this comment */
};
/*console.log(youShallNotPass("alg0"));
console.log(youShallNotPass([false, null, "", 0])); //[]
console.log(youShallNotPass(["hello world!", NaN, undefined, 1, 2])); //['hello world!', 1, 2]
console.log(youShallNotPass([10, false, "", "pass"])); //[10, 'pass']*/

/** DO NOT CHANGE THE LINE BELOW **/

/** DO NOT CHANGE THE FUNCTION NAME **/
const pairTheSum = (numbers, target) => {
  let res = false;
  /* Only make changes below this comment */
  if (!numbers || !target) {
    console.warn("Please input any array or target values");
  } else if (typeof target !== "number") {
    console.warn("Please only number values for target");
  }

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (typeof numbers[i] !== "number" || typeof numbers[j] !== "number") {
        return console.warn("Please only number values in array");
      } else if (typeof target !== "number") {
        return console.warn("Please input target value");
      } else {
        let add = numbers[i] + numbers[j];
        if (add === target) {
          return (res = true);
        }
      }
    }
  }
  /* Only make changes below this comment */
  return res;
};
//console.log(pairTheSum([])); //
//console.log(pairTheSum(["Anna", 8])); //
//console.log(pairTheSum([5, 7, 2], 9)); //true
//console.log(pairTheSum([2, 9, 1], 8)); //false
//console.log(pairTheSum([3, 3], 6)); //true
//console.log(pairTheSum([2, 11, 8, 7], 9)); //true
//console.log(pairTheSum([3, 4, 5, 6], 2)); //false

/** DO NOT CHANGE THE LINE BELOW **/

let footbar;
console.log(footbar);
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
console.log(bigintFromNumber); // lo mismo que 10n.

let varA = "";
let varB = 0;
let varC = true || false;

//let varD = 5 + "47";
let varD = 5 + parseInt("hola");
//NaN: es un valor que representa Not-A-Number.
console.log(varD);

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
