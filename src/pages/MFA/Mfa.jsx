import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import HomeBG from "../../assets/DashboardBG.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DevicesCard from "../../components/DevicesCard/DevicesCard";
import Add from "../../assets/plus.png";
import QRCode from "react-qr-code";
function Mfa() {
  const { user } = useAuthContext();
  const qr_url = user?.user.ot_url;

  return (
    <div className="Home-wrapper">
      <img className="Home-bg" src={HomeBG} alt="bgImage" />
      <Navbar />
      <div className="Home-section1">
        <h1>
          Welcome back,<br></br>
          {user?.user.firstname} ! 👋
        </h1>
      </div>
      <img
        src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${user?.user.firstname}`}
        alt="avatar"
        className="homePP"
      />
      <div className="qrWrapper">
        <div className="qrContent">
          <h2>Scan this QR Code in your Google Authenticator app.</h2>
        </div>
        <div>
          <QRCode value={qr_url} />
        </div>
      </div>
    </div>
  );
}

export default Mfa;
