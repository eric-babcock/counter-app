import React from "react";
import Counter from './counter'

const Counters = ({onReset,onIncrement,onDelete,counters}) => {
  return (
    <>
      <button
        onClick={onReset}
        className='btn btn-primary btn-sm m-2'>
        Reset
      </button>

      {counters.map(counter => (
        <Counter id={ counter.id }
                 key={ counter.id }
                 onDelete={ onDelete }
                 onIncrement={ onIncrement }
                 counter={counter}/>

      ))}
    </>
  )
}



export default Counters
