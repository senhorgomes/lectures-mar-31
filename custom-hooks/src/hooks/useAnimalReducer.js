import { useReducer } from "react";

// useReducer needs two thing, an intialstate and a function, reducer

// const [viewState, setViewState] = useState({
//       index: 0,
//       history: [0]
//     });

const intialState = {
  index: 0,
  history: [0],
};

function animalReducer(state, action) {
  // NEXT, PREV, RESET, RANDOM
  // Action will be an object
  // payload
  // action
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        history: [...state.history, state.index + 1],
        index: state.index + 1,
      };

    case "PREV":
      const modifiedHistory = [...state.history].slice(0, -1);
      return {
        ...state,
        history: modifiedHistory,
        index: modifiedHistory.at(-1),
      };
    case "RESET":
      return {
        ...state,
        history: [0],
        index: 0,
      };
    case "RANDOM":
      const randomIndex = Math.floor(Math.random() * action.payload - 1);
      return {
        ...state,
        history: [...state.history, randomIndex],
        index: randomIndex,
      };
    default:
      return state;
  }
}

function useAnimalReducer(maxIndex) {
    const [viewState, dispatch] = useReducer(animalReducer, intialState);


  const handleNext = () => {
    // setCount(count + 1);
    // We need to set the next count
    // And adding the next element into the history array

    // setViewState((prev) => ({
    //   history: [...prev.history, prev.index + 1],
    //   index: prev.index + 1,
    // }));
    dispatch({
        type: "NEXT"

    });
  };

  const handlePrevious = () => {
    dispatch({
        type: "PREV"
    });
  };

  const handleReset = () => {
    dispatch({
        type: "RESET"
    });
  };

  const handleRandom = () => {
    dispatch({
        type: "RANDOM",
        payload: maxIndex
    });
  };

  return { viewState, handleNext, handlePrevious, handleRandom, handleReset };
}

export default useAnimalReducer;