import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag3", "tag4", "tag5"],
    styles: {
      fontSize: 20,
      fontColor: "yellow",
      fontWeight: "Italics"
    }
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag} className="list-group-item">
            {tag}
            <span style={this.styles} className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={() => this.Increaseitems({ id: 1 })}
              >
                Add
              </button>
              <span className="badge badge-primary">{this.state.count}</span>
            </span>
          </li>
        ))}
      </ul>
    );
  }

  Increaseitems = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span>{this.renderTags()}</span>
      </div>
    );
  }
}

export default Counter;
