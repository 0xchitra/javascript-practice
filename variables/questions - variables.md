# JavaScript Variables Practice (Beginner to Pro)

> **Instructions**
> - Use only `let`, `const`, and `var` where appropriate.
> - Don't look at the answers immediately.
> - Try to solve every question on your own.
> - Write clean and readable code.


# Beginner Level

### Q1. Create a variable named `name` and store your name in it.

### Q2. Create a variable named `age` and store your age.

### Q3. Create a constant named `country` and store your country.

### Q4. Declare variables for:
- firstName
- lastName
- city

Assign values later.

### Q5. Create two variables:
- `num1 = 10`
- `num2 = 20`

Print their sum.

### Q6. Create a variable `price = 499`.

Print:
```
Price: 499
```

### Q7. Create variables:
- `isStudent`
- `hasLaptop`

Store boolean values.

### Q8. Store the value `null` inside a variable called `phoneNumber`.

### Q9. Create a variable named `score` without assigning any value.

Print it.

### Q10. Store your favorite programming language in a variable and print:
```
My favorite language is JavaScript.
```

# Easy Level

### Q11. Swap two variables without using a third variable.

Example:
```
a = 5
b = 10
```

After swapping:
```
a = 10
b = 5
```

### Q12. Create variables:
```
length = 10
width = 6
```

Calculate the area of a rectangle.

### Q13. Create variables:
```
radius = 7
```

Calculate the diameter.

### Q14. Store your birth year.

Calculate your current age.

### Q15. Store:
```
username = "Alex"
```

Print:
```
Welcome Alex!
```

### Q16. Create variables:
```
a16 = 25
b16 = 5
```

Print:
- Addition
- Subtraction
- Multiplication
- Division
- Modulus

### Q17. What will this output?

```js
let a17 = 5;
let b17 = a17;

a17 = 20;

console.log(a17);
console.log(b17);
```

Explain why.

### Q18. Guess the output:

```js
let x = 10;

{
    let x = 20;
}

console.log(x);
```

### Q19. Guess the output:

```js
const pi = 3.14;

pi = 22;

console.log(pi);
```

What happens?

### Q20. Difference between:
- `let`
- `const`
- `var`

Explain in your own words.

# Intermediate Level

### Q21. Create variables for:
- productName
- productPrice
- quantity

Calculate the total bill.


### Q22. Store your first and last name separately.

Combine them into one variable.


### Q23. Predict the output.

```js
let a23 = 10;

let b23 = a23++;

console.log(a23);
console.log(b23);
```

### Q24. Predict the output.

```js
let a24 = 10;

let b24 = ++a24;

console.log(a24);
console.log(b24);
```

### Q25. What is variable shadowing?

Show it with an example.

### Q26. Which of these variable names are valid?

```
_name
2name
first-name
$price
camelCase
let
```

Explain why.

### Q27. Create a constant object:

```js
const person = {
    name: "John",
    age: 22
}
```

Can you change:
- age?
- name?
- entire object?

Explain.

### Q28. What will happen?

```js
const arr = [1,2,3];

arr.push(4);

console.log(arr);
```

Why?

### Q29. Guess the output.

```js
console.log(a);

var a29 = 10;
```

### Q30. Guess the output.

```js
console.log(a);

let a30 = 10;
```

Explain the difference.

# Advanced Level

### Q31. Explain hoisting with:
- var
- let
- const

### Q32. Predict the output.

```js
var a32 = 10;

function test() {
    console.log(a32);
    var a32 = 20;
}

test();
```

Explain.

### Q33. Predict the output.

```js
let a33 = 5;

function test() {
    console.log(a33);
}

test();
```


### Q34. Predict the output.

```js
let x34 = 10;

function demo() {
    let x34 = 20;

    function inside() {
        console.log(x34);
    }

    inside();
}

demo();
```

### Q35. Predict the output.

```js
let a35 = 5;

{
    let a35 = 10;

    {
        let a35 = 20;
        console.log(a35);
    }

    console.log(a35);
}

console.log(a35);
```

### Q36. Find the bug.

```js
const total = 100;

if (true) {
    total = 200;
}

console.log(total);
```

### Q37. What is the Temporal Dead Zone (TDZ)?

Explain with an example.

### Q38. Why is using `var` generally discouraged in modern JavaScript?

Mention at least 5 reasons.

### Q39. Build a small program.

Store:
- Product Name
- Price
- Quantity
- GST (18%)

Print:

```
Product : Mouse
Price : ₹500
Quantity : 3
Subtotal : ₹1500
GST : ₹270
Grand Total : ₹1770
```

### Q40. Mini Challenge

Create variables for:

- Name
- Age
- Country
- Profession
- Salary
- Experience
- Skills
- IsEmployed

Print a professional profile like:

```
========== PROFILE ==========
Name       : John
Age        : 24
Country    : India
Profession : Web Developer
Salary     : ₹50,000
Experience : 2 Years
Skills     : HTML, CSS, JavaScript
Employed   : true
=============================
```

# Bonus Challenges

### Q41.
Without using numbers directly, make:

```js
let a41 = true;
let b41 = true;
```

Calculate:

```
2
4
8
16
```

using only variables and operators.

### Q42.
Can you declare 10 variables in one line?

### Q43.
Can you swap three variables?

```
A → B
B → C
C → A
```

### Q44.
Create a variable whose value changes from:
- Number
- String
- Boolean
- Object
- Array

Print the value and `typeof` after each assignment.

### Q45. Ultimate Variable Challenge 🚀

Build a "Student Report" using only variables (no arrays or objects).

Store:
- Name
- Roll Number
- Age
- Marks in 5 subjects
- Total
- Average
- Percentage
- Pass/Fail

Print a neatly formatted report in the console.