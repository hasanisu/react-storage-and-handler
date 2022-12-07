import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        console.log('item selected', id)
    }

    const addToCartProd = ()=> addToCart(id);
    return (
        <div className='product'>
            <h3>Product Name: {name}</h3>
            <p>Price of it: ${price}</p>
            <p><small>Product id: {id}</small></p>
            <button onClick={addToCartProd}>Add to cart</button>
            <button onClick={()=> addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;