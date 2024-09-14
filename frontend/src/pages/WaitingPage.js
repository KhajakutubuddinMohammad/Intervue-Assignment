import React, { useState } from "react";
import "../styles/WaitingPage.css";
import { CircularProgress } from "@mui/material";

function WaitingPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app-container">
      <header className="top-right-button">
        <button>Intervue Poll</button>
      </header>
      <main className="content">
        <CircularProgress className="loader" />
        <p>Wait for the teacher to ask questions..</p>
      </main>
      <footer className="chat-icon">
        <button onClick={() => setShowPopup(true)}>💬</button>
      </footer>

      {showPopup && (
        <div className="chat-popup">
          <div className="tabs">
            <div className="tab">Participants</div>
            <div className="tab">Chat</div>
          </div>
          <button className="close-button" onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default WaitingPage;
