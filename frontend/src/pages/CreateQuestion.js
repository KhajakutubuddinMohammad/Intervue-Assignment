// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux"; // Import useDispatch for Redux action
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/CreateQuestion.css";
// import io from "socket.io-client";
// import { addQuestion } from "../store.js";

// const socket = io("http://localhost:5000");

// const CreateQuestion = () => {
//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState([{ id: 1, value: "" }]);
//   const dispatch = useDispatch(); // Initialize dispatch

//   const [pollResults, setPollResults] = useState([]);

//   useEffect(() => {
//     socket.on("live-results", (results) => {
//       setPollResults(results);
//     });
//   }, []);

//   const handleQuestionChange = (event) => {
//     setQuestion(event.target.value);
//   };

//   const handleOptionChange = (index) => (event) => {
//     const newOptions = [...options];
//     newOptions[index].value = event.target.value;
//     setOptions(newOptions);
//   };

//   const addOption = () => {
//     setOptions([...options, { id: options.length + 1, value: "" }]);
//   };

//   const navigate = useNavigate();

//   const handleSubmitQuestion = async (e) => {
//     e.preventDefault();
//     alert("Question added, You can add one more question!!");

//     const pollData = { question, options };

//     // Dispatch the addQuestion action to store the question in Redux
//     dispatch(addQuestion(pollData));

//     // Emit the "new-question-submitted" event with the new question and options
//     socket.emit("new-question-submitted", pollData);

//     // await axios.post("http://localhost:5000/api/polls/create", pollData);

//     navigate("/createQuestion");
//   };

//   return (
//     <div className="create-question-container">
//       <h2>Let's Get Started</h2>
//       <div className="question-input-container">
//         <label htmlFor="question">Enter your question</label>
//         <input
//           type="text"
//           id="question"
//           value={question}
//           onChange={handleQuestionChange}
//         />
//       </div>
//       <div className="options-container">
//         {options.map((option, index) => (
//           <div key={option.id} className="option-input-container">
//             <input
//               type="text"
//               value={option.value}
//               onChange={handleOptionChange(index)}
//               placeholder={`Option ${index + 1}`}
//             />
//           </div>
//         ))}
//         <button className="add-option-button" onClick={addOption}>
//           + Add More Option
//         </button>
//       </div>
//       <button className="ask-question-button" onClick={handleSubmitQuestion}>
//         Ask Question
//       </button>
//     </div>
//   );
// };

// export default CreateQuestion;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch for Redux action
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CreateQuestion.css";
import { addQuestion } from "../store.js";
import socket from "../socket"; // Import shared socket

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ id: 1, value: "" }]);
  const dispatch = useDispatch(); // Initialize dispatch

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (index) => (event) => {
    const newOptions = [...options];
    newOptions[index].value = event.target.value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { id: options.length + 1, value: "" }]);
  };

  const navigate = useNavigate();

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    alert("Question added, You can add one more question!!");

    const pollData = { question, options };

    // Dispatch the addQuestion action to store the question in Redux
    // dispatch(addQuestion(pollData));

    // Emit the "new-question-submitted" event with the new question and options
    console.log("emitted new question", pollData);
    socket.emit("new-question", pollData);

    // navigate("/createQuestion");
  };

  return (
    <div className="create-question-container">
      <h2>Let's Get Started</h2>
      <div className="question-input-container">
        <label htmlFor="question">Enter your question</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <div key={option.id} className="option-input-container">
            <input
              type="text"
              value={option.value}
              onChange={handleOptionChange(index)}
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
        <button className="add-option-button" onClick={addOption}>
          + Add More Option
        </button>
      </div>
      <button className="ask-question-button" onClick={handleSubmitQuestion}>
        Ask Question
      </button>
    </div>
  );
};

export default CreateQuestion;
