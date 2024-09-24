import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/productcard/card';
import './Products.css';

const Products = () => {
    const products = useSelector((state) => state.products.items);

    return (
        <div className="products">
            {/* <h1>Products</h1> */}
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
