import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";

function Dashboard(props) {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default Dashboard;
