import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart)

        const cardProduct = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cardProduct)
    }, []);
    return (
        <div>
            <h1>Order Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItems
                    key ={pd.key}
                    product={pd}></ReviewItems>)
            }
        </div>
    );
};

export default Review;