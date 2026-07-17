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