import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import '../App.css';

const PriceChangeForm = ({ restaurants }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');
  const [newPrice, setNewPrice] = useState('');
  console.log("Restaurants: ", restaurants);

  const safeRestaurants = restaurants || [];

  const restaurantOptions = safeRestaurants.map(r => ({ label: r.name, value: r.id }));

  let itemOptions = [];
  const selectedRestaurant = safeRestaurants.find(r => r.id === selectedRestaurantId);
  if (selectedRestaurant && selectedRestaurant.menu) {
    itemOptions = selectedRestaurant.menu.map(i => ({ label: i.name, value: i.id }));
  }

  const handleRestaurantSelect = (restaurantId) => {
    setSelectedRestaurantId(restaurantId);
    setSelectedItemId('');
  };

  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      restaurantId: selectedRestaurantId,
      itemId: selectedItemId,
      newPrice: parseFloat(newPrice)
    };

    try {
      const response = await axios.post('https://bronco-bites-backend-files-ae95bc7ab207.herokuapp.com/pricechange', payload);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting price change:', error);
    }
  };

  return (
    <div className="form-container">
      <form className="center-form" onSubmit={handleSubmit}>
        <Dropdown
          label="Select Restaurant"
          options={restaurantOptions}
          selectedValue={selectedRestaurantId}
          onSelect={handleRestaurantSelect}
        />
        <Dropdown
          label="Select Item"
          options={itemOptions}
          selectedValue={selectedItemId}
          onSelect={handleItemSelect}
          key={selectedRestaurantId}
        />
        <input
          type="number"
          placeholder="New Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          step="0.01"
          min="0"
        />
        <button type="submit">Submit Price Change</button>
      </form>
    </div>

  );
};

export default PriceChangeForm;