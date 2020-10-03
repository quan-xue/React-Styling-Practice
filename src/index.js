//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hourOfDay = date.getHours();

let timeHeading;
let customStyle = {
  color: ""
};

if (hourOfDay < 12) {
  timeHeading = "morning";
  customStyle.color = "red";
} else if (hourOfDay < 18) {
  customStyle.color = "green";
  timeHeading = "afternoon";
} else {
  customStyle.color = "blue";
  timeHeading = "evening";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {timeHeading} {date.getHours()}{" "}
  </h1>,
  document.getElementById("root")
);
