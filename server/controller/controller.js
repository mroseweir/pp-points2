const data = require("../database/data.json");
const login = require("../database/login.json");
let id = 2;
module.exports = {
  getPoints: (res, req) => {
    res.status(200).send(data);
  },
  getLogin: (res, req) => {
    res.status(200).send(login);
  },
  addStudent: (res, req) => {
    let { name, cohortId, specialization } = req.body;
    cohortId = +cohortId;
    const newStudent = {
      id: id,
      name,
      cohortId,
      specialization,
      points: 0,
    };
    data.push(newStudent);
    id++;
    res.status(200).send(data);
  },
  deletePoints: (req, res) => {
    const { id } = req.params;

    const index = data.findIndex((student) => {
      return student.id === +id;
    });
    if (id === -1) {
      res.status(400).send({ error: "That is not a valid ID" });
    } else {
      data.splice(index, 1);
      res.status(200).send(data);
    }
  },
  updatePoints: (req, res, next) => {
    const { id } = req.params;
    const { type } = req.body;

    const index = data.findIndex((student) => {
      return student.id === +id;
    });

    if (type === "plus1") {
      data[index].points += 1;
      res.status(200).send(data);
    } else if (type === "plus5") {
      data[index].points += 5;
      res.status(200).send(data);
    } else if (type === "minus1") {
      data[index].points -= 1;
      res.status(200).send(data);
    }
  },
};
