import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Homepage from "./pages/Homepage";
import PageNot from "./pages/PageNot";

function App() {
  return (
    <>
      {/* routes for page */}

      <Routes>
        <Route path="*" element={<PageNot />} />
        <Route path="/" element={<Navigate to={"/Signup"} />} exact />
        <Route path="/Signup" element={<Signup />} exact />
        <Route path="/home" element={<Homepage />} exact />
      </Routes>
    </>
  );
}

export default App;
