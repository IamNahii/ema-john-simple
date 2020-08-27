import React from 'react';

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
        </div>
    );
};

export default Cart;