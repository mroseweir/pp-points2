import React, { useState, useEffect } from "react";
import Header from "../components/Header";
const axios = require("axios");

const baseURL = `http://localhost:4500/api/points`;

export default function StudentDirectory() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post[0].name}</h1>
    </div>
  );
}
