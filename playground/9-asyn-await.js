const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async (s) => {
  const sum = await add(10, 23);
  return sum + s;
}; //returns promise always

// code is cleaner with async await
// variable scope is available to the entire function unlike promise chaining

doWork("sayed").then((result) => console.log(result));
