import React from "react";

function DevicesCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper-head">
        <img />
        <p>{props.data.name}</p>
      </div>
    </div>
  );
}

export default DevicesCard;
