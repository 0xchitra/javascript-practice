//Q1
let fruits = ["apple", "banana", "mango", "orange", "papaya"];
console.log(fruits);

//2
console.log(fruits[0] + " " + fruits[fruits.length - 1]);

//3
console.log(fruits.length);

//4
fruits[2] = "pineapple";
console.log(fruits);

//5
fruits.push("tomato");
console.log(fruits);

//6
fruits.unshift("coconut");
console.log(fruits);

//7
console.log(fruits.pop());
console.log(fruits);

//8
console.log(fruits.shift());
console.log(fruits);

//9
console.log(fruits.includes("apple"));

//10
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((frts) => {
  console.log(frts);
});

//11
let numArray = [0, 1, 2, 3, 0, 4, 5, 1, 2, 0, 1];
console.log(numArray.reduce((acc, currValue) => acc + currValue, 0));

//12
let largest = 0;
for (num of numArray) {
  if (num > largest) {
    largest = num;
  }
}
console.log(largest);

//13
let smallest = 1;
for (num of numArray) {
  if (num < smallest) {
    smallest = num;
  }
}
console.log(smallest);

//14
let evens = 0;
let odds = 0;
for (num of numArray) {
  if (num % 2 === 0) {
    evens++;
  } else {
    odds++;
  }
}
console.log(`total even: ${evens}, total odd: ${odds}`);

//15
let reverse = [];
for (i = numArray.length - 1; i >= 0; i--) {
  reverse += numArray[i];
}
console.log(reverse);

//16
let spreadCopy = [...fruits];
console.log(`spread Copy: ${spreadCopy}`);

let fromCopy = Array.from(fruits);
console.log(`from Copy: ${fromCopy}`);

let sliceCopy = fruits.slice();
console.log(`slice Copy: ${sliceCopy}`);

//shallow copy
const arr = [{ name: "John" }, { name: "Alice" }];

const copy = [...arr];
console.log(arr);

copy[0].name = "Mike";
console.log(copy);
// [{ name: "Mike" }, { name: "Alice" }]

//17
let joint = fruits.concat(numArray);
console.log(joint);

//18
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

//19
//using set
const unique = [...new Set(numArray)];
console.log(unique);

//using filter
const unique2 = numArray.filter((item, index) => {
  return numArray.indexOf(item) === index;
});
console.log(unique2);

//20
let isAppear = 1;
let appear = 0;
for (num of numArray) {
  if (num === isAppear) {
    appear++;
  }
}
console.log(`${isAppear} appears ${appear} times`);

//21
function secondLargest(arr) {
  let largest = -Infinity; // +infinity will be larger than any number
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}
console.log(secondLargest(numArray));

//22
function secondSmallest(arr) {
  let smallest = Infinity;
  let second = Infinity;

  for (num of arr) {
    if (num < smallest) {
      second = smallest;
      smallest = Number;
    } else if ( num < second && num !== smallest) {
      second = num;
    }
  }
  return second;
}
console.log(secondSmallest(numArray));

//23
function moveZeros(arr) {
  let final = [];
  for (let num of arr) {
    if (num !== 0) {
      final.push(num);
    }
  }
  while (final.length < arr.length){
    final.push(0);
  }
  return final;
}
console.log(moveZeros(numArray)); //let numArray is at line 48

//24
let leftArray = [1, 2, 3,  4, 5];
let first = leftArray.shift();
leftArray.push(first)
console.log(leftArray)

//25
let rightArray = [1,2,3,4,5];
let last = rightArray.pop();
rightArray.unshift(last);
console.log(rightArray);

//26
let rotateArray = [1,2,3,4,5,6,7,8];
function rotate(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotate(rotateArray,2))

//27
function missingNumber(arr) {
  let n = arr.length + 1;
  let expected = (n * (n + 1)) / 2;
  let actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}
console.log(missingNumber([1, 2, 3, 5, 6]));

//28
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1,2,3,4], [3,4,5,6]));

//29
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(union([1,2,3], [3,4,5]));

//30
function chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1,2,3,4,5], 2));