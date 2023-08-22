import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailsPage() {
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const itemDetails = {};

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="item-details-container">
      <img src={itemDetails.image} alt={itemDetails.name} />
      <p>Price: {itemDetails.price}</p>
      <select value={quantity} onChange={handleQuantityChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <p>Total Price: {itemDetails.price * quantity}</p>
    </div>
  );
}

export default ItemDetailsPage;
