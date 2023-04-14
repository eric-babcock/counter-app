import React, {Component, createContext} from "react";
import Counter from './counter'
import {v4 as uuid} from 'uuid'
class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  };

  handleIncriment = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({counters: newCounters})
  }

  handleDelete = (counterId) => {
    const {counters} = this.state
    const newCounters = counters.filter(c => c.id !== counterId);
    this.setState({counters: newCounters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState( { counters });
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'>
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter id={ counter.id }
                   key={ counter.id }
                   onDelete={ this.handleDelete }
                   onIncrement={ this.handleIncriment }
                   counter={counter}/>

        ))}
      </>)
  }
}

export default Counters
