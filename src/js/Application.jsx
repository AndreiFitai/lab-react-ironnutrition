import React from "react";
import foods from "../foods";
import Item from "./Item";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItems: foods
    };

    this._increaseQ = this._increaseQ.bind(this);
  }

  render() {
    let displayFoods = this.state.foodItems.map((food, index) => {
      return (
        <Item
          name={food.name}
          img={food.image}
          calories={food.calories}
          quantity={food.quantity}
          key={index}
          index={index}
          increaseQ={this._increaseQ}
        />
      );
    });
    return (
      <div className="application">
        <h1>IronNutrition</h1>
        {displayFoods}
      </div>
    );
  }

  _increaseQ(key, event) {
    console.log(event);
    let newQ = [...this.state.foodItems];
    newQ[key].quantity = newQ[key].quantity + 1;
    this.setState({
      foodItems: newQ
    });
  }
}

export default Application;
