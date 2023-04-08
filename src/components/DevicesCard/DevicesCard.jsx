import React from "react";
import "./DevicesCard.css";
import { useNavigate } from "react-router-dom";
import child1 from "../../assets/profile/child1.png";
function DevicesCard(props) {
  console.log(props.index, props.length);
  const navigate = useNavigate();
  return (
    <div
      className="card-wrapper"
      onClick={() => {
        navigate("../dashboard");
      }}
    >
      <div className="card-wrapper-head">
        <span style={{ display: "flex", alignItems: "center" }}>
          <img src={child1} style={{ width: "5rem", height: "5rem" }} />
          <div>
            <p style={{ fontSize: "0.8rem" }}>Device {props.index + 1}</p>
            <p>
              <b>{props.data.name}</b>
            </p>
          </div>
        </span>
      </div>
      <div>
        <p>Age: {props.data.age} years</p>
        <p>Last Used App: {props.data.lastApp}</p>
        <p>Last Location: {props.data.lastLocation}</p>
      </div>
      <button>Click to view more</button>
    </div>
  );
}

export default DevicesCard;
