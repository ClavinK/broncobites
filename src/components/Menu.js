import React from 'react';

const Menu = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name} - Menu</h3>
      <ul className="list-group">
        {restaurant.menu.map((item, index) => (
          <li key={item._id || index} className="list-group-item">
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

