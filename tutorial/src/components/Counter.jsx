import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Badge } from "react-bootstrap";

class Counter extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
      value: this.props.counter.value,
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
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }

  handleIncrement = product => {
    console.log(product)
    this.setState({value: this.state.value + 1})
  }
 
  render() {
    console.log(this.props)

    return (
      <div>
        {/* 这里的this.props.children就是两个Counter tag中间的h4 tag */}
        <h4>Counter #{this.props.counter.id}</h4>
        <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
       <button onClick={(product) => this.handleIncrement(product)} className='btn btn-secondary btn-sm'>Increment</button>
       <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
