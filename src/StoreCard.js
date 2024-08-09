import React, { useState } from 'react';
import './StoreCard.css';

function StoreCard({ store }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`card ${isExpanded ? 'card-expanded' : ''}`} 
      onClick={toggleExpand}
    >
      <h3>{store.name}</h3>
      <p>{store.city}, {store.state}</p>
      <div className="card-details">
        <p><strong>Address:</strong> {store.address}</p>
        <p><strong>Phone:</strong> {store.phone}</p>
      </div>
    </div>
  );
}

export default StoreCard;
