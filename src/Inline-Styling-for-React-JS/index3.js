import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const currentTime = date.getHours();

console.log(currentTime);

ReactDom.render(<h1></h1>, document.getElementById("root"));
