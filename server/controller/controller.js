const data = require("../database/data.json");
id = 2;
module.exports = {
  getPoints: (res, req) => {
    res.status(200).send(data);
  },
  //add Points
  //add Student
};
