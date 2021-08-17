import React, { useState } from "react";
import "../App.css";
function PlusMinusBtn() {
  const [state, setState] = useState({ count: 0 });
  const count = state.count;

  function decrementCount() {
    setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>

      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default PlusMinusBtn;
