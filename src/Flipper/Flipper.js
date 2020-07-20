import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./Flipper.css";
import { choice } from "../helpers";
class Flipper extends Component {
  static defaultProps = {
    coinSides: [
      { side: "heads", url: "https://tinyurl.com/r-head" },
      { side: "tails", url: "https://tinyurl.com/r-tails" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentSide: null,
      totalAttempts: 0,
      totalHeads: 0,
      totalTails: 0,
    };
  }

  flipCoin = () => {
    const coin = choice(this.props.coinSides);
    this.setState((currentState) => {
      const newState = {
        ...currentState,
        currentSide: coin,
        totalAttempts: currentState.totalAttempts + 1,
      };
      if (coin.side === "heads") {
        newState.totalHeads += 1;
      } else if (coin.side === "tails") {
        newState.totalTails += 1;
      }
      return newState;
    });
  };

  clickHandler = () => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="Flipper">
        <h1>Просто брось монетку!</h1>
        {this.state.currentSide && <Coin side={this.state.currentSide} />}
        <button className="FlipperButton" onClick={this.clickHandler}>
          Испытать судьбу
        </button>
        <p>
          Подброшено {this.state.totalAttempts} раз. Решек:{" "}
          {this.state.totalHeads}. Орлов: {this.state.totalTails}.
        </p>
      </div>
    );
  }
}

export default Flipper;
