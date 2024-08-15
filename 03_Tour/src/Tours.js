

import Card from "./Card";

function Tour({tours, removeTour}){
    return(
        <div>
        <div>
            <h2>Tour planing</h2>
        </div>

        <div>
            {
                tours.map((tour) => {
                    return(<Card key = {tour.id} {...tour} removeTour = {removeTour}></Card>)
                })
            }
        </div>

    </div>
    );
}
export default Tour;