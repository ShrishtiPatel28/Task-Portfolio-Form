import React from "react";
import NavLeft from "./NavLeft";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Works = () => {
  return (
    <div className="w-full h-screen">
        <h6 className="text font-bold text-sm italic pl-28 pt-10 pb-1">work</h6>
        <h1 className="text-[34px] font-bold uppercase tracking-wide pl-28 pb-5">
          recent project
        </h1>
        <div className="projects flex gap-16 pl-28">
          <div className="left w-[400px] h-[350px]">
            <div className="up w-full h-2/4 p-3 flex gap-12">
              <div className="text">
              <h6 className="text-xs font-bold italic">UX case study</h6>
              <h3 className="font-bold leading-7 tracking-wide text-3xl pt-3 pb-3">
                Bally <br />
                Website <br />
                Research
              </h3>
              <FaArrowUpLong style={{
                fontSize:"26",
                rotate:"45deg",
                marginLeft:"8px",
                marginTop:"2px"
              }}/>
              </div>
              <div className="img w-48 h-36 bg-black">
                <img className="w-full h-full object-cover" src="./images/photo1.png" alt="" />

              </div>
            </div>
            <div className="down p-3 flex gap-12">
            <div className="text">
              <h6 className="text-xs font-bold italic">UX case study</h6>
              <h3 className="font-bold leading-7 tracking-wide text-3xl pt-3 pb-3">
                Bally <br />
                Website <br />
                Research
              </h3>
              <FaArrowUpLong style={{
                fontSize:"26",
                rotate:"45deg",
                marginLeft:"8px",
                marginTop:"2px"
              }}/>
              </div>
              <div className="img w-48 h-36 bg-black">
                <img className="w-full h-full object-cover" src="./images/photo2.png" alt="" />

              </div>
            </div>
          </div>
          <div className="right w-[400px] h-[350px]">
          <div className="up w-full h-2/4 p-3 flex gap-12">
              <div className="text">
              <h6 className="text-xs font-bold italic">UX case study</h6>
              <h3 className="font-bold leading-7 tracking-wide text-3xl pt-3 pb-3">
                Bally <br />
                Website <br />
                Research
              </h3>
              <FaArrowUpLong style={{
                fontSize:"26",
                rotate:"45deg",
                marginLeft:"8px",
                marginTop:"2px"
              }}/>
              </div>
              <div className="img w-48 h-36 bg-black">
                <img className="w-full h-full object-cover" src="./images/photo4.png" alt="" />

              </div>
            </div>
            <div className="down p-3 flex gap-12">
            <div className="text">
              <h6 className="text-xs font-bold italic">UX case study</h6>
              <h3 className="font-bold leading-7 tracking-wide text-3xl pt-3 pb-3">
                Bally <br />
                Website <br />
                Research
              </h3>
              <FaArrowUpLong style={{
                fontSize:"26",
                rotate:"45deg",
                marginLeft:"8px",
                marginTop:"2px"
              }}/>
              </div>
              <div className="img w-48 h-36 bg-black">
                <img className="w-full h-full object-cover" src="./images/photo3.png" alt="" />

              </div>
            </div>
          </div>
        </div>
        <button className="bg-black text-slate-50	text-xs p-2 pl-5 pr-5 ml-[470px] mt-[14px] tracking-wider flex gap-2">
              Load more
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
      </div>
  );
};

export default Works;
