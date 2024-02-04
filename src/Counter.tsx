import React, { useState } from 'react';

// Counter コンポーネントのPropsの型定義
type CounterProps = {
  children: (
    count: number,
    handleClick: () => void // カウントを増加させる関数の型を追加
  ) => React.ReactNode;
};

export const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  // カウントを増加させる関数
  const handleClick = () => setCount(count + 1);

  return <>{children(count, handleClick)}</>;
};
