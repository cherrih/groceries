import React from 'react';

import AddGrocery from './AddGrocery.jsx';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groceries: []
    };
    this.getGroceries = this.getGroceries.bind(this);
  }  

  componentDidMount() {
    this.getGroceries();
  }

  getGroceries() {
    return fetch('/groceries')
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return this.setState({
          groceries: body
        });
      });
  }

  render() {
    return (
      <div>
        <AddGrocery getGroceries={this.getGroceries}/>
        <GroceryList groceries={this.state.groceries} />
      </div>
    );
  }
}

export default App;