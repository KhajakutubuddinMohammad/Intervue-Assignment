import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WaitingPage from "./WaitingPage";
import "../styles/AttemptQuestion.css";
import socket from "../socket";

function AttemptQuestion() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [showWaitingPage, setShowWaitingPage] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Listen for the "new-question-submitted" event and update the state
    socket.on("new-question-submitted", (data) => {
      setCurrentQuestion(data.question);
      setOptions(data.options);
      setShowWaitingPage(false);
      console.log("In AttemptQuestion Page", data);
    });

    // Timer logic
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId); // Clear timeout on cleanup
    } else {
      setIsTimeUp(true);
    }

    return () => {
      // Cleanup socket listener and timeout when the component unmounts
      socket.off("new-question-submitted");
      //   clearTimeout(eventTimeout);
    };
  }, [timeLeft, showWaitingPage]);

  // Handle option selection
  const handleOptionClick = (selectedOption) => {
    if (isTimeUp) return;
    setAnswer(selectedOption);
    setShowWaitingPage(true);
  };

  // Handle answer submission
  const handleSubmit = () => {
    if (answer) {
      alert("Answer submitted successfully, please wait for another screen.");
    } else {
      alert("No answer submitted, you should wait for the next question.");
    }
    setShowWaitingPage(true);
  };

  useEffect(() => {
    if (isTimeUp) {
      handleSubmit();
    }
  }, [isTimeUp]);

  if (showWaitingPage) {
    return <WaitingPage />;
  }

  return (
    <div className="quiz-container">
      <div className="timer">
        00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
      </div>
      <div className="question">{currentQuestion}</div>
      <ul className="options">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option.value)}
            className={isTimeUp ? "disabled" : ""}
          >
            {option.value}
          </li>
        ))}
      </ul>
      {!isTimeUp && <button onClick={() => handleSubmit}>Submit</button>}
    </div>
  );
}

export default AttemptQuestion;
