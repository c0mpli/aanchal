import React from "react";
import "./DevicesCard.css";
import { useNavigate } from "react-router-dom";
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
        <img />
        <p>Device {props.index + 1}</p>
        <p>{props.data.name}</p>
      </div>
      <div>
        <p>Age: {props.data.age} years</p>
        <p>Last Used App: {props.data.lastApp}</p>
        <p>Last Location: {props.data.lastLocation}</p>
      </div>
    </div>
  );
}

export default DevicesCard;
