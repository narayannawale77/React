import React from "react";
import {useState} from "react";
import data from "./data"
import Tour from "./Tours";

const App = () => {
  const [tours, setTour] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button onClick={() => setTour(data)}>
            Refresh
          </button>
        </div>
    );
  }
  return(
    <div>

      <Tour tours = {tours} removeTour = {removeTour}></Tour>

    </div>
  )
};

export default App;
