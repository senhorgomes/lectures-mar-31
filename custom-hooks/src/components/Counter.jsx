import { useState } from "react";
import useCounter from "../hooks/useCounter";
function Counter() {

    // useState
    // state, setState
    // one allows us to retrieve the value of state, and the other allows us to set it
    // getter, and setter
    // const [count, setCount] = useState(0);

    // Increase
    // Decrease
    // Reset it => 0
    const {count, handleDecrease, handleIncrease, handleReset} = useCounter();
    // setCount() calling it/invoking
    // () => setCount()

    // Function
    // const handleIncrease = () => {
    //     setCount(count + 1);
    // }

    // const handleDecrease = () => {
    //     setCount(count - 1);
    // }

    // const handleReset = () => {
    //     setCount(0);
    // }

    return ( 
        <>
            <h1>Count: {count}</h1>
            <button onClick={() =>handleIncrease()}>Increase</button>
            <button onClick={() => handleReset()}>Reset</button>
            <button onClick={() => handleDecrease()}>Decrease</button>
        </>
     );
}

export default Counter;