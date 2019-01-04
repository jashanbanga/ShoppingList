import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counterst: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterid => {
    const cin = counterid;
    const counterst = this.state.counterst.filter(c => c.id !== counterid);
    this.setState({ counterst });
    console.log("deleted" + this.cin);
  };
  resetAll = () => {
    const con = this.state.counterst.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ con });
  };
  handleIncrement = counter => {
    const counterst = [...this.state.counterst];
    const index = counterst.indexOf(counter);
    counterst[index] = { ...counter };
    counterst[index].value++;
    this.setState({ counterst });
  };
  render() {
    return (
      <React.Fragment>
        <html>
          <head>
            <link rel="stylesheet" href="./custom-style.css" />
          </head>
          <div className="jumbotron big-banner">
            <img src="C:\Users\jasnain\Desktop\Fotolia_70869411_Subscription_Monthly_M" />
            <Navbar />
            <main className="container">
              <Counters
                counterst={this.state.counterst}
                onReset={this.resetAll}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                totalCounters={
                  this.state.counterst.filter(c => c.value !== 0).length
                }
              />
            </main>
          </div>
        </html>
      </React.Fragment>
    );
  }
}

export default App;
