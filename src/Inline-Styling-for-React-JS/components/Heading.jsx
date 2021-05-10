import React from "react";

function Heading() {
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
    customStyle.color = "blue";
  } else {
    greeting = "Good Night";
    customStyle.color = "green";
  }

  return (
    <h1 className="heading3" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
