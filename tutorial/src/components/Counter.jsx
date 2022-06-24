import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Badge} from 'react-bootstrap'

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span style = {{fontSize: 30}}className="badge bg-primary">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
