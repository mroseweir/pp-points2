import React, {useState} from 'react'

function PlusMinusBtn() {
    const [state, setState] = useState({count: 0});
    const count = state.count;

    function decrementCount() {
        setState(prevState => {
            return {count: prevState.count - 1}
        })
    }

    function incrementCount() {
        setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    function incrementCountFive() {
        setState(prevState => {
            return {count: prevState.count + 5}
        })
    }

    function resetCount() {
        setState(prevState => {
            return {count: prevState.count = 0}
        })
    }

    return (
        <div>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            <button onClick={incrementCountFive}>+5</button>
        </div>
    )
}

export default PlusMinusBtn
