import React from "react";
import ReactDom from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDom.render(
  <h1 style={customStyle}>Hello World!</h1>,

  document.getElementById("root")
);
