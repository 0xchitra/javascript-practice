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

//16
let calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
};
//functions stored inside a object = methods

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));

//17
const userr = {
  name: "Chitra",
  greet() {
    console.log(this.name);
  },
};

userr.greet();
// Explanation: 'this' refers to the object before the dot (userr), so this.name is "Chitra".

//18
let fruit = "apple";
let fruitCounts = {
  [fruit]: 10,
};
console.log(fruitCounts);

//19
console.log(Object.keys(person));

//20
let sals = Object.values(salaries);
let totalSal = 0;
for (sal of sals) {
  totalSal += sal;
}
console.log(totalSal);

//21
let data = {
  a: 1,
  b: 2,
};
let result = Object.entries(data);
console.log(result);

//22
const reversed = {};
for (let [key, value] of Object.entries(data)) {
  reversed[value] = key;
}

console.log(reversed);

//23
const obj1 = {
  name: "Chitra",
  age: 20,
};

const obj2 = {
  age: 22,
  city: "Nagaon",
};

const merged = {
  ...obj1,
  ...obj2,
};
console.log(merged);

//24
const original = {
  name: "Chitra",
  age: 20,
};

const copy = { ...original };
copy.age = 22;

console.log(original.age); // 20
console.log(copy.age); // 25

//25 shallow copy
const userNew = {
  name: "Chitra",
  address: {
    city: "Nagaon",
  },
};

const copyNew = { ...userNew };
copyNew.address.city = "Ghy";
console.log(userNew.address.city);

//26
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
const clone = deepClone(userNew);

clone.address.city = "Mumbai";
console.log(userNew); // original
console.log(clone); // clone

//27
const obj = Object.freeze({
  name: "Chitra",
});

obj.name = "Hugo";
console.log(obj.name);

//28
const isName = { name: "John" };

Object.preventExtensions(isName);
isName.age = 20; // ignored
isName.name = "Alex"; // allowed
delete isName.name; // allowed
console.log(isName);

Object.seal(isName);
isName.name = "Alex"; // allowed
isName.age = 20; // ignored
delete isName.name; // ignored
console.log(isName);

Object.freeze(isName);
isName.name = "Alex"; // ignored
isName.age = 20; // ignored
delete isName.name; // ignored
console.log(isName);

//29
const user29 = {};

Object.defineProperty(user29, "id", {
  value: 101,
  writable: false,
  configurable: false,
  enumerable: false,
});

user29.id = 200;
delete user29.id;

console.log(user29.id); // 101

for (const key in user29) {
  console.log(key);
}

//30
const person30 = {
  firstName: "Chitra",
  lastName: "Hugo",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

console.log(person.fullName);
person.fullName = "Hugo Hamada";

console.log(person30.firstName);
console.log(person30.lastName);

//31
let objQuery = {
  name: "Chitra",
  age: 20,
};

let query = Object.entries(objQuery)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");

console.log(query);

//32
let objFalsy = {
  a: 1,
  b: null,
  c: false,
  d: "",
  e: 0,
};

let falsyResult = {};
for (const [key, value] of Object.entries(obj)) {
  if (value) {
    result[key] = value;
  }
}

console.log(falsyResult);

//33
function isEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isEqual(obj1, obj2));

//34 flatten
function flatten(obj, parent = "", result = {}) {
  for (const key in obj) {
    let newKey = parent ? `${parent}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const userFlatten = {
  person: {
    name: "Chitra",
    address: {
      city: "Nagaon",
    },
  },
};

console.log(flatten(userFlatten));

//35 unflatten
function unflatten(obj) {
  const result = {};

  for (let key in obj) {
    const keys = key.split(".");
    let current = result;
    while (keys.length > 1) {
      let part = keys.shift();
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
    current[keys[0]] = obj[key];
  }
  return result;
}

let flat = { "person.name": "Chitra", "person.address.city": "Nagaon" };
console.log(unflatten(flat));

//36
let users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];

let grouped = users.reduce((result, user) => {
  let age = user.age;
  if (!result[age]) {
    result[age] = [];
  }
  result[age].push(user);
  return result;
}, {});

console.log(grouped);

//37
let userss = [
  { name: "A", city: "Nagaon" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Nagaon" },
  { name: "D", city: "Nagaon" },
  { name: "E", city: "Mumbai" },
];

let count = {};

for (let user of userss) {
  count[user.city] = (count[user.city] || 0) + 1;
}

let mostFrequent = null;
let maxCount = 0;

for (let [city, frequency] of Object.entries(count)) {
  if (frequency > maxCount) {
    maxCount = frequency;
    mostFrequent = city;
  }
}

console.log(mostFrequent); // Delhi
console.log(maxCount); // 3

//38
function deepMerge(obj1, obj2) {
  let result = { ...obj1 };

  for (let key in obj2) {
    if (
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      typeof result[key] === "object" &&
      result[key] !== null
    ) {
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}

let merge = deepMerge(obj1, obj2);
console.log(merge);

//39
function myAssign(target, ...sources) {
  for (let source of sources) {
    for (let key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

let obj01 = {
  name: "Chitra",
};

let obj02 = {
  age: 20,
};

let obj03 = {
  city: "Mumbai",
};

let assign = myAssign(obj01, obj02, obj03);
console.log(assign);

//40
function objectDifference(obj1, obj2) {
  let result = {};

  let keys = new Set([
    ...Object.keys(obj1),
    ...Object.keys(obj2)
  ]);

  for (let key of keys) {
    if (obj1[key] !== obj2[key]) {
      result[key] = {
        first: obj1[key],
        second: obj2[key]
      };
    }
  }
  return result;
}

console.log(objectDifference(obj1, obj2));

//41
const obj41 = {};
obj41.self = obj41;

function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (seen.has(obj)) {
    return seen.get(obj);
  }
  const clone = Array.isArray(obj) ? [] : {};
  seen.set(obj, clone);

  for (const key in obj) {
    clone[key] = deepClone(obj[key], seen);
  }
  return clone;
}

//42
function pick(obj, properties) {
  const result = {};

  for (const property of properties) {
    if (property in obj) {
      result[property] = obj[property];
    }
  }

  return result;
}

console.log(pick(user, ["name", "age"]));

//43
function omit(obj, properties) {
  const result = { ...obj };

  for (const property of properties) {
    delete result[property];
  }
  return result;
}

console.log(omit(user, ["password", "age"]));
