const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "we dont have any error");
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.error(error);
  }
  console.log(result);
});
