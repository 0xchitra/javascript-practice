//1 function is a reusable block of codes designed to perform specific task. we use functions cause instead of writing same codes multiple times, we write it in a function and call that function whenever we need it.

//2
function greet() {
  console.log("hello, world!");
}

//3
greet();
greet();
greet();

//4
let myName = (value) => {
  console.log(value);
};
myName("chitraaa");

//5
function greets(v1) {
  console.log(`hello! ${v1}`);
}

greets("chitra");

//6
function add(v1, v2) {
  console.log(v1 + v2);
}

add(3, 5);

//7
function substract(v1, v2) {
  console.log(v1 - v2);
}

substract(5, 2);

//8
function multiple(v1, v2) {
  console.log(v1 * v2);
}

multiple(3, 3);

//9
function divide(v1, v2) {
  console.log(v1 / v2);
}

divide(8, 2);

//10
function square(v1) {
  console.log(v1 * v1);
}

square(3);

//11
// `console.log` displays the value in the console.
// `return` sends the value back to where the function was called.

//12
function cube(value) {
  return value * value * value;
}
let cubeResult = cube(3);
console.log(cubeResult);

//13
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));

//14
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(4));

//15
function largestOfTwo(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(largestOfTwo(34, 35));

//16
function largestOfThree(num1, num2, num3) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(largestOfThree(34, 35, 36));

//Q17
function smallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(smallestNumber([2, 3, 4, 5, 67, 1]));

//Q18
function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestNumber([3, 2, 5, 6, 2, 7, 9, 75]));

//19
function noOfVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(`No of vowel: ${noOfVowels("chitra")}`);

//20
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseString("chitra"));

//21
let greett = function (name) {
  return `Hello, ${name}!`;
};

console.log(greett("Chitra"));

//22
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

//23
// sayHello(); //ReferenceError: Cannot access 'sayHello' before initialization

// let sayHello = function() {
//   console.log("hello");
// };

//24
// Function Declaration -> The function itself is hoisted, so you can call it before its definition.
// Function Expression -> The function is stored in a variable, so you can only call it after that variable has been initialized. This distinction is a direct consequence of JavaScript's hoisting behavior.

//25
let sayName = (name) => {
  console.log(name);
};
sayName("chitra");

//26
let squaree = (val) => {
  return val * val;
};
console.log(squaree(5));

//27
let isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(9)); // true
console.log(isPrime(2)); // false

//28
let squar = (x) => x * x; //If there is exactly one parameter, parentheses are optional.

let double = (x) => x * 2; //You can omit {} only if the function has a single expression.

let addd = (a, b) => a + b; //If braces are omitted, the expression is returned automatically (called an implicit return). If you use braces, you must write return.

//29
const person = {
  name: "Chitra",

  greet: () => {
    console.log(this.name);
  },
};

person.greet(); //output: undefined, cause arrow functions do not create their own this. Instead, they inherit this from the surrounding (lexical) scope.

//30 default parameter
function greetA(name = "guest") {
  return `hello ${name}`;
}
console.log(greetA());

//31
function calculator(a = 0, b = 0, operator = "+") {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (a === 0) {
        return "cannot divide zero";
      } else return a / b;
  }
}

console.log(calculator(3, 2, "/"));

//32
function sumOfNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//33
function maxNumber(...numbers) {
  let max = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    } else continue;
  }
  return max;
}
console.log(maxNumber(2, 4, 6, 2, 8, 1, 9, 1, 8, 0, 6));

//34
function restExample(...numbers) {} //this is rest example

let examples = [1, 2, 3, 4, 5];
console.log(...examples); //this is spread example

// rest(...) = collects value into a Array
// spread(...) = expands an array into individual values

//35
console.log`
global scope = variable declared outside of any functions, block, can be call anywhere in the code base.
function scope = variable inside a functoin, can be called within that function'
block scope = variable inside a block '{}', can be access within that block
`;

//36
let x = 10;

function test() {
  let x = 20;
  console.log(x);
}

console.log(x); //output: 10, global scope
test(); //output: 20, function scope
console.log(x); //output: 10, global scope && 'console.log' does not modify the variable

//37
console.log`
a function can access variable declared in global scope.
`;
//38
console.log`
variable declared inside a function are cannot be access from outside the function
`;

//39
console.log`
A callback function is simply a function passed as an argument to another function, so it can be called later.
`;

//40
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUser(callback) {
  callback("Chitra");
}

processUser(greet); //output: Hello, Chitra!

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiplyy(x, y) {
  return x * y;
}

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15

//41
function myForEach(arr, callB) {
  for (let i = 0; i < arr.length; i++) {
    callB(arr[i]);
  }
}

const numbers = [11, 22, 33];

myForEach(numbers, function (num) {
  console.log(num);
});