
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function FoodDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://food-expiry-tracker-backend-6jtk.onrender.com/api/items/item/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`https://food-expiry-tracker-backend-6jtk.onrender.com/api/items/item/${id}`);
        navigate('/inventory');  
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{item.foodName}</h2>
      <img src={item.imageUrl || 'https://via.placeholder.com/150'} alt={item.foodName} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
      <p>Category: {item.category}</p>
      <p>Qty: {item.quantity}</p>
      <p>Expiry Date: {new Date(item.expiryDate).toLocaleDateString()}</p>

      {new Date(item.expiryDate) < new Date() && (
        <p style={{ color: 'red' }}>This item has expired!</p>
      )}

      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
        Delete Item
      </button>
    </div>
  );
}

export default FoodDetails;

