import React, { Component } from "react";
import Counter1 from "./counter1";

class Counters extends Component {
  // counterCount = () => {
  //   const count = this.props.counterst.filter(c => c.value !== 0).length;
  //   return count;
  // };
  getStyle() {
    const styles = {
      fontSize: 30,
      fontColor: "Yellow"
    };
    return styles;
  }
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      counterst,
      totalCounters
    } = this.props;
    return (
      <div className="badge badge-light">
        <button
          style={this.getStyle()}
          onClick={onReset}
          className="btn btn-sm btn-primary m-2"
        >
          Reset
        </button>
        {counterst.map(counter => (
          <Counter1
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            selected={true}
            Eventhandler={onIncrement}
          />
        ))}
        <span style={this.getStyle()} className="badge badge-primary m-2">
          Total Items Added in cart
        </span>
        <span style={this.getStyle()} className="badge badge-secondary ">
          {totalCounters}
        </span>
      </div>
    );
  }
}

export default Counters;
