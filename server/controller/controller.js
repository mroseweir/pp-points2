const data = require("../database/data.json");
const login = require("../database/login.json");
let id = 2;
module.exports = {
  getPoints: (req, res) => {
    res.status(200).send(data);
  },
  getLogin: (req, res) => {
    res.status(200).send(login);
  },
  addStudent: (req, res) => {
    let { name, cohort, specialization } = req.body;
    const newStudent = {
      id: id,
      name: name,
      cohort: cohort,
      specialization: specialization,
      points: 0,
      milestone1: false,
      milestone2: false,
      milestone3: false,
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
  updateMilestone: (req, res, next) => {
    const { id } = req.params;
    const { type } = req.body;
    const sendIt = res.status(200).send(data);
    const index = data.findIndex((student) => {
      return student.id === +id;
    });

    if (type === "m1t") {
      data[index].milestone1 = true;
      sendIt;
    } else if (type === "m2t") {
      data[index].milestone2 = true;
      sendIt;
    } else if (type === "m2t") {
      data[index].milestone3 = true;
      sendIt;
    } else if (type === "m1f") {
      data[index].milestone1 = false;
      sendIt;
    } else if (type === "m2f") {
      data[index].milestone2 = false;
      sendIt;
    } else if (type === "m3f") {
      data[index].milestone3 = false;
      sendIt;
    }
  },
};
