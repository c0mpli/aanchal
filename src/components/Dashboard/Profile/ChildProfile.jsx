import React from "react";
import child1 from "../../../assets/profile/child1.png";
import "./ChildProfile.css";
function ChildProfile({ totalApps, blockedApps, name, age }) {
  return (
    <div className="childProfile">
      <img className="childImage" src={child1} />
      <h4>{name}</h4>
      <p className="greyColor">{age} years old</p>
      <div className="app-details">
        <span>
          <b>{totalApps}</b> <span className="greyColor">apps used</span>
        </span>
        <span>
          <b>{blockedApps}</b> <span className="greyColor">blocked apps</span>
        </span>
      </div>
    </div>
  );
}

export default ChildProfile;
