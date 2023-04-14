import React from "react";
import Counter from './counter'

const Counters = (props) => {
  return (
    <>
      <button
        onClick={props.onReset}
        className='btn btn-primary btn-sm m-2'>
        Reset
      </button>

      {props.counters.map(counter => (
        <Counter id={ counter.id }
                 key={ counter.id }
                 onDelete={ props.onDelete }
                 onIncrement={ props.onIncrement }
                 counter={counter}/>

      ))}
    </>
  )
}



export default Counters
