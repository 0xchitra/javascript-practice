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
      smallest = num;
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

//31
function flatten(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]));

//32
function maxOccurring(arr) {
  let freq = {};
  let maxCount = 0;
  let result;
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      result = item;
    }
  }
  return result;
}
console.log(maxOccurring(numArray));

//33
function groupEvenOdd(arr) {
  const result = {
    even: [],
    odd: []
  };

  for (let num of arr) {
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }

  return result;
}

console.log(groupEvenOdd(numArray));

//34
function removeFalsy(arr) {
  const result = [];
  for (let item of arr) {
    if (item) {
      result.push(item);
    }
  }
  return result;
}
console.log(removeFalsy([0, false, "", null, undefined, NaN, 1, "hello"]));

//35
function arrayToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}
console.log(arrayToObject(["a", "b", "c"]));

//36
function firstDuplicate(arr) {
  const seen = new Set();
  for (let item of arr) {
    if (seen.has(item)) {
      return item;
    }
    seen.add(item);
  }
  return null;
}
console.log(firstDuplicate([1, 2, 3, 2, 4, 1]));

//37
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return [...duplicates];
}
console.log(findDuplicates(numArray));

//38
function removeElement(arr, value) {
  let result = [];
  for (let item of arr) {
    if (item !== value) {
      result.push(item);
    }
  }
  return result;
}
console.log(removeElement([1, 2, 3, 2, 4], 2));

//39
function longestString(arr) {
  let longest = "";
  for (let str of arr) {
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}
console.log(longestString(["cat", "elephant", "dog", "javascript"]));

//40
//ascending order
let numbersForAsc = [10, 5, 2, 30];
numbersForAsc.sort((a, b) => a - b);
console.log(numbersForAsc);

//descending order
let numbersForDec = [10, 5, 2, 30];
numbersForDec.sort((a, b) => b - a);
console.log(numbersForDec);

//alphabetically
let fruitsForSort = ["banana", "apple", "orange", "grape"];
fruitsForSort.sort();
console.log(fruitsForSort);

// By default, sort() converts elements to strings and compares them lexicographically, "10" comes before "2" because "1" is less than "2".
// const sorted = [...numbers].sort((a, b) => a - b);
//Interview Tip: Array.prototype.sort() mutates (modifies) the original array.

//41
Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

let nums = [1, 2, 3, 4];
let doubled = nums.myMap(num => num * 2);
console.log(doubled);

//42
Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let numbers = [1, 2, 3, 4, 5];
let even = numbers.myFilter(num => num % 2 === 0);
console.log(even);

//43
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

let numberz = [1, 2, 3, 4];
let sum = numberz.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);

//44
function frequency(arr) {
  let freq = {};
  for (const item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }
  return freq;
}

console.log(frequency(["a", "b", "a", "c", "b", "a"]));

//45
function majorityElement(arr) {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > arr.length / 2) {
      return num;
    }
  }
  return null;
}

console.log(majorityElement([2, 2, 1, 2, 3, 2, 2]));

//46
function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//47
function productExceptSelf(arr) {
  const result = new Array(arr.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }
  let suffix = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }
  return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));

//48
function longestConsecutive(arr) {
  const set = new Set(arr);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
