//setting up default object when destructuring

const obj = {
  name: "faiz hameed",
  nested: {
    display: () => {
      console.log(this.name);
    },
  },
};

obj.nested.display(); // stil undefined

delete obj;
let ar = [1, 2, 3, 44, 5];
let maxNum = ar.reduce((a, b) => Math.max(a, b), 0);
console.log("Max", maxNum);

let arrObj = [
  { age: 35 },
  { age: 30 },
  { age: 25 },
  { age: 34 },
  { age: 75 },
  { age: 32 },
  { age: 45 },
];
let maxAge = arrObj.reduce(
  (a, b) => {
    if (a.age > b.age) return a;
    return b;
  },
  { age: 0 }
);

console.log("maxage", maxAge);
