//Q1
let num = 6;
if (num > 0) {
  console.log("positive");
} else if (num === 0) {
  console.log("zero");
} else {
  console.log("negative");
}

//Q2
let num1 = 0;
if (num1 > 0) {
  console.log("positive");
} else if (num1 === 0) {
  console.log("zero");
} else {
  console.log("negative");
}

//Q3
let num2 = -6;
if (num2 > 0) {
  console.log("positive");
} else if (num2 === 0) {
  console.log("zero");
} else {
  console.log("negative");
}

//Q4
let num4 = 78;
if (num4 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//Q5
let age = 17;
if (age >= 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}

//Q6
let agE = 17;
if (agE >= 18) {
  console.log("eligible for driving license");
} else {
  console.log("not eligible for driving license");
}

//7
let numA = 78;
let numB = 79;
if (numA > numB) {
  console.log(`${numA} is greater`);
} else {
  console.log(`${numB} is greater`);
}

//Q8
let numC = 93;
if (numA > numB) {
  console.log(`${numA} is greater`);
} else if (numB > numC) {
  console.log(`${numB} is greater`);
} else {
  console.log(`${numC} is greater`);
}

//Q9
let year = 2024;
if (year % 4 === 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

//Q10
let char = "i";
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("the character is a vewel");
} else {
  console.log("the character is not a vowel");
}

//Q11
let numD = 54;
if (numD % 3 === 0 && numD % 5 === 0) {
  console.log("divisible by both 3 and 5");
} else {
  console.log("not divisible by both 3 and 5");
}

//Q12
let numE = 54;
if (numE % 3 === 0 || numE % 5 === 0) {
  console.log("divisible by either 3 or 5");
} else {
  console.log("not divisible by both 3 and 5");
}

//Q13
let numF = 23;
if (numF <= 50 && numF >= 10) {
  console.log("lies between 10 and 50");
} else {
  console.log("doesn't lie between 10 and 50");
}

//14
let ageStudent = 22;
let idStudent = true;
if (ageStudent <= 25 && idStudent === true) {
  console.log("eligible for student discount");
} else {
  console.log("not eligible for student discount");
}

//15
let userName = "chitra20";
let pass = "HelloWorld31?";
if (userName === "chitra20" && pass === "HelloWorld31?") {
  console.log("welcome back to your account");
} else {
  console.log("invalid username or password");
}

//Q16
let mark = 87;
if (mark >= 90) {
  console.log("grade A");
} else if (mark >= 80) {
  console.log("grade B");
} else if (mark >= 70) {
  console.log("grade C");
} else if (mark >= 60) {
  console.log("grade D");
} else {
  console.log("grade F");
}

//Q17
let numG = 49;
if (numG % 7 === 0) {
  console.log(`${numG} is multiple of 7`);
}

//Q18
let numH = 23;
if (numH <= 100 && numH >= 1) {
  console.log("number is within 1 and 100");
} else {
  console.log("number is not within 1 and 100");
}

//Q19
let noA = 26;
let noB = 22;
let noC = 20;
if (noA < noB) {
  console.log(`${noA} is smallest`);
} else if (noB < noC) {
  console.log(`${noB} is smallest`);
} else {
  console.log(`${noC} is smallest`);
}

//20
let isAge = 17;
if (isAge >= 18) {
  console.log("you can watch the movie");
} else {
  console.log("you cannot watch the movie");
}

//21
let totalPrice = 600;
let premiumMember = true;
if (totalPrice >= 500 || premiumMember === true) {
  console.log("eligible for free delivery");
} else {
  console.log("shop 500 worth of items to get free delivery");
}

//22
let requiredAge = 21;
let salary = 45000;
if (requiredAge >= 21 && salary >= 30000) {
  console.log("eligible for loan");
} else {
  console.log("not eligible for loan");
}

//23
let personAge = 20;
let id = true;
if (personAge >= 18 && id === true) {
  console.log("can enter a club");
} else {
  console.log("cannot enter a club");
}

//24
let role = "user";
if (role === "admin") {
  console.log("access granted");
} else {
  console.log("acces denied");
}

//25
let reqUsername = "";
if (reqUsername.trim() !== "") {
  console.log(`welcome ${reqUsername}`);
} else {
  console.log(" username cannot be empty");
}

//26
let number = 24;
if (number % 2 === 0 && number >= 0) {
  console.log("the number is both positive and even");
} else {
  console.log("the number is neither positive nor even");
}

//27
let passWord = "1234567";
if (passWord.length <= 7) {
  console.log("invalid password");
}

//28
let withdrawalCash = 11000;
let balance = 10000;
if (withdrawalCash > balance) {
  console.log("insufficient bank balance");
} else if (withdrawalCash <= 0) {
  console.log("amount must be positive and greater than zero");
} else {
  console.log("withdrawal being process");
}

//29
let amount = 4000;
if (amount >= 5000) {
  console.log("eligible for 20% discount");
} else if (amount >= 3000) {
  console.log("eligible for 10% discount");
} else {
  console.log("no discount");
}

//30
let eligibleMark = 78;
if (eligibleMark >= 70) {
  console.log("you are eligible for admission in both math and science");
} else if (mark >= 60) {
  console.log("you are eligible for admission in english");
} else {
  console.log("not eligible for admission");
}

//31
let checkAge = 22;
checkAge = checkAge >= 18 ? "adult" : "minor";
console.log(checkAge);

//32
let no1 = 22;
let no2 = 19;
larger = no1 > no2 ? `${no1} is larger` : `${no2} is larger`;
console.log(larger);

//33
let no3 = 22;
isEven = no3 % 2 === 0 ? "even" : "odd";
console.log(isEven);
