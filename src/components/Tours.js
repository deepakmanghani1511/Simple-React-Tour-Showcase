import Card from "./Card";

function Tours( {tours, removeTour} ) {

    return (
        <div className="container">

            <div>
                <h2 className="title">Plan with Love</h2>
            </div>
            
            <div className="cards">
                {
                    // rather than writing <Card></Card> 7 times, we mapped it.
                    
                    tours.map( (tour) => {
                        // we're using the map() method to iterate over each tour object. The callback function takes each tour object as an argument (tour) and returns a new JSX element for each tour.
                        return <Card key={tour.id} {...tour} removeTour={removeTour} ></Card>;
                    } )
                }
            </div>

        </div>
    );
}

export default Tours;