import React from 'react';

import logProps from '../hoc/logProps';

function Counter({ count, onCountUp, onCountDown }) {
  return (
    <div className="counter btn-group">
      <button className="btn btn-danger btn-lg" onClick={onCountDown}>-</button>
      <span className="btn btn-secondary btn-lg active">{count}</span>
      <button className="btn btn-success btn-lg" onClick={onCountUp}>+</button>
    </div>
  );
}

// Don't Mutate the Original Component. Decorator.
export default logProps(Counter);
