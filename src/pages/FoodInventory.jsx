import React, { useState, useEffect } from 'react';
import axios from 'axios';
import vegetables from '../image/vegetables.jpg';
import snacks from '../image/snacks.jpg';
import fruits from '../image/fruits.jpg';
import milk from '../image/milk.jpg';
import Nonveg from '../image/Nonveg.jpg';
import sweets from '../image/sweets.jpg';
import '../App.css';

const categoryImageMap = {
  Vegetables: vegetables,
  Snacks: snacks,
  Fruits: fruits,
  Dairy: milk,
  Nonveg: Nonveg,
  Sweets: sweets,
};

const categoriesData = [
  { id: 'Vegetables', name: 'Vegetables', image: vegetables },
  { id: 'Snacks', name: 'Snacks', image: snacks },
  { id: 'Fruits', name: 'Fruits', image: fruits },
  { id: 'Dairy', name: 'Dairy', image: milk },
  { id: 'Nonveg', name: 'Nonveg', image: Nonveg },
  { id: 'Sweets', name: 'Sweets', image: sweets },
];

function FoodInventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items/items');
      if (Array.isArray(response.data)) {
        setItems(response.data);
      } else {
        console.error('Response not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const searchItemsByName = async (name, category) => {
    try {
      let url = `http://localhost:5000/api/items/search?name=${name}`;
      if (category) {
        url += `&category=${category}`;
      }
      const response = await axios.get(url);
      if (Array.isArray(response.data)) {
        setItems(response.data);
      } else {
        console.error('Search response not array:', response.data);
      }
    } catch (error) {
      console.error('Error searching items:', error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expired item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/items/item/${id}`);
        fetchItems();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  const isExpired = (expiryDate) => {
    const today = new Date();
    return new Date(expiryDate) < today;
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      fetchItems();
    } else {
      searchItemsByName(searchTerm, selectedCategory);
    }
  }, [searchTerm, selectedCategory]);

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesCategory;
  });

  return (
    <div className="inventory-container" style={{ padding: '20px' }}>
      <h2>Food Inventory</h2>

      <input
        type="text"
        placeholder="Search food items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '30px', padding: '8px', width: '250px' }}
      />

    
      <div className="categories-grid" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {categoriesData.map(category => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            style={{
              cursor: 'pointer',
              border: selectedCategory === category.name ? '2px solid blue' : '1px solid gray',
              borderRadius: '8px',
              padding: '5px'
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p style={{ textAlign: 'center' }}>{category.name}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <button
            onClick={() => setSelectedCategory('')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ddd',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Show All Categories
          </button>
        </div>
      )}

     
      <div className="items-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          filteredItems.map(item => (
            <div key={item._id} className="item-card" style={{
              border: '1px solid gray',
              padding: '10px',
              borderRadius: '8px',
              width: '250px'
            }}>
              <img
                src={categoryImageMap[item.category] || 'https://via.placeholder.com/150'}
                alt={item.foodName}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h4>{item.foodName}</h4>
              <p><strong>Name:</strong> {item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>Expiry: {new Date(item.expiryDate).toLocaleDateString()}</p>
              <p>Category: {item.category}</p>

              {isExpired(item.expiryDate) && (
                <button
                  onClick={() => handleDelete(item._id)}
                  style={{
                    marginTop: '10px',
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '5px',
                    width: '100%'
                  }}
                >
                  Delete Expired
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FoodInventory;
