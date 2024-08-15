import React, { useState } from 'react';
import Card from './Card.js';
import ProductDate from './ProductDate.js';


const ProductItem = (props) => {
    const [title, setTitle] = useState(props.title);

    function clickHandler(){
        setTitle("popcorn");
        console.log("Button Clicked")
    }
    return (
        <Card className='product-item'>
            <div className='product-item__description'>
                <h2>{title}</h2>
                <div className='product-item__price'>${props.amount}</div>
            </div>
            <ProductDate date={props.date} />

            <button onClick={clickHandler}>Add To Cart</button>
        </Card>
    );
};

export default ProductItem;
