import { useRef, useState } from "react";
import "./App.css";
import ChildComponent2 from "./ChildComponent2";
import ChildComponent1 from "./ChildComponent1";
import ChildComponentStatic from "./ChildComponentStatic";

function App() {
  const [count, setCount] = useState(0);
  let count2: number = 0;
  // const count2 = useRef(0);
  // const increaseCount2 = () => {
  //   count2.current++;
  //   console.log(count2.current);
  // };
  // console.log("Child", <ChildComponent1 count={count} />);
  // console.log("Child 2", <ChildComponent2 count2={count2.current} />);
  return (
    <>
      <h1>Memo component trong React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ fontSize: "30px", marginRight: "20px" }}
        >
          count is {count}
        </button>
        {/* <button onClick={increaseCount2} style={{ fontSize: "30px" }}>
          count2 (đây là props của các child component) is {count2.current}
        </button> */}
      </div>

      <ChildComponentStatic />
      {/* <ChildComponent1 count={count} /> */}
      {/* <ChildComponent2 count2={count2.current} /> */}
    </>
  );
}

export default App;

// điều kiện re-render component thường: state change or component cha re-render
// điều kiện re-render component dùng memo: state change or (component cha re-render + props change)
