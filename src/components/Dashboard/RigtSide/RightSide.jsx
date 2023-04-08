import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import ChildProfile from "../Profile/ChildProfile";
import ChildAppData from "../AppData/ChildAppData";
import { useNavigate } from "react-router-dom";
const RightSide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="allUsers"
        onClick={() => {
          navigate("/home");
        }}
      >
        All Users
      </button>
      <div className="RightSide">
        <div>
          <ChildProfile />
        </div>
        <div>
          <ChildAppData />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
