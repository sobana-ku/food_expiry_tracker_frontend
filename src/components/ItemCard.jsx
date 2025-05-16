

import React from 'react';

function ItemCard({ item, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={item.image} alt={item.name} width="100" />
      <h4>{item.name}</h4>
    </div>
  );
}

export default ItemCard;
