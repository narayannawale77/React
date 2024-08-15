import React from 'react';
import Card from './Card';
import ProductItem from './ProductItem';
const Product = (props) => {
    return (
        <Card className="product">
            {props.items.map((item) => (
                <ProductItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
}

export default Product;
