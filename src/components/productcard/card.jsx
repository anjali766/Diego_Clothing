import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/CartSlice';
import { wishlistAdd } from '../../redux/slices/wishlistSlice';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './card.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
        alert('Added to Cart!')
    };

    const addToWishlist = () => {
        dispatch(wishlistAdd(product));
        alert('Added to Wishlist!')
    };

    return (
        <div className="product-card">
            <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
            <br/>
            <img className='product-image' src={product.image} alt={product.title} />
            <p className='product-price'>${product.price}</p>
            <br/><br/>
            <button className='cartbtn' onClick={handleAddToCart}>Add to Cart</button>
            <button className='wishbtn' onClick={addToWishlist}><FaHeartCirclePlus /></button>
        </div>
    );
}

export default ProductCard;
