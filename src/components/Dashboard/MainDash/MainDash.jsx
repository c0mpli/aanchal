import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Maps from "../../Maps/Maps";
import BottomMiddle from "../BottomMiddle/BottomMiddle";
const MainDash = () => {
  return (
    <div className="MainDash">
      <span>
        <h1 className="purpleColor">Analytics</h1>
        <p className="greyColor">See what they have been upto</p>
      </span>
      <Cards />
      <BottomMiddle />
      <Table />
    </div>
  );
};

export default MainDash;
