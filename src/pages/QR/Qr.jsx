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
function Qr() {
  const { user } = useAuthContext();
  console.log(user?.user.firstname);

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
          <h1>Connect a New Device</h1>
          <ol>
            <li>Install the app in you child’s device.</li>
            <li>Open the app and click on the Connect device button.</li>
            <li>Scan the QR code on the right to connect new device.</li>
          </ol>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QRCode value={`http://www.aanchal.com/?parent=${user?.user._id}`} />
        </div>
      </div>
    </div>
  );
}

export default Qr;
