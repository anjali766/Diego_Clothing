import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './details.css';

const Detail = () => {
    const { id } = useParams();
    const product = useSelector((state) =>
        state.products.items.find((product) => product.id === parseInt(id))
    );

    if (!product) return <p>Product not found</p>;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };


    return (
        <div className="alldiv">
            <div className="detail">
            <img src={product.image} alt={product.title} />
            <button className='dcartbtn' onClick={handleAddToCart}>Add to Cart</button>
            <Link to='/products' ><button className='backbtn'>back</button></Link>
            </div>
            
            <div className="product-detail">
            <h1>{product.title}</h1>
            <br/>
            <p>{product.description}</p>
            <br/>
            <p>${product.price}</p>
            </div>
        </div>
       
    );
}

export default Detail;
