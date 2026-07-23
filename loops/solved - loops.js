//Q1
for (i = 1; i <= 10; i++) {
  console.log(i);
}

//2
for (i = 10; i >= 1; i--) {
  console.log(i);
}

//Q3. all even numbers from 1 - 50
for (i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Q4. all odd numbers
for (i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Q5
for (i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//Q6
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//Q7
let evenSum = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum = evenSum + i;
  }
}
console.log(evenSum);

//Q8
let oddSum = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddSum = oddSum + i;
  }
}
console.log(oddSum);

//Q9
for (i = 1; i <= 20; i++) {
  if (i === 10) continue;
  else {
    console.log(i);
  }
}

//10
for (i = 1; i <= 20; i++) {
  if (i === 16) break;
  else {
    console.log(i);
  }
}
