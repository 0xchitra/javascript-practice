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
