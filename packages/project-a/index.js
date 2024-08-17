const _ = require("lodash");
module.exports = {
  add: (a, b) => a + b,
  print(a) {
    console.log(_.join(["Hello", a], " ~"));
  },
};