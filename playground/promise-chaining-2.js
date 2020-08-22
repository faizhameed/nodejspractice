require("../../task-manager/src/db/mongoose");

const Task = require("../../task-manager/src/models/task");

//5f3fc2019240fac4316dbdba

Task.findByIdAndDelete("5f3fc2019240fac4316dbdba")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ complete: true });
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

Task.countDocuments({}).then((result) => {
  console.log("Printing total count", result);
});
