import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import HomeBG from "../../assets/DashboardBG.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DevicesCard from "../../components/DevicesCard/DevicesCard";
import Add from "../../assets/plus.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const { user } = useAuthContext();
  console.log(user?.user.firstname);
  const data = [
    {
      name: "Sunidhi",
      age: "14",
      lastUsed: "Instagram",
      lastLocation: "Shanti Society, Khar",
    },
    {
      name: "Sunidhi",
      age: "14",
      lastUsed: "Instagram",
      lastLocation: "Shanti Society, Khar",
    },
  ];
  const [childData, setChildData] = useState();
  const navigate = useNavigate();
  //   function matchUsers() {
  //     axios
  //       .get("https://coc-1.adityasurve1.repl.co/user/match", {
  //         headers: { token: localStorage.getItem("token") },
  //         auth: { user: { _id: localStorage.getItem("token") } },
  //       })
  //       .then((response) => {
  //         console.log("Matched");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   function locationUsers() {
  //     axios
  //       .get("https://coc-1.adityasurve1.repl.co/user/match2", {
  //         headers: { token: localStorage.getItem("token") },
  //         auth: { user: { _id: localStorage.getItem("token") } },
  //       })
  //       .then((response) => {
  //         setLocationData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   function getData() {
  //     axios
  //       .get("https://coc-1.adityasurve1.repl.co/user/test", {
  //         headers: { token: localStorage.getItem("token") },
  //         auth: { user: { _id: localStorage.getItem("token") } },
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //         setData(response.data);
  //         //setData(response.data);
  //         //setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  //   useEffect(() => {
  //     matchUsers();
  //     locationUsers();
  //     getData();
  //   });

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
      <div className="childDevices blueColor">
        {data &&
          data.map((value, index) => {
            return (
              <DevicesCard data={value} index={index} length={data.length} />
            );
          })}

        <div
          className="addwrapper"
          onClick={() => {
            navigate("../qr");
          }}
        >
          <img src={Add} />
          <p>Add a Child device</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
