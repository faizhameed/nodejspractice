require("../../task-manager/src/db/mongoose");

const User = require("../../task-manager/src/models/user");
//5f39040675c7a418f2c2fd0b

// User.findByIdAndUpdate("5f39040675c7a418f2c2fd0b", { age: 35 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 35 });
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5f39040675c7a418f2c2fd0b", 60)
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
