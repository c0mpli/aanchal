import React from "react";
import "./Cards.css";
import { cardsData } from "../../../Data/Data";
import chart from "../../../assets/Chart.png";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      <div className="parentContainer">
        <div className="mapContainer">
          <h4>Current Location</h4>
        </div>
        <div></div>
        <div className="totalUsageContainer">
          <h4 className="purpleColor">Total Usage</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "2rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
              }}
            >
              <div>
                <h4>Social Media</h4>
                <p>7h 39m</p>
              </div>
              <div>
                <h4>Games</h4>
                <p>4h 09m</p>
              </div>
              <div>
                <h4>Social Media</h4>
                <p>2h 23m</p>
              </div>
            </div>
            <img src={chart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
