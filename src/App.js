import React, {Component} from "react";
import './App.css';
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {

  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  };

  constructor(props) {
    super(props);
    console.log('app-constructor',this.props);
  }

  componentDidMount() {
    // Ajax Call
    console.log('App - Mounted')
  }

  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = {...counter};
    newCounters[index].value++;
    this.setState({counters: newCounters})
  }

  handleDelete = (counterId) => {// use of () is not required
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    )
      ;
  }
}

export default App;
