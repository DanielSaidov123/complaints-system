import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./app.css"
import { SubmitComplaintPage } from "./pages/SubmitComplaintPage";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Complaints" element={ <SubmitComplaintPage/> } />
        <Route path="/da" element={ <h1>dadfwsafwsa</h1>} />
        <Route path="error" element={ <h1>dad</h1>} />
        <Route path="" element={ <SubmitComplaintPage/>} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
