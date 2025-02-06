import React, { useCallback, useState } from "react";

export default function UseCallBackExample() {
  const [count, setCount] = useState<number>(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  //   const handleIncrease = useCallback(() => {
  //     console.log(count);
  //     setCount(count + 1);
  //   }, []);

  return (
    <>
      <div>UseCallBackExample</div>
      <div>Count: {count}</div>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "20px" }}
      >
        +
      </button>
      <button onClick={handleIncrease}>+ with useCallback</button>
    </>
  );
}

// useCallback rất dễ gây leak bug khi không quản lý dependencies chính xác
