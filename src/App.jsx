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
          <div className="main w-full h-screen relative ">
            <img  className="w-full h-screen object-cover absolute" src="./images/BG2.png" alt="" />
            <div className="heading absolute">
              <h1
                className="text-8xl font-bold text-white ml-24 mt-2"
                style={{ fontFamily: "Times new roman" }}
              >
                Fill the Form-
              </h1>
              <h1 className="text-8xl font-extrabold text-[#4b5650] ml-96">
                -Have a Portfolio!
              </h1>
            </div>
            <div className="form w-[70%] h-[59%] ml-48 mt-1 backdrop-blur-sm bg-white/10 p-4 absolute top-[38%]">
              <form action="" onSubmit={handleSubmit}>
                <h2 className="font-bold text-xl text-[#fee2e2] mt-2 mb-2 leading-5 text-slate-50 tracking-wide">
                  Personal Details-
                </h2>
                <div className="flex gap-12 mb-5">
                  <div className="name">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="ml-2 mb-1 w-96 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="email">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="ml-2 mb-1 w-96 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder=" Your Email"
                    />
                  </div>
                </div>
                <div className="flex mb-5 gap-8">
                  <div className="age">
                    <input
                      type="text"
                      name="age"
                      id="age"
                      autoComplete="off"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="ml-2 mb-1 w-40 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="Age"
                    />
                  </div>
                  <div className="location">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      autoComplete="off"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="ml-2 mb-1 w-44 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="location"
                    />
                  </div>
                  <div className="contact ml-6">
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      autoComplete="off"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="ml-2 mb-1 w-48 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="Contact-No"
                    />
                  </div>
                </div>
                <div className="flex mb-3 mt-8">
                  <div className="address">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="ml-2 mb-1 w-[50vw]  bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="Permanent Address"
                    />
                  </div>
                </div>
                <div className="flex mb-5 gap-9">
                  <div className="position">
                    <input
                      type="text"
                      name="position"
                      id="position"
                      autoComplete="off"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="ml-2 mb-1 w-58 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="Position"
                    />
                  </div>
                  <div className="experience">
                    <input
                      type="text"
                      name="experience"
                      id="experience"
                      autoComplete="off"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="ml-2 mb-1 w-58 bg-transparent outline-none py-1 pl-1 text-[#a2a4a4] font-bold placeholder:text-[#a2a4a4] placeholder:font-medium focus:outline-none tracking-widest"
                      style={{
                        fontSize: "1.2vw",
                        borderBottom: "1px solid #a2a4a4",
                      }}
                      placeholder="Year of Experience"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-black font-bold text-slate-100 ml-2 p-2 pl-5 pr-5 tracking-wider disabled:cursor-not-allowed disabled:bg-gray-500 disacled:text-slate-300"
                  style={{ fontSize: "1vw" }}
                  disabled={!isFormComplete()}
                >
                  Submit now
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
