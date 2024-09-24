import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart, quantityUpdate } from '../../redux/slices/CartSlice';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    const quantityChange = (item,event) =>{
        const quantity = parseInt(event.target.value , 10);
        if(quantity >= 1) {
            dispatch(quantityUpdate({ id: item.id,quantity}));
        }
    };
    const billTotal = items.reduce((totalPrice,item) => totalPrice + (item.price * item.quantity), 0);
    return (
        <div className="cart">
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='main'>
                    {items.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className='desc'>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                                <input type='number' min='1' value={item.quantity} onChange={(event) => quantityChange(item,event)} />
                                <button className='removebtn' onClick={() => handleRemove(item)}>Remove</button>
                            </div>
                        </div>
                    ))}<br/>
                    <button onClick={handleClear}>Clear Cart</button>
                    <div className='summary'>
                    <h3>Total Price: ${billTotal.toFixed(2)}</h3>
                    <br/>
                    <Link to='/checkout'><button className='checkout'>Checkout</button></Link>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Cart;
