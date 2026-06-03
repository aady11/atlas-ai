import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/Research";
import StudyHub from "./pages/StudyHub";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/research" element={<Research />} />
      <Route path="/studyhub" element={<StudyHub />} />
    </Routes>
  );
}

export default App;