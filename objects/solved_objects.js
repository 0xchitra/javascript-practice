//1
let person = { name: "Chitra", age: 20, city: "Nagaon" };
console.log(person);

//2
const car = {
  brand: "Honda",
  model: "City",
  year: 2024,
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

console.log(car["brand"]);
console.log(car["model"]);
console.log(car["year"]);

//3
person.age = 21;
console.log(person);

//4
person.email = "test@hello.com";
console.log(person);

//5
delete person.city;
console.log(person);

//6
let isExist = "age" in person;
console.log(isExist);

//7
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties(person));

//8
let user = {
  name: "Chitra",
  age: 20,
  city: "Nagaon",
};
for (let key in user) {
  console.log(key, user[key]);
}

//9
const salaries = {
  Chitra: 5000,
  Jane: 2000,
  Jack: 3000,
};
let sum = 0;
for (key in salaries) {
  sum = sum + salaries[key];
}
console.log(sum);

//10
let highestEmpl = "";
let highestSalr = 0;
for (let [name, salary] of Object.entries(salaries)) {
  if (salary > highestSalr) {
    highestSalr = salary;
    highestEmpl = name;
  }
}
console.log(highestEmpl);
console.log(highestSalr);
