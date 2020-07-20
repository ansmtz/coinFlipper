import React, { Component } from "react";
import "./Coin.css";
class Coin extends Component {
  render() {
    const { side, url } = { ...this.props.side };
    return (
      <div className="Coin">
        <img className="CoinImage" src={url} alt={side} />
      </div>
    );
  }
}

export default Coin;

// https://tinyurl.com/react-coin-heads-jpg
// https://tinyurl.com/react-coin-tails-jpg
// https://tinyurl.com/rouble-${image}
