import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CreateCV from "./components/createCV";

/* Requirements:
  - need to be able to build a resume
  - have multiple resumes stored and be able to select them
  - come back to a resume
  - involves entering info such as name, contact info, personal statement statement,
    experiencces, projects, education, skills, etc
  - choosing how to style it

  Additional
  - Using AI to help
  - Templates
  - A spag checker

*/

export default function App() {
  return (
    // <div className="flex min-h-screen">

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createCV" element={<CreateCV />} />
      </Routes>
    </Router>
  );
}
