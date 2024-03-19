import React, { useState } from "react";

import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoBehance } from "react-icons/io5";
import { FaDribbble } from "react-icons/fa";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Contact from "./Contact";
import Blogs from "./Blogs";

const NavLeft = (name) => {
  const [first, setfirst] = useState("home");
  console.log(name);
  return (
    <>
      <div className='nav bg-black h-screen w-44 h-full font-["Montserrat"] stricky left-0 top-0 text-white flex flex-col gap-16 items-start'>
        <h1 className="font-bold text-xl ml-7 mt-7">Jac.</h1>

        <div className="links flex flex-col gap-3">
          <button
            onClick={() => setfirst("home")}
            className=" ml-6 font-bold uppercase text-sm text-slate-300 hover:text-white"
          >
            home
          </button>
          <button
            onClick={() => setfirst("about")}
            className="ml-6 font-bold uppercase text-sm text-slate-300 hover:text-white"
          >
            about
          </button>
          <button
            onClick={() => setfirst("services")}
            className="ml-6 font-bold uppercase text-sm text-slate-300 hover:text-white"
          >
            services
          </button>
          <button
            onClick={() => setfirst("works")}
            className="ml-6 font-bold uppercase text-sm text-slate-300 hover:text-white"
          >
            works
          </button>
          <button
            onClick={() => setfirst("blogs")}
            className="ml-6 font-bold uppercase text-sm text-slate-300 hover:text-white"
          >
            blogs
          </button>
          <button
            onClick={() => setfirst("contact")}
            className="ml-6 font-bold uppercase text-sm text-slate-300 hover:text-white"
          >
            contacts
          </button>
           
        </div>

        <div className="sociallinks w-4 h-4 p-4 rounded-full">
          <IoLogoBehance
            style={{ fontSize: "34px", marginLeft: "2px", marginBottom: "7px" }}
          />
          <FaDribbble
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              color: "black",
              marginBottom: "8px",
              marginLeft: "5px",
              fontSize: "29px",
              padding: "3px",
              paddingBottom: "4px",
            }}
          />
          <FaSquareInstagram
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              marginLeft: "4px",
              color: "black",
              fontSize: "29px",
              padding: "3px",
              paddingBottom: "4px",
            }}
          />
        </div>
        <h6 className="copyright text-[10px] text-smaller tracking-tighter capitalize text-gray-400 mt-12 ml-5">
          copying &copy;2024 jacob <br />
          jones.all right reserved.
        </h6>
      </div>
      {first === "home" ? (
        <Home />
      ) : first == "about" ? (
        <About />
      ) : first == "works" ? (
        <Works />
      ) : first == "contact" ? (
        <Contact />
      ) : first == "blogs" ? (
        <Blogs />
      ) : first == "services" ? (
        <Services />
      ) : (
        ""
      )}
    </>
  );
};

export default NavLeft;
