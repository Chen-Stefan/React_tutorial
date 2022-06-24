import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters: newCounters})
  }

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
