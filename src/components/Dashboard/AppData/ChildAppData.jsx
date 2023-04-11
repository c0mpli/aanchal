import React, { useRef, useState } from "react";
import "./ChildAppData.css";
import blockIcon from "../../../assets/block.png";
import unBlockIcon from "../../../assets/unblock.png";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
function ChildAppData({ allApps, setAllApps, blockedApps, setBlockedApps }) {
  const [render, setRender] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const ref1 = useRef();
  const ref2 = useRef();
  async function markBlocked(e) {
    await axios.post("https://aanchal.onrender.com/child/device/app/lock", {
      childId: id,
      packageName: allApps[e.target.name].packageName,
    });
  }
  async function unmarkBlocked(e) {
    await axios.post("https://aanchal.onrender.com/child/device/app/lock", {
      childId: id,
      packageName: blockedApps[e.target.name].packageName,
    });
  }

  function handleClassName() {
    const s1 = ref1.current;
    const s2 = ref2.current;
    if (s1.className) {
      s1.className = "";
      s2.className = "selectedButton";
    } else if (s2.className) {
      s2.className = "";
      s1.className = "selectedButton";
    }
  }
  function handleBlock(e) {
    markBlocked(e);
    alert(`Blocked: ${allApps[e.target.name].appName}`);
    setBlockedApps([...blockedApps, allApps[e.target.name]]);
    allApps.splice(e.target.name, 1);
    setAllApps(allApps);
  }
  function handleUnBlock(e) {
    unmarkBlocked(e);
    alert(`UnBlocked: ${blockedApps[e.target.name].appName}`);
    setAllApps([...allApps, blockedApps[e.target.name]]);
    blockedApps.splice(e.target.name, 1);
    setBlockedApps(blockedApps);
  }

  return (
    <div className="childAppData">
      <div className="button-wrapper">
        <button
          onClick={() => {
            setRender(1);
            handleClassName();
          }}
          ref={ref1}
          className="selectedButton"
        >
          All Apps
        </button>
        <button
          onClick={() => {
            setRender(2);
            handleClassName();
          }}
          ref={ref2}
        >
          Blocked
        </button>
      </div>
      {render == 1 &&
        allApps &&
        allApps?.slice(0, 10).map((value, key) => {
          return (
            <div className="childSingleAppData" id={key}>
              <label>{value.appName}</label>
              <img
                src={blockIcon}
                className="clickableIcon"
                name={key}
                onClick={(e) => {
                  handleBlock(e);
                }}
              />
            </div>
          );
        })}
      {render == 2 &&
        blockedApps &&
        blockedApps?.slice(0, 10).map((value, key) => {
          return (
            <div className="childSingleAppData" id={key}>
              <label>{value.appName}</label>
              <img
                src={unBlockIcon}
                className="clickableIcon"
                name={key}
                onClick={(e) => {
                  handleUnBlock(e);
                }}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ChildAppData;
