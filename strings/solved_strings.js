//Q1
let myName = "chitra";
console.log(myName);

//Q2
let str = "hello world";
let countChar = 0;
for (let i = 0; i <= str.length - 1; i++) {
  countChar++;
}
console.log(countChar);

//3
console.log(str[0]);

//4
console.log(str[str.length - 1]);

//5
console.log(str.toUpperCase());

//6
console.log(str.toLocaleLowerCase());

//7
let str2 = "hello world";
if (str === str2) {
  console.log(true);
} else {
  console.log(false);
}

//8
let str3 = str + str2; //using '+'
console.log(str3);
console.log(str.concat(str2)); //using 'concat()'
console.log(`${str}${str2}`); //template literals

//9
for (let i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}

//10
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse);
