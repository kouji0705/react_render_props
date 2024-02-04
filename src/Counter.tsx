import React, { useState } from 'react';

// Counter コンポーネントのPropsの型定義
type CounterProps = {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => React.ReactNode;
};

export const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <>{children(count, setCount)}</>;
};
