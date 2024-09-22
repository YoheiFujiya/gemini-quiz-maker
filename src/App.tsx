import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Survey from "./components/Survey";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Router basename="/gemini-quiz-maker">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
