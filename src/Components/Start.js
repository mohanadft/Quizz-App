import React from "react";

export default function Start(props) {
  return (
    <div className="start-quiz">
    
      <h1 className="app-title">Quizzical</h1>
      <button className="start-btn" onClick={props.hasStart}>
        Start Quiz
      </button>
    </div>
  );
}
