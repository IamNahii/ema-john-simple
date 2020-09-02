import React from 'react';
import '../Products/Product.css';
const ReviewItems = (props) => {
    const {name, quantity} = props.product
    return (
        <div className="review-item">
            <h4 className="product-names">{name}</h4>
            <h5>Items: {quantity}</h5>
            <button className="main-button">remove</button>
        </div>
    );
};

export default ReviewItems;