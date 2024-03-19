import React, { useState } from "react";
import NavLeft from "./components/NavLeft";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [first, setfirst] = useState(false);
  

  const isFormComplete = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      age.trim() !== "" &&
      contact.trim() !== "" &&
      location.trim() !== "" &&
      address.trim() !== "" &&
      position.trim() !== "" &&
      experience.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setfirst(true);
    // setButtonenabled(true);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("contact", contact);
    localStorage.setItem("location", location);
    localStorage.setItem("address", address);
    localStorage.setItem("position", position);
    localStorage.setItem("experience", experience);
  };


  return (
    <div className="w-full h-screen flex bg-white-900 overflow-y-scroll no-scrollbar">
      {first ? (
        <NavLeft name={name} />
      ) : (
        <>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <h2 className="text-base p-4 font-semibold leading-7 text-gray-900">
                Personal Details
              </h2>
              <div className="flex gap-6">
                <div className="name mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" ml-4 border-b-2 border-slate-100 w-[200px] text-xs  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Name"
                  />
                </div>
                <div className="email mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" ml-4 border-b-2 w-[200px] border-slate-100 text-xs py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="age mb-[10px] ml-[70px]">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    autoComplete="off"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="ml-4 border-b-2 border-slate-100 w-[200px] text-xs py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Age"
                  />
                </div>
                <div className="address mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                   Permanent Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="ml-4 border-b-2 border-slate-100 w-[200px] text-xs py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder=" Permanent Address"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="location mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    {" "}
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="off"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className=" ml-4 border-b-2 border-slate-100 w-[200px] text-xs py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="location"
                  />
                </div>
                <div className="contact mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    {" "}
                    Contact-No
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    autoComplete="off"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className=" ml-4 border-b-2 border-slate-100 w-[200px] text-xs py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Contact-No"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="position mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    {" "}
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    autoComplete="off"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className=" ml-4 border-b-2 border-slate-100 w-[200px] text-xs py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Position"
                  />
                </div>
                <div className="experience mb-[10px] ml-[70px] ">
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium leading-7 mb-1 text-gray-900"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    autoComplete="off"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className=" ml-4 border-b-2 border-slate-100 text-xs w-[200px] py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Year of Experience"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-black text-slate-100 text-xs p-2 pl-5 pr-5 ml-24 mt-[10px] tracking-wider disabled:cursor-not-allowed disabled:bg-gray-400 disacled:text-slate-200"
                disabled={!isFormComplete()}
                >
                Submit now
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
