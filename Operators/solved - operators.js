//Q1
let num1 = 2;
let num2 = 5;
console.log(num1 + num2);

//Q2
console.log(num2 - num1);

//Q3
console.log(num1 * num2);

//Q4
console.log(num1 / num2);

//Q5
console.log(17 % 5);

//Q6
let incre = 4;
incre++;
console.log(incre);

//Q7
let decre = 4;
decre--;
console.log(decre);

//Q8
let inc = 10;
inc += 10;
console.log(inc);

//Q9
let dec = 10;
dec -= 5;
console.log(dec);

//Q10
let num = 50;
num *= 3;
console.log(num);

num /= 5;
console.log(num);

num %= 3;
console.log(num);

//_________________________//

//Q11
let x = 2;
let y = 3;
console.log(x == y); //false

//Q12
console.log(x === y); //false

//Q13
let a = 5;
let b = "5";
console.log(a == b); //true
console.log(a === b); //false

//Q14
console.log(x != y); //true

//Q15
console.log(x !== y); //true

//Q16
let c = 10;
let d = 20;
console.log(c > d); //false

//Q17
console.log(c <= d); //true

//Q18 Store the result of a comparison inside a variable.
let isGreater = c > d;
console.log(isGreater); //false

//Q19
let age = 17;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//Q20
let number = 10;
if (number <= 20 && number >= 10) {
  console.log("The number is between 10 and 20.");
} else {
  console.log("The number is not between 10 and 20.");
}

//Q21
let numA = 5;
if (numA < 0) {
  console.log("the number is negative");
} else if (numA > 0) {
  console.log("the number is positive");
} else {
  console.log("the number is zero");
}

//Q22
let numB = 15;
let numC = -25;
if (numB < 0 || numC < 0) {
  console.log("At least one of the numbers is negative.");
} else {
  console.log("Both numbers are positive.");
}

//Q23
let isTrue = true;
let isFalse = false;
console.log(!isTrue); //false
console.log(!isFalse); //true

//Q24 Write a condition that returns true only if a user is logged in and is an admin.
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn && isAdmin) {
  console.log("The user is logged in and is an admin.");
} else {
  console.log("The user is not logged in or not an admin.");
}

//////////////////////////////////////////////////
//<-ternary operator syntax->
//
// condition ? valueIfTrue : valueIfFalse;
/////////////////////////////////////////////////

//Q25
let Age = 13;
let isAdult = Age >= 18 ? "Adult" : "Minor";
console.log(isAdult);

//Q26
let aNum = 39;
let bNum = 44;
let bigger = aNum > bNum ? `${aNum} is bigger` : `${bNum} is bigger`;
console.log(bigger);

//Q27
let eNum = 33;
let isEven =
  eNum % 2 === 0 ? `${eNum} is an even number` : `${eNum} is an odd number`;
console.log(isEven);

//Q28
let marks = 87;
let result = marks >= 40 ? "pass" : "fail";
console.log(result);

