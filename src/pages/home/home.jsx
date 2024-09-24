import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
    return(
        <div className="main">
                <div className='content'>
                <h1>Welcome to Our Store</h1>
                <br/>
                <p>Discover the latest trends and exclusive offers. Explore our diverse range of products and find what you love.</p>
                <br/>
                <Link to='/products'><button type='button'>Shop Now</button></Link>
                </div>
                <div className='images'>
                    <img src='two.jpg'alt='Error' className='bgimg4'/>
                    <img src='eight.jpg'alt='Error' className='bgimg3'/>
                    <img src='five.jpg'alt='Error' className='bgimg2'/>
                    <img src='one.jpg'alt='Error' className='bgimg'/>
                </div>
        </div>
    )
}

export default Home