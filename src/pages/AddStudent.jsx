import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";

const baseURL = `http://localhost:4500/api/points`;

export default function AddStudent() {
  const [post, setPost] = React.useState(null);
  const [studentInput, setStudentInput] = useState("");
  const [cohortInput, setCohortInput] = useState("");
  const [specializationInput, setSpecializationInput] = useState("");

  function handleStudentInput(a) {
    // a.preventDefault();
    setStudentInput(a);
  }
  function handleCohortInput(a) {
    // a.preventDefault();
    setCohortInput(a);
  }
  function handleSpecializationInput(a) {
    // a.preventDefault();
    setSpecializationInput(a);
  }

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost(studentInput, cohortInput, specializationInput) {
    console.log("test");
    axios
      .post(baseURL, {
        name: studentInput,
        cohort: cohortInput,
        specialization: specializationInput,
      })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }
  if (!post) return "No Post!";
  // console.log(studentInput, cohortInput, specializationInput);
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="student-entry">
          <h2>Student Entry</h2>
        </div>
        <form>
          <label for="student" placeholder="Student"></label>
          <input
            type="text"
            name="student"
            placeholder="Student"
            // onChange={(e) => setStudentInput((studentInput = e.target.value))}
            onChange={(e) => handleStudentInput(e.target.value)}
          ></input>
          <label for="cohort" placeholder="Cohort"></label>
          <input
            type="text"
            name="cohort"
            placeholder="Cohort"
            onChange={(e) => handleCohortInput(e.target.value)}
          ></input>
          <label for="specialization" placeholder="specialization"></label>
          <input
            type="text"
            name="specialization"
            placeholder="specialization"
            onChange={(e) => handleSpecializationInput(e.target.value)}
          ></input>

          <input
            type="submit"
            name="add"
            placeholder="Submit"
            onSubmit={createPost(
              studentInput,
              cohortInput,
              specializationInput
            )}
          ></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}
