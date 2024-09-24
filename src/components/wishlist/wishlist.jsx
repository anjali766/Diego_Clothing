import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WishlistClear, wishlistRemove } from '../../redux/slices/wishlistSlice';
import { addItem } from '../../redux/slices/CartSlice';
import './wishlist.css';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const Remove = (items) => {
        dispatch(wishlistRemove(items));
    };

    const MoveToCart = (item) => {
        dispatch(addItem(item));
        dispatch(wishlistRemove(item));
    };

    const clearlist = (item) => {
      dispatch(WishlistClear())
    };

  return (
    <div className="wishlist">
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className='contentDiv'>
                <h3 className='wishlistTitle'>{item.title}</h3>
                <img className='wishlistimg' src={item.image} alt={item.title} />
                <p>${item.price}</p>
                <button onClick={() => MoveToCart(item)} className='cartmovebtn'>Move to Cart</button>
                <button onClick={() => Remove(item)}className='wishRemove'>Remove</button>
            </div> 
          ))}
           
        </div>
        <button onClick={clearlist} className='clearbtn'>Clear</button>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
