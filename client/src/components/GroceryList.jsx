import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = props => {
  return (
    console.log('Groceries', props.groceries),
    <ul className="groceries">
      {props.groceries.map(item => (
        <GroceryItem key={item.name} item={item}/>
      ))}
    </ul>
  )
}

export default GroceryList;