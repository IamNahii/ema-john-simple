import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }
    const total = cart.reduce((total, product) => total + product.price, 0)
    return (
        <div>
            <h3>Ordered Summary</h3>
            <p>Ordered Items: ${cart.length}</p>
            <p>Total: ${total}</p>
            <br/>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;