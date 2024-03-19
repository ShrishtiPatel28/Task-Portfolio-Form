import React, { useState } from "react";
import NavLeft from "./NavLeft";
import { BsDot } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

const Services = () => {
  // const [show,setshow] = usestate(false)
  const changed = () => {};
  return (
    <div className="w-full h-screen">
      <h6 className="text font-bold text-sm italic pl-28 pt-7">Service</h6>
      <h1 className="text-[34px] font-bold uppercase tracking-wide pl-28">
        my specialties
      </h1>
      <div className="element1 w-9/12 h-20 ml-28 border-b-2 border-gray-300  relative">
        <div className="leftside absolute left-0 top-2">
          <div className="heading flex pt-3">
            <BsDot
              style={{
                fontSize: "32",
                marginLeft: "-9",
                marginTop: "2px",
              }}
            />
            <h2 className="uppercase font-bold text-[22px]">web design</h2>
          </div>
        </div>
        <div className="rightside flex gap-11 w-auto h-10 absolute right-0 top-5">
          <div className="para text-xs leading-5">
            You can customize a template or make your own from scratch, <br />{" "}
            with an immersive library at your disposal.
          </div>
          <button onClick={changed} className="button cursor-pointer}">
            <GoPlus
              style={{
                fontSize: "28",
                // marginRight:"-50",
                marginTop: "4px",
              }}
            />
          </button>
        </div>
      </div>
      <div className="element2 w-9/12 h-20 ml-28 border-b-2 border-gray-300 relative">
        <div className="leftside absolute left-0 top-2">
          <div className="heading flex pt-3">
            <BsDot
              style={{
                fontSize: "32",
                marginLeft: "-9",
                marginTop: "2px",
              }}
            />
            <h2 className="uppercase font-bold text-[22px]">ui/ux design</h2>
          </div>
        </div>
        <div className="rightside flex gap-11 w-auto h-10 absolute right-0 top-5">
          <div className="para text-xs leading-5">
            You can customize a template or make your own from scratch, <br />{" "}
            with an immersive library at your disposal.
          </div>
          <button onClick={changed} className="button cursor-pointer}">
            <GoPlus
              style={{
                fontSize: "28",
                marginTop: "4px",
              }}
            />
          </button>
        </div>
      </div>
      <div className="element3 w-9/12 h-20 ml-28 border-b-2 border-gray-300 relative">
        <div className="leftside absolute left-0 top-2">
          <div className="heading flex pt-3 ">
            <BsDot
              style={{
                fontSize: "32",
                marginLeft: "-9",
                marginTop: "2px",
              }}
            />
            <h2 className="uppercase font-bold text-[22px]">
              Mobile Application
            </h2>
          </div>
        </div>
        <div className="rightside flex gap-11 w-auto h-10 absolute right-0 top-5">
          <div className="para text-xs leading-5 pb-1">
            {/* <div className="img w-60 h-24 pb-2">
              <img
                className="w-full h-full object-cover"
                src="./images/photo5.png"
                alt=""
              />
            </div> */}
            You can customize a template or make your own from scratch, <br />{" "}
            with an immersive library at your disposal.
          </div>
          <button className="button cursor-pointer}">
            <GoPlus
              style={{
                fontSize: "28",
                // marginRight:"-50",
              }}
            />
          </button>
        </div>
      </div>
      <div className="element4 w-9/12 h-20 ml-28 border-b-2 border-gray-300 relative">
        <div className="leftside absolute left-0 top-2">
          <div className="heading flex pt-3">
            <BsDot
              style={{
                fontSize: "32",
                marginLeft: "-9",
                marginTop: "2px",
              }}
            />
            <h2 className="uppercase font-bold text-[22px]">user research</h2>
          </div>
        </div>
        <div className="rightside flex gap-11 w-auto h-10 absolute right-0 top-5">
          <div className="para text-xs leading-5">
            You can customize a template or make your own from scratch, <br />{" "}
            with an immersive library at your disposal.
          </div>
          <button onClick={changed} className="button cursor-pointer}">
            <GoPlus
              style={{
                fontSize: "28",
                // marginRight:"-50",
                marginTop: "4px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
