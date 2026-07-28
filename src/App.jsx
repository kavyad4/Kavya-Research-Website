import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LLMResearch from "./pages/LLMResearch";
import ESGResearch from "./pages/ESGResearch";

import "./styles.css";

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