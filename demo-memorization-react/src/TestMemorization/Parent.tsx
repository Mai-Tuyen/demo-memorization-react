import { useRef, useState } from "react";
import "../App.css";
import Child from "./Child";

// component cha với nhiều useCallback, useMemo => sau đó clear hết đi
function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const [d, setD] = useState(4);

  const arr = [a, b, c, d];

  return (
    <>
      <h1>Memorization trong React</h1>
      <button onClick={() => setD(d + 1)}>Increase D</button>
      <Child />
    </>
  );
}

export default App;
