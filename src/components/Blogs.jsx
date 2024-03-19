import React from "react";
import NavLeft from "./NavLeft";
import { FaArrowUp } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="w-full h-screen">
      <h6 className="text font-bold text-sm italic ml-[512px] pt-10 pb-1">Blogs</h6>
      <h1 className="text-[30px] font-bold uppercase tracking-wide ml-[420px] pb-5">
        read my blog
      </h1>
      <div className="content w-[850px] h-72 ml-28 flex gap-16">

        <div className="elem1 h-full w-60 border-b-2 border-gray-300">
          <div className="img w-full h-48 bg-black">
            <img className="w-full h-full object-cover" src="./images/photo13.png" alt="" />
          </div>
          <div className="text">
            <h6 className="text-xs font-bold italic pt-3">10, July, 2022</h6>
            <h5 className="text-[18px] leading-5 font-bold pt-2">
              12 unique example of <br /> protolio websites
            </h5>
          </div>
        </div>
        <div className="elem2 h-full w-60 border-b-2 border-gray-300">
          <div className="img w-full h-48 bg-black">
            <img className="w-full h-full object-cover" src="./images/photo12.png" alt="" />
          </div>
          <div className="text">
            <h6 className="text-xs font-bold italic pt-3">10, July, 2022</h6>
            <h5 className="text-[18px] leading-5 font-bold pt-2">
              12 unique example of <br /> protolio websites
            </h5>
          </div>
        </div>
        <div className="elem3 h-full w-60 border-b-2 border-gray-300">
          <div className="img w-full h-48 bg-black">
            <img className="w-full h-full object-cover" src="./images/photo11.png" alt="" />
          </div>
          <div className="text">
            <h6 className="text-xs font-bold italic pt-3">10, July, 2022</h6>
            <h5 className="text-[18px] leading-5 font-bold pt-2">
              12 unique example of <br /> protolio websites
            </h5>
          </div>
        </div>
      </div>
      <button className="bg-black text-slate-50	text-xs p-2 pl-5 pr-5 ml-[470px] mt-[40px] tracking-wider flex gap-2">
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

export default Blogs;
