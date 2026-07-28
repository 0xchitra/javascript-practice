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
