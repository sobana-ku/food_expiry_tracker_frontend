
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';   
import '../App.css';

const Additem = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newItem = {
        name: foodName,
        quantity: Number(quantity),
        expiryDate,
        category,
      };

      const response = await axios.post('https://food-expiry-tracker-backend-6jtk.onrender.com/api/items/add', newItem);

      alert(response.data.message || "Item added successfully");

      
      setFoodName('');
      setQuantity('');
      setExpiryDate('');
      setCategory('');

      navigate('/inventory');

    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Food Item</h2>
      <form onSubmit={handleSubmit} className="add-item-form">
        <label>Food Name</label>
        <input
          type="text"
          placeholder="Enter food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <label>Expiry Date</label>
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Nonveg">Nonveg</option>
          <option value="Snacks">Snacks</option>
          <option value="Sweets">Sweets</option>
          <option value="Dairy">Dairy</option>
        </select>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Additem;
