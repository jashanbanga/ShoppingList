import React, { Component } from "react";

class Counter1 extends Component {
  getBadge() {
    let classBadge = "badge m-2 badge-";
    if (this.props.counter.value === 0) return (classBadge += "warning");
    return (classBadge += "primary");
  }

  getName = () => {
    const ids = this.props.counter.id;
    console.log(ids);
    console.log(ids);
    console.log(ids);
    console.log(ids);
    if (ids === 1) return "Mango";
    if (ids === 2) return "Grapes";
    if (ids === 3) return "Banana";
    if (ids === 4) return "Orange";
  };
  getNamestyle() {
    const styles = {
      fontSize: 30,
      fontWeight: "bold"
    };
    return styles;
  }
  getEditstyle() {
    const styles = {
      fontSize: 10,
      fontWeight: "Italics"
    };
    return styles;
  }
  getSizestyle() {
    const styles = {
      fontSize: 20,
      fontColor: "blue"
    };
    return styles;
  }

  rendertags() {
    return (
      <div>
        <span style={this.getNamestyle()} className="badge badge-info m-2">
          {this.props.counter.id}
        </span>
        <span style={this.getNamestyle()} className="badge badge-dark m-2">
          {this.getName()}
        </span>
        <span style={this.getNamestyle()} className={this.getBadge()}>
          {this.getVal()}
        </span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.Eventhandler(this.props.counter)}
          style={this.getNamestyle()}
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
          style={this.getNamestyle()}
        >
          Delete
        </button>
      </div>
    );
  }
  getVal() {
    if (this.props.counter.value === 0) return "zero";
    return this.props.counter.value;
  }
  render() {
    return this.rendertags();
  }
}

export default Counter1;
