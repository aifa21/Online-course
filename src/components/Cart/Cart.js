import React from 'react';
import './Cart.css';
const Cart = (props) => {

    const cart = props.cart;


    const total = (cart.reduce((total, prd) => total + prd.price, 0));
    const grandTotal = total.toFixed(2);

    
    
    return (
        <div className="cart">
            <h4> <strong>Order Summery</strong> </h4>
            <br/>
            <p> <strong>Items Ordered: {cart.length}</strong> </p>
            <p> <strong>Total Price: {grandTotal}</strong> </p>
        </div>
    );
};

export default Cart;