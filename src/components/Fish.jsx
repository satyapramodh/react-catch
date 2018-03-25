import React from "react";
import {formatPrice} from '../helpers';
import PropTypes from "prop-types";

class Fish extends React.Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  };

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { name, image, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Cart" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;