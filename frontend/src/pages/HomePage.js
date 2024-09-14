import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to the Live Polling System</h1>
      <p>
        Please select the role that best describes you to begin using the live
        polling system.
      </p>
      <div className="buttons">
        <button className="role-button" onClick={() => navigate("namePage")}>
          I'm a Student
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </button>
        <button
          className="role-button"
          onClick={() => navigate("teacherNamePage")}
        >
          I'm a Teacher
          <p>Submit answers and view live poll results in real-time.</p>
        </button>
      </div>
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default HomePage;
