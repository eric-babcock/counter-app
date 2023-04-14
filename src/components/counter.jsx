import React, {Component} from 'react';


class Counter extends Component {

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0) ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatValue() {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  render() {
    const { counter } = this.props;
    return (<div>
      <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
      <button onClick={() => this.props.onIncrement(counter)}
              className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button onClick={() => this.props.onDelete(counter.id)}
              className='btn btn-danger btn-sm m-2'
      >
        Delete
      </button>
    </div>);
  }
}

export default Counter;
