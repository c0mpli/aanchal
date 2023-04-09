import React, { useEffect, useState } from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import ChildProfile from "../Profile/ChildProfile";
import ChildAppData from "../AppData/ChildAppData";
import { useNavigate } from "react-router-dom";
const RightSide = ({ data }) => {
  const navigate = useNavigate();
  const [allApps, setAllApps] = useState([]);
  const [blockedApps, setBlockedApps] = useState([]);

  useEffect(() => {
    const t1 = [];
    const t2 = [];
    data?.apps.forEach((x, i) => {
      if (!x.isLocked) t1.push(x);
      else t2.push(x);
    });
    setAllApps(t1);
    setBlockedApps(t2);
  }, [data]);
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
          <ChildProfile
            totalApps={allApps.length}
            blockedApps={blockedApps.length}
            name={data?.child.name}
            age={data?.child.age}
          />
        </div>
        <div>
          <ChildAppData
            allApps={allApps}
            setAllApps={setAllApps}
            blockedApps={blockedApps}
            setBlockedApps={setBlockedApps}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
