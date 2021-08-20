import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";

export default function AddStudent() {
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="student-entry">
          <h2>Student Entry</h2>
        </div>
        <form>
          <label for="student" placeholder="Student"></label>
          <input type="text" name="student" placeholder="Student"></input>
          <label for="cohort" placeholder="Cohort"></label>
          <input type="text" name="cohort" placeholder="Cohort"></input>
          <label for="specialization" placeholder="specialization"></label>
          <input
            type="text"
            name="specialization"
            placeholder="specialization"
          ></input>
          <input type="submit" name="add" placeholder="Submit"></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}
