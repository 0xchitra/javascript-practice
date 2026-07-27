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

//Q29
let username = null;
let noUsername = (username = null ?? "guest");
console.log(noUsername);

//Q30
console.log(`for 0 ==>`);
console.log(0 || "default");
console.log(0 ?? "default");
console.log(`for "" ==>`);
console.log("" || "default");
console.log("" ?? "default");
console.log("for false ==>");
console.log(false || "default");
console.log(false ?? "default");
console.log("for null ==>");
console.log(null || "default");
console.log(null ?? "default");
console.log("for undefined ==>");
console.log(undefined || "default");
console.log(undefined ?? "default");
console.log("for true ==>");
console.log(true || "default");
console.log(true ?? "default");

//Q31
let userName = "";
let displayName = userName || "guest";
console.log(displayName);

//Q32
let userName2 = "";
let displayName2 = userName2 ?? "guest";
console.log(displayName2);

//Q33
console.log(5 + 2 * 3); //11

//Q34
console.log((5 + 2) * 3); //21

//35
console.log(true || (false && false)); //treu

//Q36
console.log(!false && false); //false

//Q37
console.log("5" + 2); //5 is a string, 2 is a number

//Q38
console.log("5" - 2); //'-' operator cannot concatenate strings

//Q39
console.log(true + true); //true = 1, false = 0

//bonus
console.log(false + false);
console.log(true + false);

//Q40
console.log(null == undefined); //true

//Q41
console.log(null === undefined); //false

//Q42
console.log([] == false); //'0' means false, so its true

//Q43
console.log("" == 0); // 0 == 0, true

//Q44
console.log("10" > 2); //both values are became string

// '==' converts type if needed
// '===' no type conversion like string to number

//Q45
let IsLoggedIn = true;
function greet() {
  console.log("welcome back to your account");
}
IsLoggedIn && greet();

//Q46
let user = "";
let DisplayName = "" || "guest";
console.log(DisplayName);

//Q47
console.log(false && "Hello"); // 'AND' returns first false value

//Q48
console.log(true || "Hello"); // 'OR' returns first truth value

//Q49
console.log(5 & 3);

//Q50
console.log(5 | 3);

//Q51
console.log(5 << 2);

//Q52
console.log(20 >> 2);

//Q53
let varA = 6;
let varB = 9;

varA = varA + varB;
varB = varA - varB;
varA = varA - varB;
console.log(varA, varB);

//54
let varC = 4;
let varD = 7;
varC = varC ^ varD;
varD = varC ^ varD;
varC = varC ^ varD;

console.log(varC, varD);

//Q55
let numX = 33;
console.log(numX % 3 === 0 && numX % 5 === 0);

//Q56
let year = 2024;
if (year % 4 === 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

//57
let mark = 80;

let grade =
  mark >= 90
    ? "Grade A"
    : mark >= 75
      ? "grade B"
      : mark >= 60
        ? "grade C"
        : "fail";

console.log(grade);

//58
console.log(10 + "5" - 3 * 2); // 105 - 6

//59
console.log(1 < 2 < 3); //true

//60
//true = 1, false = 0
console.log(3 > 2 > 1); //false, first 3>2 = true, then true>1 = false (1>1 = false)

//61
let no = 41;
let isOdd = no % 2 === 0 ? "even" : "odd";
console.log(isOdd);

//62
let no1 = 3;
let no2 = 9;
let no3 = 7;
let maxNo =
  no1 > no2
    ? `${no1} is bigger`
    : no2 > no3
      ? `${no2} is bigger`
      : `${no3} is bigger`;

console.log(maxNo);

//63
let xa = 5;
console.log(xa++ + ++xa); //12 , first xa = 5, then increase to 6, then xa = 7(pre-increment), so 5+7=12

//64
let aa = 10;
let bb = aa++ + ++aa + --aa; //10 + 12 + 11 = 33
console.log(aa, bb);

//65
let smallest = a < b ? a : b;
console.log(smallest);

//already solve in Q20
//already solve in Q21
//already solve in Q28

// "5" == 5 is true
// "5" === 5 is false
// true || false returns true and stop immediately
// "" ?? "guest" returns ""
// true && "hello" returns "hello", returns the falsy value or the last truthy value
// ? : shorthand for if...else

