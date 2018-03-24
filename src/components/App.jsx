import React from 'react';
import Header from './Header';
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
  state = {
    fishes: {},
    orders: {}
  };

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = (key) => {
    const orders = {...this.state.orders};
    orders[key] = orders[key] + 1 || 1;
    this.setState({ orders });
  }

  render() {
    return <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul>
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>;
  }
}

export default App;