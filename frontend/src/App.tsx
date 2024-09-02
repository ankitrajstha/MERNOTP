import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Otp from "./pages/Otp";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Otp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
