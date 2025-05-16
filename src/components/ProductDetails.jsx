import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p><strong>Expiry Date:</strong> {product.expiryDate}</p>
    </div>
  );
};

export default ProductDetails;

