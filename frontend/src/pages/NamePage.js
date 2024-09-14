// import React, { useState } from "react";
// import "../styles/NamePage.css";

// const NamePage = () => {
//   const [name, setName] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div className="create-question-container">
//       <button className="full-button">Interview Full</button>
//       <h1>Let's Get Started</h1>
//       <p>
//         If you're a student, you'll be able to submit your answers, participate
//         in live polls, and see how your responses compare with your classmates.
//       </p>
//       <input
//         type="text"
//         placeholder="Enter Your Name"
//         value={name}
//         onChange={handleNameChange}
//       />
//       <button className="continue-button">Continue</button>
//     </div>
//   );
// };

// export default NamePage;

import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access the store
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/NamePage.css";

const NamePage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Handle name change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Handle Continue button click
  const handleContinue = () => {
    // Check if the size of questions is less than the current question number
    navigate("/attemptQuestion");
  };

  return (
    <div className="create-question-container">
      <button className="full-button">Interview Full</button>
      <h1>Let's Get Started</h1>
      <p>
        If you're a student, you'll be able to submit your answers, participate
        in live polls, and see how your responses compare with your classmates.
      </p>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={handleNameChange}
      />
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default NamePage;
