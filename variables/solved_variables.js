// Q1
let name = "Chitra";

// Q2
let age = 22;

// Q3
const country = "MyWorld";

// Q4
let firstName = "";
let lastName = "";
let city = "";

// Q5
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

// Q6
let price = 499;
console.log(`price: ${price}`);

// Q7
let isStudent = true;
let haslaptop = true;

// Q8
let phoneNumber = null;

// Q9
let score;
console.log(score);

// Q10
let favLang = "JavaScript";
console.log(`My favorite language is ${favLang}`);

// Q11
let a = 5;
let b = 10;
[a, b] = [b, a]; //using destructuring assignment

console.log(a, b);

// Q12
let length = 10;
let width = 6;
console.log(`Area = ${length * width}`);

// Q13
let radius = 7;
console.log(`if radius is ${radius}, diameter will be ${radius * 2}`);

// Q14
let birthYear = 2004;
age = 2026 - birthYear; //age = (current year - birth year)
console.log(age);

// Q15
let username = "Alex";
console.log(`Welcome ${username}!`);

// Q16
let a16 = 25;
let b16 = 5;
console.log(`Addition = ${a16 + b16}`);
console.log(`Subtraction = ${a16 - b16}`);
console.log(`Multiplication = ${a16 * b16}`);
console.log(`Division = ${a16 / b16}`);
console.log(`Modulus = ${a16 % b16}`);

// Q17
let a17 = 5;
let b17 = a17; //b17 has its own copy of value

a17 = 20; //a17 is re-assigned here

console.log(a17); //output: 20
console.log(b17); //output: 5

// Q18
let x = 10; //global scope variable
{
  let x = 20; //block scope variable
}

console.log(x); //output is 10, cause of global scope variable

// Q19
const pi = 3.14;

// pi = 22; //const create a variable that cannot be re-assign

console.log(pi); //output: error, because const variable is reassigning

// Q20
// const -> use const for the values that should not be re-assign
// let -> use let when the values need to change in future
// var -> var is function-scoped, it ignores block boundaries. avoid var in modern javascript

// Q21
let productName = "mouse";
let productPrice = 1999;
let quantity = 3;

totalBill = productPrice * quantity;
console.log(`
    item: ${productName}
    price: ${productPrice}
    quantity: ${quantity}
    total bill: ${totalBill}`);

// Q22
let firName = "Chitra";
let lasName = "Bora";
fulName = firName + " " + lasName;
console.log(fulName);

// Q23
// a++ is the post increment operator
let a23 = 10; //first uses current value of a
let b23 = a23++; //b get current value of a, then a becomes 11

console.log(a23); //11
console.log(b23); //10

// Q24
//++a is the pre increment operator
let a24 = 10; //a gets current value 10
let b24 = ++a24; //a becomes 11, then b gets value of a

console.log(a24); //11
console.log(b24); //11

// Q25
let name25 = "chitra";
{
  let name25 = "hugo";
  console.log(name25);
}
console.log(name25);

//Q26
// _name -> valid
// 2name -> invalid
// first-name -> invalid
// $price -> valid
// camelCase -> valid
// let -> invalid

//Q27
const person = {
  name: "John",
  age: 22,
};
//person.name = "chitra"; is allowed
//person.age = 30; is allowed
//person{ Nam = "chitra";} is not allowed

// Q28
const arr = [1, 2, 3]; //skip arrays for now
arr.push(4); //this will add 4 at the end of the array

console.log(arr);

//Q29
// console.log(a29); //output: undefined
// var a29 = 10; //hoisting

//30
// console.log(a30); //output: cannot access before initialization
// //temoporal dead zone
// let a30 = 10;

//31
// var -> hoisted + initialized to undefined
// let -> hoisted, but blocked by the temporal dead zone
// const -> hoisted, but blocked by the temporal dead zone + cannot be re-assigned

//32
var a32 = 10;

function test() {
  console.log(a32);
  var a32 = 20; //hoisting
}

test(); //output: undefined

//33
// let a33 = 5;

// function test() {
//   console.log(a33); //temporal dead zone
// }

// test(); //output: cannot access before initialization

//34
let x34 = 10;

function demo() {
  let x34 = 20;

  function inside() {
    console.log(x34);
  }

  inside();
}

demo(); //output: 20

//35
let a35 = 5;

{
  let a35 = 10;

  {
    let a35 = 20;
    console.log(a35); //output:20
  }

  console.log(a35); //output:10
}

console.log(a35); //output:5

//36
const total = 100;

if (true) {
  total === 200; //total = 200; will refer assigning value
}

console.log(total);

//37
// console.log(vara);

// var vara = 1;

// console.log(lete);

// let lete = 1;

//temporal dead zone is the period from entering a block scope until let or const variable is initialized

//38
// 1> var is funtion scoped, not block scoped
// 2> it allows re-declaration
// 3> variable can leak out of blocks
// 4> problem in looping and asynchronous code
// 5> hoisting initialized as `undefined`, which may hide bugs

//39
let product = "Mouse";
let pric = 500;
let quant = 3;
let subtotal = price * quantity;
let gst = subtotal * 0.18;
let grandtotal = subtotal - gst;

console.log(`Product : ${product}`);
console.log(`Price : ${pric}`);
console.log(`Quantity : ${quant}`);
console.log(`Subtotal : ${subtotal}`);
console.log(`GST : ${gst}`);
console.log(`Grand Total : ${grandtotal}`);

//40
let name40 = "John";
let age40 = 24;
let country40 = "India";
let profession = "Web developer";
let salary = 50000;
let experience = "2 years";
let skills = "HTML, CSS, JavaScript";
let employed = true;

console.log("========== PROFILE ==========");
console.log(`Name       : ${name40}`);
console.log(`Age        : ${age40}`);
console.log(`Country    : ${country40}`);
console.log(`Profession : ${profession}`);
console.log(`Salary     : ${salary}`);
console.log(`Experience : ${experience}`);
console.log(`Skills     : ${skills}`);
console.log(`Employed   : ${employed}`);
console.log("=============================");

//41
let a41 = true;
let b41 = true;

const two = a41 + b41;
const four = two*two;
const eight = four*two;
const sixteen = eight*two;

console.log(two);
console.log(four);
console.log(eight);
console.log(sixteen);

//42
 let k=1, l=2, m=3, d=4, e=5, f=6, g=7, h=8, i=9, j=10;

 //43
 let A = 1;
 let B = 2;
 let C = 3;

 [A, B, C] = [C, B, A];

 //44
 let numb = 123;
 let str = "hello";
 let booln = true;
 let obje = {name:"daya", age: 22,};
 let arra = [1, 2, 3, 4];

 console.log(typeof(numb));
 console.log(typeof(str));
 console.log(typeof(booln));
 console.log(typeof(obje));
 console.log(typeof(arra));

 //45
 let name45 = "hugo";
 let rNo = 2020;
 let age45 = 20;
 let sub1 = 90, sub2 =89, sub3 = 99, sub4 = 79, sub5 = 88;
 let total45 = (sub1+sub2+sub3+sub4+sub5);
 let avg = total45/5;
 let percent = (total45/500)*100;
 let result = percent>=30 ? "pass" : "fail";

 console.log(name45);
 console.log(rNo);
 console.log(age45);
 console.log(`sub1= ${sub1}, sub2= ${sub2} , sub3 = ${sub3}, sub4 = ${sub4}, sub5 = ${sub5}`);
 console.log(total45);
 console.log(avg);
 console.log(percent);
 console.log(result);