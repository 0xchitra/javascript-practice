let num = 1234;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);
