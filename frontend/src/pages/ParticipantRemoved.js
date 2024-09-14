import React from "react";
import "../styles/ParticipantRemoved.css";

const ParticipantRemoved = () => {
  return (
    <div className="participant-removed-container">
      <div className="message-box">
        <div className="icon">
          {/* You can add an icon here using an img tag or as an SVG */}
          <span role="img" aria-label="chat">
            💬
          </span>
        </div>
        <h1>You’ve been Kicked out!</h1>
        <p>
          Looks like the teacher had removed you from the poll system. Please
          try again after sometime.
        </p>
      </div>
    </div>
  );
};

export default ParticipantRemoved;
