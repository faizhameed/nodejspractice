const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([7, 4, 1]);
    // reject("There is an error");
  }, 2000);
});

// Promise are nothing more than few objects that we can acess. So now how do we access the promise here?

doWorkPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
