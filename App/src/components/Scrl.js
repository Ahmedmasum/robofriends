import React from "react";

const Scrl = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "800px",
        padding: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scrl;
