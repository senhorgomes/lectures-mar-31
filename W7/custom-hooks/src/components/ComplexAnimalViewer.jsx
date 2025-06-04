import { useState } from "react";
import useCounter from "../hooks/useCounter";
import useAnimalReducer from "../hooks/useAnimalReducer";
function ComplexAnimalViewer() {
    const mockData = [{
        "id": 1,
        "animal": "Stork, european",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, odio rhoncus consectetur cursus, tortor purus vulputate nisl, vestibulum aliquet metus arcu sagittis metus. Suspendisse placerat et tortor id ornare. Proin ac facilisis nisl, nec elementum justo. Vivamus tempus lacus turpis, in pharetra ante tempor et.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ringed_white_stork.jpg/900px-Ringed_white_stork.jpg"
      }, {
        "id": 2,
        "animal": "Kangaroo, western grey",
        "description": "Praesent vehicula, magna ut efficitur suscipit, massa risus tristique justo, dapibus iaculis felis libero a nisi. In quis consequat elit. In vel condimentum justo, accumsan sodales augue. Sed accumsan ut ipsum in ornare. Etiam quis sollicitudin augue.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG"
      }, {
        "id": 3,
        "animal": "Sable antelope",
        "description": "Cras tempus quam non dapibus ornare. Ut id maximus turpis, sed viverra arcu. Sed ultrices nulla sed ipsum tempor, ut consectetur urna facilisis.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Sable_antelope_%28Hippotragus_niger%29_adult_male.jpg"
    
      }, {
        "id": 4,
        "animal": "Manatee",
        "description": "Donec consectetur finibus nisi, ut vulputate sem iaculis a. Fusce volutpat suscipit placerat. Cras viverra, sapien ut sollicitudin euismod, dolor augue eleifend nisl, sit amet hendrerit nisl mi a ante. ",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/Trichechus_Diversity.jpg"
      }, {
        "id": 5,
        "animal": "Springbok",
        "description": "Praesent vehicula, magna ut efficitur suscipit, massa risus tristique justo, dapibus iaculis felis libero a nisi. In quis consequat elit. In vel condimentum justo, accumsan sodales augue. Sed accumsan ut ipsum in ornare. Etiam quis sollicitudin augue.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Antidorcas_marsupialis%2C_male_%28Etosha%2C_2012%29.jpg"
      }, {
        "id": 6,
        "animal": "Weaver, red-billed buffalo",
        "description": "Praesent vehicula, magna ut efficitur suscipit, massa risus tristique justo, dapibus iaculis felis libero a nisi. In quis consequat elit. In vel condimentum justo, accumsan sodales augue. Sed accumsan ut ipsum in ornare. Etiam quis sollicitudin augue.",
        "image": "https://en.wikipedia.org/wiki/Red-billed_buffalo_weaver#/media/File:Red-billed_Buffalo_Weaver.jpg"
      }, {
        "id": 7,
        "animal": "Bulbul, black-eyed",
        "description": "Donec consectetur finibus nisi, ut vulputate sem iaculis a. Fusce volutpat suscipit placerat. Cras viverra, sapien ut sollicitudin euismod, dolor augue eleifend nisl, sit amet hendrerit nisl mi a ante. ",
        "image": "https://en.wikipedia.org/wiki/Dark-capped_bulbul#/media/File:Dark-capped_Bulbul_(Pycnonotus_tricolor_tricolor).jpg"
      }, {
        "id": 8,
        "animal": "Yellow mongoose",
        "description": "Morbi faucibus, odio rhoncus consectetur cursus, tortor purus vulputate nisl, vestibulum aliquet metus arcu sagittis metus.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Cynictis_penicillata_%28Etosha%2C_2011%29.jpg"
      }, {
        "id": 9,
        "animal": "Hare, arctic",
        "description": "Suspendisse placerat et tortor id ornare. Proin ac facilisis nisl, nec elementum justo. Vivamus tempus lacus turpis, in pharetra ante tempor et. Praesent vehicula, magna ut efficitur suscipit, massa risus tristique justo, dapibus iaculis felis libero a nisi. In quis consequat elit.",
        "image": "https://en.wikipedia.org/wiki/Arctic_hare#/media/File:Arctic_Hare_1.jpg"
      }, {
        "id": 10,
        "animal": "Fox, arctic",
        "description": "Donec consectetur finibus nisi, ut vulputate sem iaculis a. Fusce volutpat suscipit placerat. Cras viverra, sapien ut sollicitudin euismod, dolor augue eleifend nisl, sit amet hendrerit nisl mi a ante.",
        "image": "https://en.wikipedia.org/wiki/Arctic_fox#/media/File:Iceland-1979445_(cropped_3).jpg"
      }]
    // const {handleReset, count, handleIncrease, handleDecrease} = useCounter();
    // [count,handleIncrease, handleDecrease, handleReset]
    // const [viewState, setViewState] = useState({
    //   index: 0,
    //   history: [0]
    // });

    // const handleNext = () => {
    //     // setCount(count + 1);
    //     // We need to set the next count
    //     // And adding the next element into the history array
     
    //     setViewState((prev)=> ({
    //       history:[...prev.history, prev.index + 1], 
    //       index: prev.index + 1
    //     }));

    // }

    // const handlePrevious = () => {
    //   const modifiedHistory = [...viewState.history].slice(0,-1);
    //   setViewState(()=> ({
    //     // Remove the last element in the array
    //     // Set the index to be the next last element
        
    //     history:modifiedHistory, 
    //     index: modifiedHistory.at(-1)
    //   }));
    // }

    // const handleReset = () => {
    //   setViewState(()=> ({
    //     history:[0], 
    //     index: 0
    //   }));
    // }

    // const handleRandom = () => {
    //   // This will generate a random index between 0-9
    //   const randomIndex = Math.floor(Math.random() * mockData.length - 1);
    //   // setCount(randomIndex);
    //   setViewState((prev)=> ({
    //     history:[...prev.history, randomIndex], 
    //     index: randomIndex
    //   }));
    // }
    // I want to create a history of animals viewed
    // [0, 3, 4, 8]
    const {viewState, handleNext, handlePrevious, handleReset, handleRandom} = useAnimalReducer(mockData.length)
    return ( 
        <>
            <h1>{mockData[viewState.index].animal}</h1>
            <p>{mockData[viewState.index].description}</p>
            <img src={mockData[viewState.index].image} style={{width:"400px"}}/>
            <div>
            <button onClick={() => handlePrevious()}>Previous</button>
            <button onClick={() => handleRandom()}>Random Animal</button>
            <button onClick={() => handleReset()}>Reset</button>
            <button onClick={() =>handleNext()}>Next</button>
            </div>
        </>
     );
}

export default ComplexAnimalViewer;