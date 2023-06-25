import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout";
// import LoginPage from "./shared/login/LoginPage";
import "./App.css";



const App = () => (
  <div className="App">
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  </div>
);

export default App;
