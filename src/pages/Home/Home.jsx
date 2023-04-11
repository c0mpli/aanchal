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
import avatar from "../../assets/avatar.png";
function Home() {
  const { user } = useAuthContext();
  const parent_id = user?.user?._id;
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

  function getData() {
    axios
      .get(`https://aanchal.onrender.com/child?parent=${parent_id}`)
      .then((response) => {
        setChildData(response.data);
        //setData(response.data);
        //setIsLoading(false);
        // save users in local storage
        localStorage.setItem("usersForMap", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
      <img src={avatar} alt="avatar" className="homePP" />
      <div className="childDevices blueColor">
        {childData &&
          childData.map((value, index) => {
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
