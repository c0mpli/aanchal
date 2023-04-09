import React from "react";
import Switch from "react-switch";
import "./SidebarMode.css";
function SidebarMode(props) {
  return (
    <div className="ModeWrapper">
      <span className="mode-titleWrapper">
        <h3>{props.title}</h3>
        <Switch
          checked={props.toggle}
          onChange={() => {
            props.setToggle(props.toggle ? false : true);
            console.log(props.toggle);
          }}
          checkedIcon=""
          uncheckedIcon=""
        />
      </span>
      <div className="mode-grids">
        {!props.time && (
          <>
            <p>Time: </p>
            <div className="timeInputWrapper">
              <input className="timeInput" placeholder="00" />
              :
              <input className="timeInput" placeholder="00" />
              <input className="timeInput" placeholder="AM" />
            </div>
          </>
        )}

        {!props.repeat && (
          <>
            <p>Repeat: </p>
            <input className="repeatInput" placeholder="Daily" />
          </>
        )}
      </div>
    </div>
  );
}

export default SidebarMode;
