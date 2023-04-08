import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

function Modal({ setOpenModal, setGameExists }) {
  const navigate = useNavigate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>We see potential here😍 Do you want to continue?</h1>
        </div>
        {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
        <div className="footer">
          <button
            onClick={() => {
              navigate("/dashboard");
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            No
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
              setGameExists(true);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
