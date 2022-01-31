import React from "react";

export default function Choice(props) {
  return (
    <span className="choice" onClick={props.select} style={props.style}>
      {props.choiceContent}
    </span>
  );
}
