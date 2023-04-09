import React, { useEffect, useState } from "react";
import threedot from "../../../assets/3dot.png";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
function BottomMiddle() {
  const [sitesData, sitesSetData] = useState();
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
  const appData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      name: "Instagram",
      time: "1h 3m",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2504/2504957.png",
      name: "Whatsapp",
      time: "2h 4m",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2504/2504929.png",
      name: "Youtube",
      time: "3h 37m",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2504/2504929.png",
      name: "Netflix",
      time: "4h 23m",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  function getData() {
    axios
      .get(
        `https://cs-dj.workspaceomkarb.repl.co/child/device/urls?childId=${id}`
      )
      .then((res) => {
        sitesSetData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="parentContainer">
      <div>
        <h2 className="purpleColor" style={{ marginBottom: "1rem" }}>
          Frequently visited sites
        </h2>
        <div className="allSitesWrapper">
          {sitesData &&
            sitesData?.splice(0, 2).map((value, key) => {
              return (
                <div className="siteWrapper" key={id}>
                  {value}
                </div>
              );
            })}
        </div>
      </div>
      <div></div>
      <div>
        <h2 className="purpleColor" style={{ marginBottom: "1rem" }}>
          Most used Apps
        </h2>
        <div className="allSitesWrapper">
          {sitesData &&
            getMultipleRandom(appData, 2).map((value, key) => {
              return (
                <div className="siteWrapper">
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <img src={value.icon} className="app-icon" />
                    <p>{value.name}</p>
                  </div>
                  <p>{value.time}</p>
                  <img src={threedot} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BottomMiddle;
