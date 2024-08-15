import {useState} from "react";

function Card({id, name, image, price,info, removeTour}){

    const[readMore, setReadMore] = useState(true);

    let description = info;
    if(readMore) description = info.substring(0, 200);

    let read;
    if(readMore) read = "Read More";
    else read = "show Less"

    function readMoreHandler(){
        setReadMore(!readMore);
    }
    return (
        <div>
            <img src = {image}></img>
            <div>
                <h4>₹ {price}</h4>
                <h4>{name}</h4>
            </div>
            <div>
                {description}
                <span onClick={readMoreHandler}>
                    {read}
                </span>
            </div>
            <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    );
}
export default Card;