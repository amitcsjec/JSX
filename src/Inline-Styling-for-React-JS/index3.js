import React from "react";
import ReactDom from "react-dom";

const date = new Date(2019, 1, 1, 19);
const currentTime = date.getHours();

// console.log(currentTime);

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 className="heading2" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
