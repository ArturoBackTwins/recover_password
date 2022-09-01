import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import 'rsuite/dist/rsuite.min.css';
import RecoverPassword from "./view/RecoverPassword";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recovery-password" element={<App />} />
        <Route path="/recovery-password/:access_key" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);