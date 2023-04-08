import React, { useState } from "react";
import "../../pages/AboutYou.css";

import multistep1 from "../../assets/multiform/1.png";
import multistep2 from "../../assets/multiform/2.png";
import multistep3 from "../../assets/multiform/3.png";
import multistep4 from "../../assets/multiform/4.png";
import multistep5 from "../../assets/multiform/5.png";
import multistep6 from "../../assets/multiform/6.png";
import multistep7 from "../../assets/multiform/7.png";
import multistep8 from "../../assets/multiform/8.png";
import multistep9 from "../../assets/multiform/9.png";
import multistep10 from "../../assets/multiform/10.png";
import multistep11 from "../../assets/multiform/11.png";
import multistep12 from "../../assets/multiform/12.png";
import multistep13 from "../../assets/multiform/13.png";
import multistep14 from "../../assets/multiform/14.png";
import multistep15 from "../../assets/multiform/15.png";
import multistep16 from "../../assets/multiform/16.png";
import multistep17 from "../../assets/multiform/17.png";
import multistep18 from "../../assets/multiform/18.png";

import axios from "axios";
const courseObj = {
  email: "",
  password: "",
  number: null,
  name: "",
  age: null,
  birthday: "",
  gender: "",
  interests: [],
  genderPreferences: "",
  profession: "",
  image: "",
  tagline: "",
  bio: "",
};
const interestData = [
  {
    icon: multistep1,
    title: "Badmintion",
  },
  {
    icon: multistep2,
    title: "Swimming",
  },
  {
    icon: multistep3,
    title: "Photography",
  },
  {
    icon: multistep4,
    title: "Football",
  },
  {
    icon: multistep5,
    title: "Cricket",
  },
  {
    icon: multistep6,
    title: "Cooking",
  },
  {
    icon: multistep7,
    title: "Movie-watching",
  },
  {
    icon: multistep8,
    title: "Concerts",
  },
  {
    icon: multistep9,
    title: "Bollywood",
  },
  {
    icon: multistep10,
    title: "Reading",
  },
  {
    icon: multistep11,
    title: "True Crime",
  },
  {
    icon: multistep12,
    title: "Backpacking",
  },
  {
    icon: multistep13,
    title: "Cafe-hopping",
  },
  {
    icon: multistep14,
    title: "F.R.I.E.N.D.S",
  },
  {
    icon: multistep15,
    title: "The Office",
  },
  {
    icon: multistep16,
    title: "Pizza",
  },
  {
    icon: multistep17,
    title: "Travelling",
  },
  {
    icon: multistep18,
    title: "HIMYM",
  },
];
function MultistepForm(props) {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState(courseObj);
  const completeFormStep = () => {
    if (formStep == 2) {
      //submit data
      axios
        .post("https://coc-1.adityasurve1.repl.co/register", formData)
        .then((res) => {
          alert("done");
        })
        .catch((e) => {
          console.log(e);
        });

      return;
    }
    setFormStep((curr) => curr + 1);
  };

  const handleInput = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]:
        ev.target.name === "age" || ev.target.name === "number"
          ? parseInt(ev.target.value, 10)
          : ev.target.value,
    });
  };
  function handleInput2(ev) {
    const t2 = { ...formData };
    t2.profession = ev;
    setFormData(t2);
  }
  function handleInput3(ev) {
    const t2 = { ...formData };
    t2.genderPreferences = ev;
    setFormData(t2);
  }

  function handleInterests(title) {
    if (formData.interests && !formData.interests.includes(title)) {
      const t2 = { ...formData };
      t2.interests = [...t2.interests, title];
      setFormData(t2);
    } else {
      const i = formData.interests.indexOf(title);
      const t2 = { ...formData };
      t2.interests.splice(i, 1);
      setFormData(t2);
    }
  }
  function handleGenderInterest(title) {
    if (
      formData.genderPreferences &&
      !formData.genderPreferences.includes(title)
    ) {
      const t2 = { ...formData };
      t2.genderPreferences = [...t2.genderPreferences, title];
      setFormData(t2);
    } else {
      const i = formData.genderPreferences.indexOf(title);
      const t2 = { ...formData };
      t2.genderPreferences.splice(i, 1);
      setFormData(t2);
    }
  }

  return (
    <div className="multistep-wrapper">
      <form className="login-form multistep-form">
        <span>
          <h1>Hi There ! Welcome to Blindr 🥳</h1>
          <p>Help us know more about you to find the perfect match for you.</p>
        </span>
        {formStep === 0 && (
          <section className="first-multistep">
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
            />
            <input
              placeholder="Email"
              type="text"
              name="email"
              onChange={handleInput}
              value={formData.email}
            />
            <input
              placeholder="Mobile number"
              type="number"
              name="number"
              onChange={handleInput}
              value={formData.number}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleInput}
              value={formData.password}
            />
            <input
              placeholder="Age"
              type="number"
              name="age"
              onChange={handleInput}
              value={formData.age}
            />
            <input
              placeholder="Birthday (DD/MM/YY)"
              type="text"
              name="birthday"
              onChange={handleInput}
              value={formData.birthday}
            />
            <input
              placeholder="Gender"
              type="text"
              name="gender"
              onChange={handleInput}
              value={formData.gender}
            />
          </section>
        )}
        {formStep === 1 && (
          <>
            <p>{"Interests (upto 10)"}</p>
            <section className="aboutyou-interests">
              {interestData.map((value, key) => {
                return (
                  <div
                    className="interest-select"
                    key={key}
                    id={`multistep${key}`}
                    style={{ backgroundColor: "white" }}
                    onClick={() => {
                      handleInterests(value.title);
                      const d = document.querySelector(`#multistep${key}`);
                      d.style.backgroundColor =
                        d.style.backgroundColor == "white" ||
                        d.style.backgroundColor == "transparent"
                          ? "#CBFFE4"
                          : "white";
                    }}
                  >
                    <img src={value.icon} />
                    {value.title}
                  </div>
                );
              })}
            </section>
            <p>{"Gender Preference"}</p>
            <section className="aboutyou-interests">
              {["Male", "Female", "Others"].map((value, key) => {
                return (
                  <div
                    className="interest-select"
                    key={key}
                    style={{ backgroundColor: "white" }}
                    id="genderPreferences"
                    onClick={() => {
                      handleInput3(value);
                      const d = document.querySelectorAll(`#genderPreferences`);
                      d.forEach((i) => {
                        i.style.backgroundColor = "white";
                      });
                      d[key].style.backgroundColor =
                        d[key].style.backgroundColor == "white" ||
                        d[key].style.backgroundColor == "transparent"
                          ? "#CBFFE4"
                          : "white";
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </section>
            <p>{"Profession"}</p>
            <section className="aboutyou-interests">
              {[
                "Student",
                "Working Professional",
                "Business",
                "Unemployed",
              ].map((value, key) => {
                return (
                  <div
                    className="interest-select"
                    key={key}
                    id="profession"
                    onClick={() => {
                      handleInput2(value);
                      const d = document.querySelectorAll(`#profession`);
                      d.forEach((i) => {
                        i.style.backgroundColor = "white";
                      });
                      d[key].style.backgroundColor =
                        d[key].style.backgroundColor == "white" ||
                        d[key].style.backgroundColor == "transparent"
                          ? "#CBFFE4"
                          : "white";
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </section>
          </>
        )}
        {formStep === 2 && (
          <section>
            <p>Face verification</p>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInput}
            />
            <p>Tagline</p>
            <input
              type="text"
              name="tagline"
              onChange={handleInput}
              placeholder="One-liner that best describes you."
            />
            <p>Bio</p>
            <input
              type="text"
              name="bio"
              onChange={handleInput}
              placeholder="A short bio about you."
            />
          </section>
        )}
        {formStep < 3 && (
          <button onClick={() => completeFormStep()} type="button">
            {formStep == 2 ? "Submit" : "Next"}
          </button>
        )}
      </form>
    </div>
  );
}

export default MultistepForm;
