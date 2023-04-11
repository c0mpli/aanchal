import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import MainDash from "../../components/Dashboard/MainDash/MainDash";
import RightSide from "../../components/Dashboard/RigtSide/RightSide";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState();
  function getData() {
    axios
      .get(`https://aanchal.onrender.com/child/analytics?childId=${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
