import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./app.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Complaints" element={ <h1>fewfw</h1>} />
        <Route path="/da" element={ <h1>dadfwsafwsa</h1>} />
        <Route path="error" element={ <h1>dad</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
