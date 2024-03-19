import React, { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

function Contact() { 
//   const [userRegistration, setUserRegistration] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//     position: "",
//   });
  // console.log("formData", userRegistration);
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  return (
    <div className="w-full h-screen flex gap-[120px]">
      {/* <h1>{userRegistration?.age}</h1> */}
      <div className="left">
        <div className="text font-['montserrat']">
          <h6 className="contact text font-bold text-sm italic pl-28 pt-[100px]">
            Contact
          </h6>
          <h1 className="text-[30px] font-bold uppercase tracking-wide pl-28">
            reach out me
          </h1>
          <h5 className=" w-[380px] address text-xs font-semibold leading-5 tracking-tighter pl-28 pt-7">
            {localStorage.getItem("address")
              ? localStorage.getItem("address")
              : "249 King Sir, 05thFloor, Ultra Haouse Building  Melboune, VIC 3000, London."}
          </h5>
        </div>
        <div className="detalis pl-28 pt-[50px] text-[19px]">
          <div className="pb-3 tracking-wide">
            <div className="flex gap-1 items-center ">
              <MdLocalPhone
                style={{
                  fontSize: "16px",
                }}
              />
              <h6 className="font-extrabold">
                {" "}
                {localStorage.getItem("contact")
                  ? localStorage.getItem("contact")
                  : "+77 022 444 56 90"}
              </h6>
            </div>
          </div>
          <div className="tracking-wide">
            <div className="flex gap-2 items-center">
              <MdMailOutline
                style={{
                  fontSize: "16",
                }}
              />
              <h6 className="font-extrabold">
                {" "}
                {localStorage.getItem("email")
                  ? localStorage.getItem("email")
                  : "jacob360@gmail.com"}
              </h6>
            </div>
          </div>
        </div>
        <div className="socialnav flex gap-4 uppercase font-bold text-[12px] pl-28 pt-[44px] tracking-wide">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.linkedin.com">linkedin</a>
        </div>
      </div>
      <div className="rightbox w-[500px] h-[400px] bg-gradient-to-r text-slate-50 from-purple-500 to-orange-500 mt-[90px]">
        <form action="">
          <h1 className="text-[30px] uppercase font-bold pt-5 pl-10">
            personal details
          </h1>
          <div className="name flex gap-8 text-xs mt-[20px] ml-10">
            <div className="">
              <label
                htmlFor="name"
                className="uppercase font-bold  w-[200px] h-[30px]"
              >
                Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                className=" w-[200px] mt-1 bg-transparent outline-none border-b-2 border-slate-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="uppercase font-bold  w-[200px] h-[30px]"
              >
                email
              </label>{" "}
              <br />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                className=" w-[200px] mt-1 bg-transparent outline-none border-b-2 border-slate-50"
              />
            </div>
          </div>
          {/* <div className="flex gap-8 text-xs mt-[20px] ml-10">
            <div className="">
              <label
                htmlFor="age"
                className="uppercase font-bold  w-[200px] h-[30px]"
              >
                Contact-No
              </label>{" "}
              <br />
              <input
                type="text"
                name="contact"
                id="contact"
                autoComplete="off"
                value={userRegistration.contact}
                onChange={handleInput}
                className=" w-[200px] mt-1 bg-transparent outline-none border-b-2 border-slate-50"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="uppercase font-bold  w-[200px] h-[30px]"
              >
                address
              </label>{" "}
              <br />
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="off"
                value={userRegistration.address}
                onChange={handleInput}
                className=" w-[200px] mt-1 bg-transparent outline-none border-b-2 border-slate-50"
              />
            </div>
          </div> */}

          <div className="w-[400px] h-[60px] uppercase font-bold text-xs border-b-2 border-slate-50 ml-10 mt-7">Message</div>
           <h5 className="uppercase font-bold text-xs p-2 ml-14">attach file</h5>

          <button
            type="submit"
            className="bg-black text-slate-50 text-xs p-2 pl-5 pr-5 ml-14 mt-[20px] tracking-wider flex gap-2"
          >
            Submit now
            <FaArrowUp
              style={{
                backgroundImage: "linear-gradient(tomato,maroon, purple)",
                padding: "3px",
                fontSize: "18",
                rotate: "90deg",
                color: "beige",
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
