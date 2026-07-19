# JavaScript Operators Practice Questions

## Beginner

### Q1. Add two numbers and print the result.

### Q2. Subtract one number from another.

### Q3. Multiply two numbers.

### Q4. Divide two numbers.

### Q5. Find the remainder when `17` is divided by `5`.

### Q6. Increment a variable using `++`.

### Q7. Decrement a variable using `--`.

### Q8. Use `+=` to increase a variable by `10`.

### Q9. Use `-=` to decrease a variable by `5`.

### Q10. Use `*=`, `/=`, and `%=` on a variable.

---

## 🟡 Comparison Operators

### Q11. Check if two numbers are equal using `==`.

### Q12. Check if two numbers are strictly equal using `===`.

### Q13. Compare `"5"` and `5` using both `==` and `===`.

### Q14. Check if two values are not equal using `!=`.

### Q15. Check strict inequality using `!==`.

### Q16. Check whether one number is greater than another.

### Q17. Check whether one number is less than or equal to another.

### Q18. Store the result of a comparison inside a variable.

---

## 🟠 Logical Operators

### Q19. Check if a person is eligible to vote (`age >= 18`).

### Q20. Check if a number lies between `10` and `20`.

### Q21. Check whether a number is positive and even.

### Q22. Check if either of two numbers is negative.

### Q23. Use the `!` operator to reverse a boolean.

### Q24. Write a condition that returns `true` only if a user is logged in **and** is an admin.

---

## 🔵 Ternary Operator

### Q25. Use the ternary operator to print `"Adult"` or `"Minor"`.

### Q26. Print the larger of two numbers using the ternary operator.

### Q27. Determine whether a number is even or odd using a ternary operator.

### Q28. Return `"Pass"` if marks are at least `40`, otherwise `"Fail"`.

---

## 🟣 Nullish & Optional Values

### Q29. Use the `??` operator to provide `"Guest"` when `username` is `null`.

### Q30. Compare the output of `||` and `??` using:

```js
0
''
false
null
undefined
```

Explain the difference.

### Q31. Assign a default value using `||`.

### Q32. Assign a default value using `??`.

---

## 🔴 Operator Precedence

### Q33. Predict the output before running:

```js
console.log(5 + 2 * 3);
```

### Q34. Predict the output:

```js
console.log((5 + 2) * 3);
```

### Q35. Predict the output:

```js
console.log(true || false && false);
```

### Q36. Predict the output:

```js
console.log(!false && false);
```

---

## 🟤 Type Coercion

### Q37. Predict the output:

```js
console.log("5" + 2);
```

### Q38. Predict the output:

```js
console.log("5" - 2);
```

### Q39. Predict the output:

```js
console.log(true + true);
```

### Q40. Predict the output:

```js
console.log(null == undefined);
```

### Q41. Predict the output:

```js
console.log(null === undefined);
```

### Q42. Predict the output:

```js
console.log([] == false);
```

### Q43. Predict the output:

```js
console.log("" == 0);
```

### Q44. Predict the output:

```js
console.log("10" > 2);
```

---

## ⚫ Short-Circuiting

### Q45. Use `&&` to execute a function only if a variable is `true`.

### Q46. Use `||` to provide a fallback value.

### Q47. Explain what this prints:

```js
console.log(false && "Hello");
```

### Q48. Explain what this prints:

```js
console.log(true || "Hello");
```

---

## 🔶 Bitwise Operators (Optional)

### Q49. Use the bitwise `&` operator on `5` and `3`.

### Q50. Use the bitwise `|` operator on `5` and `3`.

### Q51. Left shift `5` by `2`.

### Q52. Right shift `20` by `2`.

---

## 🔥 Advanced

### Q53. Swap two variables without using a third variable **using arithmetic operators only**.

### Q54. Swap two variables using the XOR (`^`) operator.

### Q55. Write an expression that checks whether a number is divisible by both `3` and `5`.

### Q56. Determine if a year is a leap year using logical operators.

### Q57. Write a nested ternary operator that returns:

* `"A"` for marks ≥ 90
* `"B"` for marks ≥ 75
* `"C"` for marks ≥ 50
* `"Fail"` otherwise

### Q58. Predict the output:

```js
console.log(10 + "5" - 3 * 2);
```

### Q59. Predict the output:

```js
console.log(1 < 2 < 3);
```

Explain why.

### Q60. Predict the output:

```js
console.log(3 > 2 > 1);
```

Explain why.

### Q61. Without using `if`, print `"Even"` or `"Odd"`.

### Q62. Write a single expression that returns the maximum of three numbers using only operators (no `if` or loops).

### Q63. Predict the output:

```js
let x = 5;
console.log(x++ + ++x);
```

### Q64. Predict the output:

```js
let a = 10;
let b = a++ + ++a + --a;
console.log(a, b);
```

### Q65. Challenge Without using any built-in methods (`Math.max`, `if`, `switch`, loops, functions), write expressions that:

* Return the smallest of two numbers.
* Check whether a number is within a given range.
* Return `"Positive"`, `"Negative"`, or `"Zero"` using nested ternary operators only.
* Safely display a user's nickname, then username, then `"Anonymous"` using `??`.
* Explain the difference between `==`, `===`, `||`, `??`, `&&`, and the ternary operator with your own examples.