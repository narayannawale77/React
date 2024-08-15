import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path="/signup" element={<Signup setLogin={setLogin} />} />
        <Route path="/dashboard" element = {
          <PrivateRouter isLogin={isLogin}>
              <Dashboard/>
          </PrivateRouter>
       
        } />
      </Routes>
    </div>
  );
}

export default App;
