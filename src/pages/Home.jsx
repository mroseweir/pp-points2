import React from "react";
import Header from "../components/Header";
import PlusMinusBtn from "../../src/components/PlusMinusBtn";
function home() {
  return (
    <div>
      <Header />
      <PlusMinusBtn />
      <h1>Home</h1>
    </div>
  );
}

export default home;
