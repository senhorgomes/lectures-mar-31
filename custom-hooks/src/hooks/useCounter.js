import { useState } from "react";

const useCounter = () => {
    // When working with state we should avoid complex states
    const [count, setCount] = useState(0);

    // custom hook need a way to increase, decrease, and reset our count state
    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        setCount(count - 1);
        // DECREASE_COUNT
    }

    const handleReset = () => {
        setCount(0);
        // RESET_COUNT
    }

    // Return what we need for our Animal Viewer component

    // return [count,handleIncrease, handleDecrease, handleReset];
    return {
        count,
        handleIncrease,
        handleDecrease,
        handleReset
    };
}

export default useCounter;