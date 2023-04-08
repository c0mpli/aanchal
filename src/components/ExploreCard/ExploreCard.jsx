import React from "react";
import "./ExploreCard.css";
function ExploreCard(props) {
  return (
    <div className="exploreCard-wrapper">
      <img src={props.image} />
      <p>{props.title}</p>
    </div>
  );
}

export default ExploreCard;
