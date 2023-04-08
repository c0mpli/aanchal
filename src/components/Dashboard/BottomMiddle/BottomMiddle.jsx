import React from "react";
import threedot from "../../../assets/3dot.png";
function BottomMiddle() {
  const sitesData = ["www.google.com", "www.google.com"];
  const appData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      name: "Instagram",
      time: "6h 9m",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      name: "Instagram",
      time: "6h 9m",
    },
  ];
  return (
    <div className="parentContainer">
      <div>
        <h2 className="purpleColor" style={{ marginBottom: "1rem" }}>
          Frequently visited sites
        </h2>
        <div className="allSitesWrapper">
          {sitesData &&
            sitesData.map((value, key) => {
              return <div className="siteWrapper">{value}</div>;
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
            appData.map((value, key) => {
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
