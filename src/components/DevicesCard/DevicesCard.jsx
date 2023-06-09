import React from "react";
import "./DevicesCard.css";
import { useNavigate } from "react-router-dom";
import child1 from "../../assets/profile/child1.png";
function DevicesCard(props) {
  const navigate = useNavigate();
  console.log(props.data, props.index);
  return (
    <div
      className="card-wrapper"
      onClick={() => {
        navigate(`../dashboard?id=${props.data?._id}`);
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
        <p>Last Used App: Instagram</p>
        <p>Last Location: DJ Sanghvi, Vile Parle</p>
      </div>
      <button
        style={{
          margin: "0 auto",
          border: "1px solid #4640DE",
          borderRadius: "10px",
          padding: "0.7rem",
          marginTop: "0.5rem",
        }}
      >
        Click to view more
      </button>
    </div>
  );
}

export default DevicesCard;
