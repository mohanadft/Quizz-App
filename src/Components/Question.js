import React from "react";
import Choice from "./Choice";

export default function Question(props) {
  // "2px solid #293264"

  return (
    <div className="qs">
      <p className="question">{props.question}</p>
      <div className="choices">
        {props.choices.map((e, index) => (
          <Choice
            choiceContent={e.choice}
            key={index}
            select={props.selectAnswer}
            correctAnswer={e.correctAnswer}
            style={{
              border:
                props.clickedCheckBtn && e.correctAnswer
                  ? "2px solid #94D7A2"
                  : props.clickedCheckBtn && e.isSelected && !e.correctAnswer
                  ? "2px solid #F8BCBC"
                  : e.isSelected
                  ? "2px solid #D6DBF5"
                  : "",
              backgroundColor:
                props.clickedCheckBtn && e.correctAnswer
                  ? "#94D7A2"
                  : props.clickedCheckBtn && e.isSelected && !e.correctAnswer
                  ? "#F8BCBC"
                  : e.isSelected
                  ? "#D6DBF5"
                  : "",
            }}
          />
        ))}
      </div>
    </div>
  );
}
