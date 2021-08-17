const data = require("../database/data.json");
id = 2;
module.exports = {
  getPoints: (res, req) => {
    res.status(200).send(data);
  },
  //update Points
  //add Student
};
