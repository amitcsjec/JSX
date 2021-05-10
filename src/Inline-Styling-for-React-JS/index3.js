import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const currentTime = date.getHours();

// console.log(currentTime);

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}

ReactDom.render(
  <h1 className="heading2">{greeting}</h1>,
  document.getElementById("root")
);
