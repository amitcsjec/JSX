import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img + "?grayscale"} alt="demo" />

    <img
      className="food-img"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="random"
    />
    <img
      className="food-img"
      src="https://static.toiimg.com/photo/72975551.cms"
      alt="bacon"
    />
    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU"
      alt="jamon"
    />
  </div>,

  document.getElementById("root")
);
