import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Badge } from "react-bootstrap";

class Counter extends Component {

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? "Zero" : value;
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {/* 这里的this.props.children就是两个Counter tag中间的h4 tag */}
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
