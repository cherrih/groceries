import React from 'react';

const GroceryItem = props => {
  return (
    <li>
      <span> {props.item.name} </span>
      <span> {props.item.quantity} </span>
    </li>
  )
}

export default GroceryItem;