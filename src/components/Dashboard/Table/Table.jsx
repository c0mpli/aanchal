import * as React from "react";
import graph from "../../../assets/bada-graph.png";
import "./Table.css";

export default function BasicTable() {
  return (
    <div className="Table">
      <h3 className="greyColor">Weekly Average Usage</h3>
      <h2 className="purpleColor">7h 57m</h2>
      <img src={graph} />
    </div>
  );
}
