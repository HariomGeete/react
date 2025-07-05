import React from 'react';
import ProductCard from '../PRODUCTCARD/ProductCard.jsx';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling, Bluetooth 5.0',
    price: 1499,
    image: 'burger.png',
  }
  ,

  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling, Bluetooth 5.0',
    price: 14990,
    image: 'burger.png',
  }
  ,
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling, Bluetooth 5.0',
    price: 14991,
    image: 'burger.png',
  }
  // Add more products as needed
];

const Product = ({ onAddToCart, onToggleWishlist }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
};

export default Product;
