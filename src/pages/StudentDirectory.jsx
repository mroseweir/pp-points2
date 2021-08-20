import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
const axios = require("axios");

const baseURL = `http://localhost:4500/api/points`;

export default function StudentDirectory() {
  const [post, setPost] = useState(null);
  const [input, setInput] = useState(0);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);

  if (!post) return null;

  // function handleChange(a) {
  //   setInput(a);
  //   console.log(a);
  // }

  // function submit() {
  //   console.log(input);
  // }

  return (
    <div>
      <Header />
      <h1>Student Directory</h1>
      {/* <input onChange={(e) => handleChange(e.target.value)}></input>
      <button onClick={() => submit()}>Submit</button> */}
      <div className="directoryContainer">
        <div className="keyCard">
          <p className="keyInfo">Name</p>
          <p className="keyInfo">Cohort</p>
          <p className="keyInfo">#PP-Points</p>
        </div>
        {post.map((student, index) => (
          <div className="studentCard">
            <p className="studentInfo">{post[index].name}</p>
            <p className="studentInfo">{post[index].cohort}</p>
            <p className="studentInfo">{post[index].points}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

// onChange={ (e) => this.handleChange(e.target.value)}
