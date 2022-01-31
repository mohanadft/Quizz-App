import React from "react";
import Question from "./Question";
import questions from "../questions";

export default function Questions() {
  const [qs, setQs] = React.useState(questions);
  const [isClicked, setIsClicked] = React.useState(false);
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = React.useState(0);

  function selectAnswer(event, id) {
    setQs((prevQss) => {
      return prevQss.map((e) => {
        return e.id === id
          ? {
              ...e,
              choices: e.choices.map((choice) => {
                return choice.choice === event.target.textContent
                  ? { ...choice, isSelected: !choice.isSelected }
                  : { ...choice, isSelected: false };
              }),
            }
          : e;
      });
    });
  }

  return (
    <div>
      {qs.map((e, index) => (
        <Question
          key={index}
          question={e.question}
          choices={e.choices}
          selectAnswer={(event) => selectAnswer(event, e.id)}
          clickedCheckBtn={isClicked}
        />
      ))}

      <button
        className="chck-btn"
        onClick={(event) => {
          if (event.target.textContent === "Check Answers") {
            setIsClicked(true);
            setNoOfCorrectAnswers((prev) => {
              let a = prev;

              qs.forEach((e) => {
                e.choices.forEach((choice) => {
                  if (choice.correctAnswer && choice.isSelected) a++;
                });
              });
              return a;
            });
            event.target.textContent = "Play Again";
          } else {
            setIsClicked((prev) => false);
            setNoOfCorrectAnswers((prev) => 0);
            setQs((prev) => {
              return prev.map((e) => {
                return {
                  ...e,
                  choices: e.choices.map((choice) => {
                    return { ...choice, isSelected: false };
                  }),
                };
              });
            });
            event.target.textContent = "Check Answers";
          }
        }}
      >
        Check Answers
      </button>
      {isClicked ? (
        <p
          className="final-result"
          style={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "600",
            padding: "10px 0",
          }}
        >
          You scored {noOfCorrectAnswers}/5 correct answers
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
