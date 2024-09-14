import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import CreateQuestion from "./pages/CreateQuestion";
import NamePage from "./pages/NamePage";
import WaitingPage from "./pages/WaitingPage";
import AttemptQuestion from "./pages/AttemptQuestion";
import ParticipantRemoved from "./pages/ParticipantRemoved";
import TeacherNamePage from "./pages/TeacherNamePage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="namePage" element={<NamePage />} />
          <Route path="teacherNamePage" element={<TeacherNamePage />} />
          <Route path="waitingPage" element={<WaitingPage />} />
          <Route path="createQuestion" element={<CreateQuestion />} />
          <Route path="attemptQuestion" element={<AttemptQuestion />} />
          <Route path="participantRemoved" element={<ParticipantRemoved />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
