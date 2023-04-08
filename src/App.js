import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Qr from "./pages/QR/Qr";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/qr"} element={<Qr />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
