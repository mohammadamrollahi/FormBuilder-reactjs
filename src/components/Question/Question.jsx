import React from "react";
import "./Question.scss";
function Question({ question, handleNext, output, setoutput }) {
  const AddToOutput = (item) => {
    let temp = true;
    setoutput([...output.map((customItem) => {
      if (customItem.id == question.id) {
        customItem.answer = item.key;
        temp = false;
        return customItem
      }
      else return customItem
    })])
    if (temp) {
      setoutput([...output, { id: question.id, answer: item.key }]);
    }
  };
  return (
    <div className="questionDiv">
      <p className="questionText"> {question.text}</p>
      <div className="optionButtonDiv">
        {question.options.map((item) => (
          <div
            className="optionButton"
            onClick={() => {
              AddToOutput(item);
              handleNext();
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
