import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import GroceryList from "./components/GroceryList";
import Cart from "./components/Cart";
import InputForm from "./components/InputForm";

const seedData = [
  { id: 1, name: "coffee", quantity: 1, inCart: false },
  { id: 2, name: "eggs", quantity: 2, inCart: false },
  { id: 3, name: "bread", quantity: 1, inCart: true },
]

export default class App extends Component {
  state = {
    groceries: seedData
  }

  addGrocery = (item, amount) => {
    console.log(item, amount);
    const groceryObj = {
      id: this.state.groceries.length + 1,
      name: item,
      quantity: amount,
      inCart: false
    }

    this.setState({ groceries: [...this.state.groceries, groceryObj] })
    console.log(this.state.groceries);
  }

  addToCart = (event) => {
    let name = event.target.id;
    console.log(name);
    let tempGroceries = this.state.groceries;
    for (let i = 0; i < tempGroceries.length; i++) {
      if (tempGroceries[i].name === name) {
        tempGroceries[i].inCart = true
      }
    }

    this.setState({ groceries: tempGroceries });
  }

  render() {
    return (
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="row mb-4">
          <div className="col">
            <h1>Shopping with React!</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <InputForm addGrocery={this.addGrocery} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <GroceryList
                  groceries={this.state.groceries.filter(item => item.inCart === false)}
                  addToCart={this.addToCart}
                />
              </div>
              <div className="col">
                <Cart groceries={this.state.groceries.filter(item => item.inCart === true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

