import React, { useState } from 'react';
import ProductDetails from '../components/ProductDetails'; // Import ProductDetails component
import ProductCard from '../components/ProductCard'; // Import ProductCard component

const products = [
  {
    id: 1,
    name: 'Milk',
    expiryDate: '2025-05-10',
    image: 'path_to_milk_image.jpg', // Replace with your image URL
    category: 'Dairy',
  },
  {
    id: 2,
    name: 'Cheese',
    expiryDate: '2025-06-15',
    image: 'path_to_cheese_image.jpg',
    category: 'Dairy',
  },
  // Add more products here
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={handleProductClick} />
        ))}
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default ProductList;
