import React, { useState } from "react";
import Card from "./components/Card";
import data from "./data";

const App = () => {

  const [tours, setTours] = useState(data);
  
  function removeTourHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  
  if(tours.length === 0) {
    
    return (
        <div className="refresh">

          <h2>No Tours Left</h2>

          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>

        </div>
    );
  
  }
  

  return (

    <div className="App">

        <div className="container"> 

          <div>
            <h2 className="title">Plan with Love</h2>
          </div>

          <div className="cards">
            {
                // rather than writing <Card></Card> 7 times, we mapped it.
                
                tours.map( (tour) => {
                    // we're using the map() method to iterate over each tour object. The callback function takes each tour object as an argument (tour) and returns a new JSX element for each tour.
                    return <Card key={tour.id} {...tour} removeTour={removeTourHandler}></Card>;
                } )
            } 
                      
          </div>
        </div>    
    </div>
  );
}

export default App;