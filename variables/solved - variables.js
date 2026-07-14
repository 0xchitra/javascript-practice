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
    age: 22
}
//person.name = "chitra"; is allowed
//person.age = 30; is allowed
//person{ Nam = "chitra";} is not allowed

// Q28
const arr = [1,2,3]; //skip arrays for now
arr.push(4); //this will add 4 at the end of the array

console.log(arr);

//Q29
console.log(a29); //output: 10
var a29 = 10; //hoisting

//30
console.log(a30); //output: 10
let a30 = 10; //hoisting