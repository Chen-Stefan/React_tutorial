import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Badge} from 'react-bootstrap'

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };
  render() {
    return (
      <div>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.count === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
