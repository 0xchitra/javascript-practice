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

//3 update
person.age = 21;
console.log(person);

//4 add
person.email = "test@hello.com";
console.log(person);

//5 delete
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

//11
function isEmpty(val) {
  return Object.keys(val).length === 0;
}
console.log(isEmpty(person));

//12
let user1 = {
  username: "0xchitra",
  name: "Chitra",
  age: 20,
  city: "Nagaon",
};

user1.userName = user1.username;
delete user1.username;

console.log(user1);

//13
let { name, city } = user1;
console.log(name);
console.log(city);

//14
const userA = {
  name: "Alex",
  address: {
    city: "Nagaon",
    pincode: 123456,
  },
};
console.log(userA.address.city);

//15
userA.address.pincode = 654321;
console.log(userA);
