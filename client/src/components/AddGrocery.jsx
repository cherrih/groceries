import React from 'react';
import data from '../../../dummyData.js';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const grocery = {
      name: this.state.item,
      quantity: this.state.quantity
    }
    console.log(grocery);

    fetch('/groceries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(grocery)
    })
    .then(response => {
      console.log('added a grocery ', response);
      return this.props.getGroceries();
    })
    .then(() => {
      this.setState({
        item: '',
        quantity: ''
      })
    })
    
    console.log('submitted')
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Item
          <input name='item' value={this.state.itemValue} onChange={this.handleChange}/>
        </label>
        <label> Quantity
          <input name='quantity' value={this.state.quantityValue} onChange={this.handleChange}/>
        </label>
        <button >Add Grocery</button>
      </form>
    )
  }
}

export default AddGrocery;