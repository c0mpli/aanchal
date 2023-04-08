import React from "react";
import "./ChildAppData.css";
function ChildAppData() {
  const data = [
    { name: "Instagram", link: "www.instagram.com" },
    { name: "Facebook", link: "www.facebook.com" },
    { name: "Youtube", link: "www.youtube.com" },
    { name: "Instagram", link: "www.instagram.com" },
  ];
  return (
    <div className="childAppData">
      {data &&
        data.map((value, key) => {
          return (
            <div className="childSingleAppData">
              <input type="checkbox" />
              <label>{value.name}</label>
            </div>
          );
        })}
    </div>
  );
}

export default ChildAppData;
