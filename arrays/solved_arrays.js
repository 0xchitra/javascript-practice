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
