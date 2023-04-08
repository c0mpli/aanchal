import React from "react";
import child1 from "../../../assets/profile/child1.png";
import "./ChildProfile.css";
function ChildProfile() {
  return (
    <div className="childProfile">
      <img className="childImage" src={child1} />
      <h4>Sunidhi</h4>
      <p className="greyColor">14 years old</p>
      <div className="app-details">
        <span>
          <b>457</b> <span className="greyColor">apps used</span>
        </span>
        <span>
          <b>10</b> <span className="greyColor">blocked apps</span>
        </span>
      </div>
    </div>
  );
}

export default ChildProfile;
