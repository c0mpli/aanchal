import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import FamMap from "./pages/FamMap/FamMap";
import Qr from "./pages/QR/Qr";
import { useAuthContext } from "./hooks/useAuthContext";
import Mfa from "./pages/MFA/Mfa";
import Signup from "./pages/Signup/Signup";
const App = () => {
  const { user } = useAuthContext();
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={user ? <Home /> : <Landing />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/qr"} element={<Qr />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/mfa"} element={<Mfa />} />
          <Route path={"/fammap"} element={<FamMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
