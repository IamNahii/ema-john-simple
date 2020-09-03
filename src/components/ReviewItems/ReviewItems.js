import React from 'react';
import '../Products/Product.css';
const ReviewItems = (props) => {
    const {name, quantity, key, price} = props.product
    return (
        <div className="review-item">
            <h4 className="product-names">{name}</h4>
            <h5>Items: {quantity}</h5>
            <p>${price}</p>
            <button className="main-button" onClick={()=>props.removeProduct(key)}>remove</button>
        </div>
    );
};

export default ReviewItems;