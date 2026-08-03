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
let numArray = [1, 2, 3, 4, 5];
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
