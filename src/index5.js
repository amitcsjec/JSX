import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img + "?grayscale"} alt="demo" />
  </div>,

  document.getElementById("root")
);
