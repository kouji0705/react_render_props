import React from 'react';
import { Counter } from './Counter';

export const App = () => (
  <Counter>
    {(count, setCount) => (
      <div>
        <p>カウント: {count}</p>
        <button onClick={() => setCount(count + 1)}>増加</button>
      </div>
    )}
  </Counter>
);

export default App;
