import React from 'react';
import Header from './Header';
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component{
  state = {
    fishes: {},
    orders: {}
  };

  componentDidMount(){
    const {params} = this.props.match;
    const orderRef = localStorage.getItem(params.storeId);
    this.setState({ orders: JSON.parse(orderRef) });
    this.ref = base.syncState(`${params.storeId}/fishes`,{
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.orders));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  updateFish = (key, fish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = fish;
    this.setState({fishes});
  }

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
        <Order orders={this.state.orders} fishes={this.state.fishes} />
        <Inventory
          addFish={this.addFish}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes} />
      </div>;
  }
}

export default App;