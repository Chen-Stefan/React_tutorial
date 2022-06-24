import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Badge } from "react-bootstrap";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && 'Please Create a new tag'}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
