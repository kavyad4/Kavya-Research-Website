import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import LLMResearch from "./Pages/LLMResearch";
import ESGResearch from "./Pages/ESGResearch";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/research/llm-reliability"
          element={<LLMResearch />}
        />

        <Route
          path="/research/esg-food-security"
          element={<ESGResearch />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;