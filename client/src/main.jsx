import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./app.css";
import { SubmitComplaintPage } from "./pages/SubmitComplaintPage";
import { ComplaintListProvider } from "./Contexts/Context";
import { AdminLoginPage } from "./pages/AdminLoginPage";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ComplaintListProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Complaints" element={<SubmitComplaintPage />} />
          <Route path="/da" element={ <AdminLoginPage/>} />
          <Route path="error" element={<h1>dad</h1>} />
          <Route path="" element={<SubmitComplaintPage />} />
        </Routes>
      </ComplaintListProvider>
    </BrowserRouter>
  </StrictMode>,
);
