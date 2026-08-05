# JavaScript Objects Practice Questions

## 🟢 Beginner (1–12)

### Q1. Create an object named `person` with:

* name
* age
* city

Print all values.

### Q2. Access Properties

Given:

```js
const car = {
  brand: "Honda",
  model: "City",
  year: 2024
};
```

Print each property using:

* dot notation
* bracket notation

### Q3. Update Property

Change a user's age from `20` to `21`.

### Q4. Add New Property

Add an `email` property to an existing object.

### Q5. Delete Property

Remove the `password` property from an object.

### Q6. Check Property Exists

Without using `if (obj.prop)` check whether `"age"` exists.

### Q7. Count Properties

Write a function that returns how many properties an object has.

### Q8. Iterate Object

Print:

```
name : Chitra
age : 20
city : Nagaon
```

using a loop.

### Q9. Sum Numeric Properties

```js
const salaries = {
  Chitra:100,
  Jane:200,
  Jack:300
};
```

Return total salary.

### Q10. Find Highest Value

Return the employee with the highest salary.

### Q11. Empty Object Check

Write `isEmpty(obj)`.

Example:

```js
{}
```

returns

```
true
```

### Q12. Rename Property

Rename:

```
username
```

to

```
userName
```

without changing its value.

---

# 🟡 Intermediate (13–25)

### Q13. Object Destructuring

Extract:

```
name
city
```

from an object.

### Q14. Nested Objects

Given

```js
const user = {
    name:"Alex",
    address:{
        city:"Nagaon",
        pincode:123456
    }
}
```

Print only city.

### Q15. Nested Object Update

Update only the pincode.

### Q16. Object Methods

Create an object calculator having methods

* add()
* subtract()
* multiply()

### Q17. `this` Keyword

Predict the output.

```js
const user = {
  name: "Chitra",
  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Explain why.

### Q18. Dynamic Property Names

Create

```js
{
   apple:10
}
```

where `"apple"` comes from a variable.

### Q19. Object.keys()

Without loops print only keys.

### Q20. Object.values()

Return the sum of all numeric values using `Object.values()`.

### Q21. Object.entries()

Convert

```js
{
 a:1,
 b:2
}
```

into

```
[
 ["a",1],
 ["b",2]
]
```

### Q22. Reverse Key-Value

Convert

```js
{
  a:1,
  b:2
}
```

into

```js
{
 1:"a",
 2:"b"
}
```

### Q23. Merge Objects

Merge two objects.

If duplicate keys exist, latest value wins.

### Q24. Clone Object

Create a copy without affecting original.

### Q25. Shallow Copy vs Deep Copy

Demonstrate why

```js
const copy = {...obj}
```

fails for nested objects.

---

# 🟠 Advanced (26–35)

### Q26. Deep Clone

Implement deep clone without using `structuredClone()`.

### Q27. Freeze Object

What happens here?

```js
const obj = Object.freeze({
   name:"Chitra"
});

obj.name="Alex";
```

Explain.

### Q28. Seal Object

Difference between

* freeze
* seal
* preventExtensions

Demonstrate each.

### Q29. Property Descriptors

Create a property that

* cannot be changed
* cannot be deleted
* is hidden from loops

### Q30. Getter & Setter

Create

```js
person.fullName
```

using getter and setter.

### Q31. Convert Object to Query String

Convert

```js
{
name:"Chitra",
age:20
}
```

into

```
name=Chitra&age=20
```

### Q32. Remove Falsy Values

Convert

```js
{
a:1,
b:null,
c:false,
d:"",
e:0
}
```

into

```js
{
a:1
}
```

### Q33. Compare Two Objects

Write

```js
isEqual(obj1,obj2)
```

that checks value equality.

### Q34. Flatten Object

Convert

```js
{
 person:{
    name:"Chitra",
    address:{
        city:"Nagaon"
    }
 }
}
```

into

```js
{
 "person.name":"Chitra",
 "person.address.city":"Nagaon"
}
```

### Q35. Unflatten Object

Reverse Question 34.

---

# 🔴 Interview Level (36–45)

### Q36. Group By Property

Group users by age.

Input:

```js
[
 {name:"A",age:20},
 {name:"B",age:20},
 {name:"C",age:30}
]
```

---

### Q37. Most Frequent Property Value

Find the most common city among users.

### Q38. Deep Merge

Merge nested objects recursively.

### Q39. Build Your Own `Object.assign()`

Implement your own version.

### Q40. Object Difference

Return keys that differ between two objects.

### Q41. Circular Reference

Explain what happens.

```js
const obj = {};
obj.self = obj;
```

How would you deep clone it?

### Q42. Implement `pick()`

```js
pick(user, ["name","age"])
```

returns

```js
{
 name:"Chitra",
 age:20
}
```

### Q43. Implement `omit()`

Remove selected properties.

### Q44. Build Immutable Update

Implement

```js
update(obj, path, value)
```

Example:

```js
update(user, "address.city", "Mumbai")
```

Original object must remain unchanged.

### Q45. Mini Project — Student Management System

Create functions for:

* Add student
* Delete student
* Update student
* Find by id
* Find topper
* Average marks
* Group by grade
* Sort by marks
* Search by name
* Print report card

---

# ⭐ Bonus Interview Questions

* Explain pass-by-reference vs pass-by-value with objects.
* Why are two identical objects not equal (`{} === {}`)?
* Difference between `Object.keys()`, `Object.values()`, and `Object.entries()`.
* Difference between `in`, `hasOwnProperty()`, and `Object.hasOwn()`.
* Difference between `for...in` and `for...of`.
* When should you use a `Map` instead of an `Object`?
* Explain enumerable vs non-enumerable properties.
* What is the prototype chain, and how do property lookups work?
* Explain `Object.create()` and how it differs from object literals.
* Explain `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()` with real-world use cases.
