import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Otp from "./pages/Otp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
