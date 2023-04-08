import React from "react";
import eyeIcon from "../../assets/eye.png";
import timeIcon from "../../assets/time.png";
import { useNavigate } from "react-router-dom";
import "./OurtipsCard.css";
function OurtipsCard(props) {
  const navigate = useNavigate();
  return (
    <div className="ourtips-card" style={{ backgroundColor: props.color }}>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="outtips-card-bottomBar">
        {props.events != "true" && props.shop != "true" && (
          <>
            <img src={timeIcon} />
            <p>{props.time} read</p>
            <img src={eyeIcon} />
            <p>{props.views} views</p>
          </>
        )}
        {props.events === "true" && (
          <>
            <img src={eyeIcon} />
            <p>{props.time}</p>
            <img src={timeIcon} />
            <p>{props.views}</p>
          </>
        )}
      </div>
      {props.events === "true" && (
        <button
          className="eventButton"
          onClick={() => navigate("../dashboard")}
        >
          Join
        </button>
      )}
      {props.shop === "true" && (
        <button
          className="eventButton"
          onClick={() => navigate("../dashboard")}
        >
          Buy now !
        </button>
      )}
    </div>
  );
}

export default OurtipsCard;
