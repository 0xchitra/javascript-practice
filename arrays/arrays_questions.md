# JavaScript Arrays Practice (Beginner → Pro)

## 🟢 Beginner (1–15)

### Q1. Create an array containing five fruits and print the entire array.

### Q2. Print the first and last element of an array.

### Q3. Find the length of an array without hardcoding the index.

### Q4. Replace the third element of an array with another value.

### Q5. Add an element to the end of an array.

### Q6. Add an element to the beginning of an array.

### Q7. Remove the last element and return it.

### Q8. Remove the first element and return it.

### Q9. Check whether an array contains a specific value.

### Q10. Print every element of an array using:

* `for`
* `for...of`
* `forEach`

### Q11. Find the sum of all numbers in an array.

### Q12. Find the largest number in an array.

### Q13. Find the smallest number in an array.

### Q14. Count how many even and odd numbers are present.

### Q15. Reverse an array **without** using `.reverse()`.

---

# 🟡 Intermediate (16–30)

### Q16. Copy an array using:

* Spread operator
* `Array.from()`
* `slice()`

Explain shallow copy.

### Q17. Merge two arrays.

### Q18. Find whether two arrays are equal.

### Q19. Remove duplicate values.

### Q20. Count how many times a given value appears.

### Q21. Find the second largest number.

### Q22. Find the second smallest number.

### Q23. Move all zeros to the end while keeping the order of other elements.

Example:

```js
[0,1,0,3,12]
```

Output:

```js
[1,3,12,0,0]
```

---

### Q24. Rotate an array left by one position.

### Q25. Rotate an array right by one position.

### Q26. Rotate an array by **k** positions.

### Q27. Find the missing number from:

```js
[1,2,3,5]
```

Output:

```
4
```

### Q28. Find the intersection of two arrays.

### Q29. Find the union of two arrays.

### Q30. Split an array into chunks of a given size.

Example:

```js
[1,2,3,4,5]
```

Chunk size = 2

Output:

```js
[[1,2],[3,4],[5]]
```

---

# 🟠 Higher Intermediate (31–40)

### Q31. Flatten a nested array (without using `.flat()`).

### Q32. Find the maximum occurring element.

### Q33. Group array elements based on even and odd.

Output:

```js
{
 even:[2,4],
 odd:[1,3]
}
```

### Q34. Remove all falsy values.

Input:

```js
[0,false,"",null,undefined,NaN,1,"hello"]
```

### Q35. Convert an array into an object.

Example:

```js
["a","b","c"]
```

Output:

```js
{
0:"a",
1:"b",
2:"c"
}
```

### Q36. Find the first duplicate element.

### Q37. Find all duplicate elements.

### Q38. Remove a specific element without using `filter()`.

### Q39. Find the longest string in an array.

### Q40. Sort an array:

* Ascending
* Descending
* Alphabetically

Explain why `sort()` behaves unexpectedly with numbers.

---

# 🔴 Advanced / Interview (41–48)

### Q41. Implement your own version of:

* `map()`

### Q42. Implement your own version of:

* `filter()`

### Q43. Implement your own version of:

* `reduce()`

### Q44. Find the frequency of every element.

Example:

```js
["a","b","a","c","b","a"]
```

Output:

```js
{
a:3,
b:2,
c:1
}
```

### Q45. Find the majority element (appears more than `n/2` times).

### Q46. Find the maximum subarray sum (Kadane's Algorithm).

### Q47. Given an array of numbers, return the product of every element except itself **without using division**.

Example:

```js
[1,2,3,4]
```

Output:

```js
[24,12,8,6]
```

### Q48. Given an unsorted array, find the longest consecutive sequence.

Example:

```js
[100,4,200,1,3,2]
```

Output:

```
4
```

Sequence:

```
1,2,3,4
```

---

# ⭐ Bonus (Important Built-in Methods)

* Explain the difference between `slice()` and `splice()`.
* Explain the difference between `map()` and `forEach()`.
* Explain the difference between `find()` and `filter()`.
* Explain the difference between `includes()` and `indexOf()`.
* Explain the difference between `some()` and `every()`.
* Explain the difference between `push()`/`pop()` and `shift()`/`unshift()`.
* Explain shallow copy vs deep copy for arrays.
* Explain how array destructuring works.
* Explain the spread operator with arrays.
* Explain why arrays are objects in JavaScript.
