import axios from "axios";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
// import { json } from "react-router-dom";
const Profile = () => {


  // const user = JSON.parse(localStorage.getItem("user"));
  const user = {
    "_id": "60e1f1b0b0b5a40015b0b0b1",
    "firstname": "Prateek",
    "lastname": "Vishwakarma",
    "email": "prateekv2003@gmail.com",
    "password": "$2b",
    "mobilenum": "1234567890",
    "address": "Bhopal",
    "experience": "2",
    "timings": [
      "10:00",
      "18:00"
    ],
    "category": "Mental Health",
    "duration": "30",
    "fee": "1000"
  }

  const [fname, setFname] = useState(user?.firstname);
  const [lname, setLname] = useState(user?.lastname);
  const [email, setEmail] = useState(user?.email);
  const [experience, setExperience] = useState(user?.experience);
  const [timings, setTimings] = useState(user?.timings);
  const [startTime, setStartTime] = useState(user?.timings[0]);
  const [endTime, setEndTime] = useState(user?.timings[1]);
  const [category, setCategory] = useState(user?.category);
  const [duration, setDuration] = useState(user?.duration);
  const [location, setLocation] = useState(user?.address);
  const [phone, setPhone] = useState(user?.mobilenum);
  const [fee, setFee] = useState(user?.fee);

  function makeSlots(timing, d) {
    let slots = [];
    let start = timing[0].split(":");
    let end = timing[1].split(":");
    let duration = parseInt(d);
    let startHour = parseInt(start[0]);
    let startMin = parseInt(start[1]);
    let endHour = parseInt(end[0]);
    let endMin = parseInt(end[1]);
    let currHour = startHour;
    let currMin = startMin;
    let prevStart = currHour + ":" + currMin;
    // currMin += duration;
    while (currHour < endHour || (currHour === endHour && currMin < endMin)) {
      currMin += duration;
      if (currMin >= 60) {
        currMin -= 60;
        currHour += 1;
      }
      slots.push([prevStart, currHour + ":" + currMin]);
      prevStart = currHour + ":" + currMin;
    }
    console.log(slots);
    return slots;
  }
  // let duration = parseInt(duration[0]);
  function updateProfile(e) {
    e.preventDefault();

    console.log(fname, lname, email, experience, startTime, endTime, duration, location, category, fee, phone);

    // const data = { name, email, experience, timings, category };
    const data = {
      _id: user._id,
      email: email,
      firstname: fname,
      lastname: lname,
      mobilenum: phone,
      fee: parseInt(fee),
      experience: parseInt(experience),
      timings: [startTime, endTime],
      duration: parseInt(duration),
      slot: makeSlots([startTime, endTime], duration),
    };

    console.log(data);
    axios
      .post("https://E4.adityasurve1.repl.co/user/update-profile", data)
      .then((response) => {
        console.log(response.data);
        // setErrorMessage("ok");
        localStorage.setItem("user", JSON.stringify(response.data.data));
        // localStorage.setItem("token", response.data.token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        alert("Incorrect details! Please try again!");
      });
  }

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <>
        {/* This is an example component */}
        <div className="h-full">
          <div className="border-b-2 block md:flex">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
              <div className="w-full flex items-center justify-center">
                <div className="relative w-96 h-auto bg-gray-50 rounded-md pt-24 pb-8 px-4 shadow-lg hover:shadow-xl transition flex flex-col items-center">
                  <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
                    <div className="rounded-full bg-black w-full h-full overflow-auto">
                      <img src="https://rairaksa.github.io/assets/img/rai.jpg" />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="font-bold text-lg block">
                      {fname} {lname}
                    </label>
                    <label className="font-bold text-gray-500 text-base">
                      {category?.toUpperCase()}
                    </label>
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Experience :{" "}
                        <span className="text-sm font-light text-gray-600">
                          {experience} years
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Email :{" "}
                        <span className="text-sm font-light text-gray-600">
                          {email}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Time :{" "}
                        <span className="text-sm font-light text-gray-600">
                          {timings && timings[0]} - {timings && timings[1]}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Address :{" "}
                        <span className="text-sm font-light text-gray-600">
                          {location}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Fee :{" "}
                        <span className="text-sm font-light text-gray-600">
                          Rs. {fee}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-lg">
              <form onSubmit={updateProfile} className="rounded  shadow p-6">
                <div className="pb-6 flex space-x-2">
                  <div className="w-[50%]">
                    <label
                      htmlFor="fname"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      First Name
                    </label>
                    <div className="flex">
                      <input
                        id="fname"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="text"
                        defaultValue={user?.firstname}
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Last Name
                    </label>
                    <div className="flex">
                      <input
                        id="lname"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="text"
                        defaultValue={user?.lastname}
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-500 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    disabled={true}
                    id="email"
                    className="border-1  rounded-r px-4 py-2 w-full bg-gray-100 text-gray-500"
                    type="email"
                    defaultValue={user?.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="pb-6 flex space-x-2">
                  <div className="w-[50%]">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      From
                    </label>
                    <div className="flex">
                      <input
                        id="timing"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="time"
                        defaultValue={startTime}
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <label
                      htmlFor="timing"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      To
                    </label>
                    <div className="flex">
                      <input
                        id="timing"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="time"
                        defaultValue={endTime}
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-6 flex space-x-2">
                  <div className="w-[50%]">
                    <label
                      htmlFor="timing"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Experience
                    </label>
                    <div className="flex">
                      <input
                        id="experience"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="number"
                        defaultValue={user?.experience}
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <label
                      htmlFor="name"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Duration
                    </label>
                    <div className="flex">
                      <select
                        id="duration"
                        name="duration"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        required=""
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                        value={duration}
                        defaultValue={duration}
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pb-6 flex space-x-2">
                  <div className="w-[50%]">
                    <label
                      htmlFor="timing"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Fee
                    </label>
                    <div className="flex">
                      <input
                        id="fee"
                        className="border border-black rounded-r px-4 py-2 w-full"
                        type="number"
                        defaultValue={fee}
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <label
                      htmlFor="phone"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Mobile
                    </label>
                    <div className="flex">
                      <input
                        id="phone"
                        className="border border-black rounded-r px-4 py-2 w-full"
                        type="number"
                        defaultValue={phone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end ">
                  <button
                    className="ml-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-2 hover:border-[#0062B5] bg-[#0062B5] rounded-lg hover:bg-[#20469d] duration-200"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Profile;
