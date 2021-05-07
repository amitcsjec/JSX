import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date();
// console.log(currentDate);
const year = currentDate.getFullYear();
// console.log(year);

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentDate.getFullYear()}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
