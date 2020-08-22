const add = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};

add(1, 2)
  .then((sum) => {
    console.log("sum", sum);
    return add(sum, 10);
  })
  .then((sum2) => console.log("sum2", sum2))
  .catch((e) => console.log(e));
// the code is not nested here so we can do more async calls after one another
