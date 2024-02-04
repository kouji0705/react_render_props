import React from 'react';
import { Counter } from './Counter';

export const App = () => (
  <Counter>
    {(count, handleClick) => (
      <div>
        <p>カウント: {count}</p>
        <button onClick={handleClick}>増加</button>
      </div>
    )}
  </Counter>
);

export default App;
