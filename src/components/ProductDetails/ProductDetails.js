import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const ProductDetails = () => {
    const {ProductKey} = useParams()
    const product = fakeData.find(pd => pd.key === ProductKey);
    return (
        <div>
            <h2>Your product is rady</h2>
            <Product showAddToCart={false} product = {product}></Product>
        </div>
    );
};

export default ProductDetails;