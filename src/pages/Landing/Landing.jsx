import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import heroBG from "../../assets/mesh-gradient.png";
import { useNavigate } from "react-router-dom";
import readmeImg from "../../assets/qr.png";
import featuresIcon1 from "../../assets/no.png";
import featuresIcon2 from "../../assets/clock.png";
import featuresIcon3 from "../../assets/lock.png";
import heroImg from "../../assets/hero-img.png";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <img className="hero-bg" src={heroBG} alt="bgImage" />
      <Navbar />
      <div className="hero-section" id="landing">
        <div>
          <div className="hero-content">
            <h1>
              Protecting our <br></br>YOUNG ONES
            </h1>
            <p style={{ color: "rgba(242, 225, 255, 1)" }}>
              Let’s take a step to protect these young minds from getting lost
              in the cruel world of Internet.
            </p>
          </div>
          <div className="hero-buttons">
            <button onClick={() => navigate("/login")}>Sign me up !👋</button>
          </div>
        </div>
        <div>
          <img src={heroImg} />
        </div>
      </div>
      <div className="features-wrapper">
        <div className="features-section">
          <div className="features-lhs">
            <img src={featuresIcon1} alt="Features icon" />
            <h2>Restrict</h2>
            <p>
              Our app allows you to set restricted websites for your child.{" "}
              <br></br>
              <br></br> Our algorithms automatically block age restricted
              websites.
            </p>
          </div>
          <div className="features-vertical-line"></div>
          <div className="features-mhs">
            <img src={featuresIcon2} alt="Features icon" />
            <h2>Set Timer</h2>
            <p>
              You can set timer for each app to restrict over time usage.
              <br></br>
              <br></br> You can also set bedtime after which child cannot access
              any apps.
            </p>
          </div>
          <div className="features-vertical-line"></div>
          <div className="features-rhs">
            <img src={featuresIcon3} alt="Features icon" />
            <h2>App Lock</h2>
            <p>
              Our app allows parents to set an app lock triggered when the timer
              is up.<br></br>
              <br></br> Parents can select the apps to be blocked.
            </p>
          </div>
        </div>
      </div>
      <div className="readme-section">
        <img src={readmeImg} style={{ paddingLeft: "-8%" }} />
        <div className="readme-content-wrapper">
          <h1 className="readme-title">Connect using QR scanner !</h1>
          <p>
            <span style={{ color: "rgba(242, 225, 255, 1)" }}>
              Link Child’s phone to your account using QR scanner via our app in
              user’s phone.
            </span>
            <br></br>
            <br></br>
            <span style={{ color: "rgba(242, 225, 255, 1)" }}>
              Use Code shown after registering user to monitor website activity
              via extension.
            </span>
            <br></br>
            <br></br>
            <span
              style={{ color: "rgba(255, 255, 255, 1)", fontWeight: "600" }}
            >
              Supports multiple child devices!
            </span>
          </p>
        </div>
      </div>

      <div className="footer">
        <button>GET STARTED NOW!</button>
      </div>
    </div>
  );
}

export default Landing;
