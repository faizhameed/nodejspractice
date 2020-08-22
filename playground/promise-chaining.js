require("../../task-manager/src/db/mongoose");

const User = require("../../task-manager/src/models/user");
//5f39040675c7a418f2c2fd0b

User.findByIdAndUpdate("5f39040675c7a418f2c2fd0b", { age: 35 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 35 });
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
