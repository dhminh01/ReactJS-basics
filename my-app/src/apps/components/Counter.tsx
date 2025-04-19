import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount((previosValue) => previosValue - 1);
  };
  const handleAdd = () => {
    setCount((previosValue) => previosValue + 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default Counter;
