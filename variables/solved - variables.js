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
console.log(`Addition = ${a16+b16}`);
console.log(`Subtraction = ${a16-b16}`);
console.log(`Multiplication = ${a16*b16}`);
console.log(`Division = ${a16/b16}`);
console.log(`Modulus = ${a16%b16}`);

// Q17
let a17 = 5;
let b17 = a17; //b17 has its own copy of value

a17 = 20; //a17 is re-assigned here

console.log(a17); //output: 20
console.log(b17);//output: 5
