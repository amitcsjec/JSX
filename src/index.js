import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>Your lucky number is {3 + 4}</p>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
