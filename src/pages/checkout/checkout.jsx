import React from 'react';
import { clearCart } from '../../redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import './checkout.css';
import { useDispatch, useSelector } from 'react-redux';

const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const checkoutSubmit = () =>{
        dispatch(clearCart());
        alert('Thankyou for Purchasing!');
        navigate('/products');
    }

    const Total = items.reduce((total,item) => total + (item.price * item.quantity), 0);
    return (
        <div className="div">
            <div className="chck-detail">
                <h3>Order Summary</h3>
                {items.map(item => (
                        <div key={item.id} className='order'>
                                <p>{item.title}({item.quantity})</p>
                                <p>${item.price}</p>
                        </div>
                    ))}
                    <h4>Total Price: ${Total.toFixed(2)}</h4>
            </div>

            <div className="chck-form" >
                <h3>Shipping Information</h3>
                <form onSubmit={checkoutSubmit}>
                    <input autoComplete='off' type='text' name='Name' placeholder='Enter Your Name' required />
                    <input autoComplete='off' type='number' name='phone' placeholder='Enter Your Phone Number' required />
                    <input autoComplete='off' type='text' name='Address' placeholder='Enter Your Address' required />
                    <select className='selectlist' autoComplete="off" name='Payment' required>
                    <option selected hidden>choose Payment Method</option>
                        <option>Paypal</option>
                        <option>Credit Card</option>
                        <option>Paytm</option>
                    </select>
                    <button type='submit'>Proceed</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;
