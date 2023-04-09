import React, { useEffect, useState } from "react";
import threedot from "../../../assets/3dot.png";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
function BottomMiddle() {
  const [sitesData, setSitesData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    const f = shuffled.slice(0, num);
    f.sort(function (a, b) {
      return a["time"] - b["time"];
    });
    return f.reverse();
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
      icon: "https://cdn-icons-png.flaticon.com/512/3938/3938026.png",
      name: "Youtube",
      time: "3h 37m",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2504/2504929.png",
      name: "Netflix",
      time: "4h 23m",
    },
  ];
  function getData() {
    // axios
    //   .get(
    //     `https://cs-dj.workspaceomkarb.repl.co/child/device/urls?childId=${id}`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setSitesData(res.data);
    //   })
    //   .catch((e) => console.log(e));
    fetch(
      `https://cs-dj.workspaceomkarb.repl.co/child/device/urls?childId=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log("dataatattaat", data);
        setSitesData(data);
      });
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
          {appData &&
            appData?.slice(1, 3).map((value, id) => {
              return (
                <div className="siteWrapper" key={id}>
                  {value.name}
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
          {appData &&
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
