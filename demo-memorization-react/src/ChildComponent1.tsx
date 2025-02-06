import React, { memo } from "react";

const ChildComponent1 = ({ count }: { count: number }) => {
  console.log("Re-Render child component 1");
  return (
    <>
      <div style={{ fontSize: "30px", color: "green" }}>
        Đây là child component mặc định,{" "}
        <span>Giá trị hiện tại của count là : {count}</span>
      </div>
    </>
  );
};

export default ChildComponent1;
