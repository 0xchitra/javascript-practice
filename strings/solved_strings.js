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

//11
let countVowel = 0;
for (let i = 0; i <= str.length - 1; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    countVowel++;
  }
}
console.log(countVowel);

//12
let countCons = 0;
for (let i = 0; i <= str.length - 1; i++) {
  if (
    str[i] !== "a" ||
    str[i] !== "e" ||
    str[i] !== "i" ||
    str[i] !== "o" ||
    str[i] !== "u"
  ) {
    countCons++;
  }
}
console.log(countCons);

//13
if (str.includes("world")) {
  console.log(true);
}

//14
console.log(str.indexOf("w"));

//15
console.log(str.lastIndexOf("o"));

//16
let js = "i love java";
let jsMod = js.replace("java", "javascript");
console.log(jsMod);

//17
let poem = "hello cat, if you are a cat, you should not berk like dog";
let poemMod = poem.replaceAll("cat", "dog");
console.log(poemMod);

//18
console.log(poem.slice(0, 5));
console.log(poem.substring(0, 5));

//19
// slice(); //negative value indices to count backward
// substring(); //negative value indices as 0
// substr(); //avoid in modern js

//20
let space = " chitra  ";
console.log(space.trim());

//21
console.log(str.startsWith("hello"));

//22
console.log(str.endsWith("world"));

//23
console.log(str.split(" "));

//24
let arr = ["hello", "i'm", "chitra"];
console.log(arr.join(" "));

//25
let sentence = "welcome to javascript mates";
let words = sentence.trim().split(/\s+/);
console.log(words.length);

//26
let capital = str[0].toUpperCase() + str.slice(1);
console.log(capital);

//27
let sent = "welcome to the world of javascript ";
let result = sent.split(" ")
.map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
console.log(result);

//28
let swappedCase = "";
for (let char of sent) {
  if (char === char.toUpperCase()) {
    swappedCase += char.toLowerCase()
  } else {
    swappedCase += char.toUpperCase()
  }
}

console.log(swappedCase);

//29
let noSpace = sent.replaceAll(" ", "");
console.log(noSpace);

//30
let noDupChar = "";

for (let char of sent) {
  if (!noDupChar.includes(char)) {
    noDupChar += char;
  }
}

console.log(noDupChar);

//31
let pString = "noon";
let original = pString;
let duplicate = "";

for (let i = pString.length - 1; i >= 0; i--) {
  duplicate += pString[i]
}

if (original === duplicate){
  console.log(true)
} else {
  console.log(false)
}

//32
// let str = "hello world";
let freq = {};
let maxChar = "";
let maxCount = 0;

for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;

  if (freq[char] > maxCount) {
    maxCount = freq[char];
    maxChar = char;
  }
}

console.log(maxChar, maxCount);

//33
// 'str' at line no 6
let frequ = {};

for (let char of str) {
  frequ[char] = (frequ[char] || 0) + 1;
}

console.log(frequ);

//34
// 'str' at line no 6
let freqn = {};

for (let char of str) {
  freqn[char] = (freqn[char] || 0) + 1;
}

for (const key in freqn) {
  if (freqn[key] > 1) {
    console.log(key);
  }
}

//35
// 'str' at line no 6
let freqnc = {};

for (const char of str) {
  freqnc[char] = (freqnc[char] || 0) + 1;
}

for (const key in freqnc) {
  if (freqnc[key] === 1) {
    console.log(key);
  }
}

//36
// 'str' at line no 6
let wordz = sentence.split(" ");
let longest = "";

for (const word of wordz) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);

//37
// 'str' at line no 6
let wordss = sentence.split(" ");
let shortest = words[0];

for (const word of wordss) {
  if (word.length < shortest.length) {
    shortest = word;
  }
}

console.log(shortest);

//38
let strY = "listen";
let strZ = "silent";

const resultIs =
strY.split("").sort().join("") ===
strZ.split("").sort().join("");

console.log(resultIs);

//39
let strAB = "ABCD";
let strCD = "CDAB";

const resultz =
strAB.length === strCD.length &&
(strAB + strAB).includes(strCD);

console.log(resultz);

//40
// 'str' at line no 6
let compressed = "";
let count = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    compressed += str[i] + count;
    count = 1;
  }
}

console.log(compressed);