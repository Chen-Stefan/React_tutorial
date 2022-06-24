import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Badge } from "react-bootstrap";

class Counter extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      value: this.props.value,
      tags: []
    }
  }
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
  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  handleIncrement = product => {
    console.log(product)
    this.setState({count: this.state.value + 1})
  }
 
  render() {
    return (
      <div>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
       <button onClick={(product) => this.handleIncrement(product)} className='btn btn-secondary btn-sm'>Increment</button>
      </div>
    );
  }
}

export default Counter;
