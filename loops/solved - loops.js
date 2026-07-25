// when you know the upper limit use `for loop`
// when you dont the the upper limit use `while loop`

//Q1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Q3. all even numbers from 1 - 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Q4. all odd numbers
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Q5
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//Q6
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//Q7
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum = evenSum + i;
  }
}
console.log(evenSum);

//Q8
let oddSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddSum = oddSum + i;
  }
}
console.log(oddSum);

//Q9
for (let i = 1; i <= 20; i++) {
  if (i === 10) continue;
  else {
    console.log(i);
  }
}

//10
for (let i = 1; i <= 20; i++) {
  if (i === 16) break;
  else {
    console.log(i);
  }
}

//11
let countNums3 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) countNums3++;
}
console.log(countNums3);

//12
let countNums35 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) countNums35++;
}
console.log(countNums35);

//13
let givenStr = "hello";
let reversedStr = "";
for (let i = givenStr.length - 1; i >= 0; i--) reversedStr += givenStr[i];
console.log(reversedStr);

//14
let vStr = "ehey i am chitra";
let countVowel = 0;
for (let i = 0; i <= vStr.length - 1; i++) {
  if (
    vStr[i] === "a" ||
    vStr[i] === "e" ||
    vStr[i] === "i" ||
    vStr[i] === "o" ||
    vStr[i] === "u"
  )
    countVowel++;
}
console.log(countVowel);

//15
let nums = 1234567;
let countDigit = 0;
while (nums > 0) {
  nums % 10;
  countDigit++;
  nums = Math.floor(nums / 10);
}
console.log(countDigit);

//16 Reverse a nunmber
let num2 = 12345;
let rNumber = 0;
while (num2 > 0) {
  let rnum = num2 % 10;
  rNumber = rNumber * 10 + rnum;
  num2 = Math.floor(num2 / 10);
}
console.log(rNumber);

//17 if number is palindrome
let num3 = 12321;
let originalNum3 = num3;
let revNumber = 0;
while (num3 > 0) {
  let rNum = num3 % 10;
  revNumber = revNumber * 10 + rNum;
  num3 = Math.floor(num3 / 10);
}
if (originalNum3 === revNumber) {
  console.log("number is palindrome");
} else {
  console.log("not palindrome");
}

//18 factorial
let inNumber = 5;
let factorial = 1;
for (let i = 1; i <= inNumber; i++) {
  factorial = factorial * i;
}
console.log(factorial);

//19
let realNumber = 2;
let powerNumber = 5;
let outPut = 1;
for (let i = 1; i <= powerNumber; i++) {
  outPut = outPut * realNumber;
}
console.log(outPut);

//20
let inputNumber = 16954378;
let largest = 0;
while (inputNumber > 0) {
  let lastDigit = inputNumber % 10;
  if (lastDigit > largest) largest = lastDigit;
  inputNumber = Math.floor(inputNumber / 10);
}
console.log(largest);

//21
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  console.log(stars);
}

//22
for (let i = 5; i >= 0; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  console.log(stars);
}

//23
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + [j];
  }
  console.log(pattern);
}

//24
for (let i = 5; i >= 0; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + [j];
  }
  console.log(pattern);
}

//25
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (j = 1; j <= 5 - i; j++) {
    //add spaces
    stars += " ";
  }
  for (j = 1; j <= i; j++) {
    //add *
    stars += "*";
  }
  console.log(stars);
}

//26
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (j = 1; j <= 5 - i; j++) {
    //add spaces
    stars += " ";
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    //add *
    stars += "*";
  }
  console.log(stars);
}

//27
let num = 1;

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

//28
for (let i = 2; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("");
}

//29
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

//30
let isNum = 17;
let isPrime = true;

if (isNum < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < isNum; i++) {
    if (isNum % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}