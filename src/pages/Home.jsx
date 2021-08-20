import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import logo from "./unicorn.svg";
// import PlusMinusBtn from "../../src/components/PlusMinusBtn";
function home() {
  return (
    <div>
      <Header />
      <div className="logo-div">
        <h1 className="be-a">BE A</h1>
        <img src={logo} alt="A Unicorn"></img>
        <h1 className="champion">CHAMPION</h1>
      </div>
      <Footer />
    </div>
  );
}

export default home;
