import React, { memo } from "react";

const ChildComponent2 = ({ count2 }: { count2: number }) => {
  console.log("Re-Render child component 2");
  return (
    <>
      <div style={{ fontSize: "30px", color: "red" }}>
        Đây là child component dùng memo,{" "}
        <span>Giá trị hiện tại của count2 là : {count2}</span>
      </div>
    </>
  );
};

export default memo(ChildComponent2);

// điều kiện re-render component thường: state change or component cha re-render
// điều kiện re-render component dùng memo: state change or (component cha re-render + props change)
