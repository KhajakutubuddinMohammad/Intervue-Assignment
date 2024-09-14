import React, { useState } from "react";
import "../styles/TeacherNamePage.css";
import { useNavigate } from "react-router-dom";

const NamePage = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="create-question-container">
      <button className="full-button">Interview Full</button>
      <h1>Let's Get Started</h1>
      <p>Hello Teacher!</p>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={handleNameChange}
      />
      <button
        className="continue-button"
        onClick={() => navigate("/createQuestion")}
      >
        Continue
      </button>
    </div>
  );
};

export default NamePage;
