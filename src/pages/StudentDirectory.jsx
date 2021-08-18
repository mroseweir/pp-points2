import React, { Component } from "react";
import Header from "../components/Header";

const axios = require("axios");

let students = require("../dataTest.json");
// console.log(students);

const getStudents = () => {
  axios.get("http://localhost:4500/api/points").then((res) => {
    console.log(res.data);
    return res.data;
  });
};

getStudents();

const StudentList = (props) => {
  return (
    <div>
      {students.map((profile) => (
        <Card {...profile} />
      ))}
    </div>
  );
};

class Card extends Component {
  render() {
    const student = this.props;
    // console.log(student);
    return (
      <div
        className="student-info"
        style={{
          backgroundColor: "#0177a9",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          margin: "15px",
        }}
      >
        <div>Name: {student.name} </div>
        <div>Cohort: {student.cohort} </div>
        <div>Points: {student.points}</div>
      </div>
    );
  }
}

class StudentApp extends Component {
  render() {
    return (
      <div>
        <StudentList />
      </div>
    );
  }
}

export default function StudentDirectory() {
  return (
    <div>
      <Header />
      <h1>Student Directory</h1>
      <StudentApp />
    </div>
  );
}
