require("../../task-manager/src/db/mongoose");

const Task = require("../../task-manager/src/models/task");

//5f3fc2019240fac4316dbdba

// Task.findByIdAndDelete("5f3fc2019240fac4316dbdba")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ complete: true });
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

// Task.countDocuments({}).then((result) => {
//   console.log("Printing total count", result);
// });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ complete: false });
  return count;
};

deleteTaskAndCount("5f409dfba21b1757e7b5767e")
  .then((count) => console.log("the total document count", count))
  .catch((e) => console.log(e));
