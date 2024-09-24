import React from 'react';
import { Link } from 'react-router-dom';
// import { MdShoppingCart } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import './navbar.css';
import { useSelector } from 'react-redux';

const Nav = () => {
    const count = useSelector((state) => state.cart.items.reduce((totalPrice,item) => totalPrice + item.quantity,0));
    return(
        <div className="navbar">
            <h1 className='logo'>Diego.</h1>
            <ul className='navopt'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                {/* <li></li> */}
            </ul>
            <div className="cart">
            <Link to='/wishlist' className='heart'><FaHeart size={20}/></Link>
            <Link to='/cart'><GiShoppingCart size={20}/><span >{count}</span></Link>
            </div>
        </div>
    )
}

export default Nav;
