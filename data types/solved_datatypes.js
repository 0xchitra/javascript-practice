// enable text wrapping (alt + z in VS Code) in the editor for better readability.

// Q1
let name = "Chitra";

// Q2
let age = 22;

// Q3
let isStudent = true;

// Q4
let city;
console.log(typeof city);

// Q5
let varr = null;
console.log(typeof varr);

// Q6
let undVarr;

// Q7
console.log(typeof "hello"); //string
console.log(typeof 100); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object

// Q8
let Name = "Chitra"; // String
let Age = 22; // Number
let big = 123456789n; // BigInt
let IsStudent = true; // Boolean
let score; // Undefined
let user = null; // Null
let id = Symbol("id"); // Symbol

// Q9
let bNum = 123456789n;

//10
let Id = Symbol("userId");
console.log(Id);

//______________________________________\\

// Q11
console.log(typeof "42"); //string
console.log(typeof 42); //number
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined

//Q12
let favMovie = "Intersteller";
console.log(favMovie.length);

// Q13
let height = 100.2;
console.log(typeof height);

//14
let person = {
  name: "daya",
  age: 22,
};
console.log(typeof person);

//Q15
let fruits = ["apple", "banana", "mango", "grapes", "pineapple"];
console.log(typeof fruits);

//16
function greet() {
  console.log("hello");
  console.log("welcome to javascript data-types");
}
console.log(typeof greet);

//17
let a; //type is undefined
let b = null; //type is object

//18
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof (() => {})); //function

//19
let value = "daya";
console.log(typeof value);
value = 100;
console.log(typeof value);
value = true;
console.log(typeof value);

//Anser is yes, js can hold of different data types at different points in a program.

//Q20
// let value = true;

// value = "hello"; //error : 'value' has already been declared

// value = 100;

// console.log(typeof value);

//Q21
console.log(typeof 100); // number
console.log(typeof "JS"); // string
console.log(typeof false); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof 10n); // bigint

//Q22
// typeof null is object
//This is a well-known bug in JavaScript that has existed since the language was first created. This behavior is kept for backward compatibility, because changing it would break millions of existing websites and applications.

//Q23
let address = {
  street: "123 Main St",
  city: "Nagaon",
};
address["zip"] = 782001;
console.log(address);

//Q24
let mixArr = ["chitra", 20, true, null, undefined, { name: "daya" }];

//Q25
let mixObj = {
  name: "chitra",
  age: 22,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Nagaon",
  },
};

//Q26
let x = {};

let y = x;

console.log(x === y); //true, cause both x and y point to the same object in memory

//Q27
let a27 = 10;
let b27 = a27;

b27 = 20;

console.log(a27); //10
console.log(b27); //20

//Q28
let obj1 = {
  name: "Alex",
};

let obj2 = obj1;

obj2.name = "John";

console.log(obj1.name); //John

//Q29
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); //true

//Q30
const val = null;

console.log(val === null); //true

//Q31
console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

//Q32
NaN !== NaN; // true
// This is because NaN is not equal to anything, including itself. This is a design decision in javaScript to handle the special case of NaN(Not-a-Number).

//Q33
console.log(typeof typeof 10); //string

//Q34
console.log(typeof []); //object
console.log(Array.isArray([])); //true

//Q35
// typeof {} and Array.isArray({})
// typeof {} returns "object",
// Array.isArray({}) returns false

//Q36 Explain why functions are considered objects in JavaScript.
//because they can have properties and methods, just like other objects. Functions can be assigned to variables, passed as arguments to other functions, and returned from functions. They can also have their own properties and methods, which allows them to be treated as first-class citizens in the language.

//Q37
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); //false, because each Symbol is unique, even if they have the same description.

//Q38
let bigg = 10n;

console.log(typeof bigg); // bigint

//Q39 Can you perform this?
// 10n + 5
//you cannot perform this operation because BigInt and Number types cannot be mixed in arithmetic operations. You need to convert the Number to a BigInt before performing the addition. For example, `10n + BigInt(5)` or `Number(10n) + 5`.

//Q40
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean([])); //true
console.log(Boolean({})); //true

//Q41
console.log(typeof null); //object
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof (() => {})); //function
console.log(typeof Symbol()); //symbol
console.log(typeof 100n); //bigint

//Q42 Explain the difference between:
// Primitive values
// Primitive wrappers
// Objects

// Primitive values are the basic data types in JavaScript, such as strings, numbers, booleans, null, undefined, symbols, and bigints. They are immutable and do not have methods or properties.

// Primitive wrappers are objects that wrap around primitive values, allowing them to have methods and properties. For example, the String object wraps around a string primitive, allowing you to call methods like `toUpperCase()` on it.

// Objects are Collections of key-value pairs or complex data types that can hold multiple values and have properties and methods. They can be created using object literals, constructors, or classes. Objects can also be used to create custom data structures and can be modified after creation.

//Q43 Why are strings immutable but objects mutable?

// Strings are immutable in JavaScript, meaning that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string. This immutability is due to the way strings are stored in memory and allows for optimizations in performance and memory usage.

// Objects are mutable, meaning that their properties and values can be changed after they are created. This mutability allows for more flexible data structures and enables developers to modify objects as needed without creating new instances.

//Q44 Explain pass-by-value vs pass-by-reference behavior in JavaScript using examples.
// In JavaScript, primitive values (like numbers, strings, booleans) are passed by value, meaning that when you assign a primitive value to a variable or pass it to a function, a copy of the value is created. Changes made to the copy do not affect the original value.

// Example of pass-by-value:
let num1 = 5;
let num2 = num1; // A copy of num1 is created
num2 = 10; // Only num2 is changed
console.log(num1); // 5 (unchanged)
console.log(num2); // 10

// In contrast, objects (including arrays and functions) are passed by reference, meaning that when you assign an object to a variable or pass it to a function, a reference to the original object is created. Changes made to the reference affect the original object.

// Example of pass-by-reference:
let obj1a = { name: "Alice" };
let obj2a = obj1a; // A reference to obj1a is created
obj2a.name = "Bob"; // The original object is changed
console.log(obj1a.name); // "Bob"
console.log(obj2a.name); // "Bob"

//Q45 Create one example demonstrating every JavaScript data type in a single program.
const str = "Hello";
const num = 42;
const decimal = 3.14;
const isLoggedIn = true;
const nothing = null;
let notAssigned;
const uniqueId = Symbol("id");
const bigNumber = 123456789012345678901234567890n;
const persona = {
  name: "Alex",
};

console.log(typeof str);
console.log(typeof num);
console.log(typeof decimal);
console.log(typeof isLoggedIn);
console.log(typeof nothing);
console.log(typeof notAssigned);
console.log(typeof uniqueId);
console.log(typeof bigNumber);
console.log(typeof persona);

//Q46
function checkType(value) {
  const primitiveTypes = [
    "string",
    "number",
    "boolean",
    "undefined",
    "symbol",
    "bigint",
  ];

  let category;

  if (value === null) {
    category = "Primitive";
  } else if (primitiveTypes.includes(typeof value)) {
    category = "Primitive";
  } else {
    category = "Non-Primitive";
  }

  console.log("Value:", value);
  console.log("Type:", typeof value);
  console.log("Category:", category);
}

checkType("Hello");
checkType(100);
checkType(true);
checkType(null);
checkType(undefined);
checkType(Symbol("id"));
checkType(10n);
checkType([1, 2, 3]);
checkType({ name: "Alex" });
checkType(function () {});

//Q47
function isPrimitive(value) {
  return (
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "undefined" ||
    typeof value === "symbol" ||
    typeof value === "bigint"
  );
}

console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(100)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive(Symbol())); // true
console.log(isPrimitive(10n)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
console.log(isPrimitive(() => {})); // false

//Q48 Research Question: Why was Symbol introduced in ES6?
// Before ES6, object property names could only be strings.

// This created a problem: two different parts of a program could accidentally use the same property name, causing conflicts.

// Symbol was introduced to create unique identifiers.

//Q49 Research Question: Why was BigInt added to JavaScript? What limitation does it solve?

// BigInt was added to JavaScript to address the limitation of the Number type, which can only safely represent integers up to 2^53 - 1. This limitation arises from the way numbers are represented in binary format, leading to precision issues for very large integers.

// BigInt allows developers to work with arbitrarily large integers without losing precision, making it suitable for applications that require high-precision arithmetic, such as cryptography, scientific computing, and financial calculations.

//Q50
const values = [
  42,
  "hello",
  true,
  undefined,
  null,
  Symbol("id"),
  100n,
  {},
  [],
  function () {}
];

function getCategory(value) {
  return (
    value === null ||
    ["string", "number", "boolean", "undefined", "symbol", "bigint"].includes(typeof value)
  )
    ? "Primitive"
    : "Non-Primitive";
}

function getNote(value) {
  if (value === null) {
    return 'typeof returns "object" (historical bug)';
  }

  if (Array.isArray(value)) {
    return "Array is a special type of object";
  }

  if (typeof value === "function") {
    return "Functions are callable objects";
  }

  if (typeof value === "symbol") {
    return "Every Symbol is unique";
  }

  if (typeof value === "bigint") {
    return "Used for integers larger than Number.MAX_SAFE_INTEGER";
  }

  return "-";
}

for (const value of values) {
  console.log("____________________________________________");
  console.log("Value:", value);
  console.log("Type:", typeof value);
  console.log("Category:", getCategory(value));
  console.log("Note:", getNote(value));
}