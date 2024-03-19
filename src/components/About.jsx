import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import NavLeft from "./NavLeft";

function About() {
  return (
    <div className="flex gap-12 w-full h-screen">
      <div className="left h-full">
        <div className="toptext ml-16 mt-10">
          <h6 className="text-black font-semibold italic mb-4">
            Nice to meet you!
          </h6>
          <h1 className="text-4xl text-black font-bold uppercase">
            Welcome to...
          </h1>
        </div>

        <div className="w-64 p-4 h-64 overflow-hidden ml-20 mt-8 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src="./images/jac.png"
            alt="photo"
          />
        </div>

        <div className="bottomtext ml-2">
          <h1 className="text-4xl mt-1 ml-20 font-extrabold uppercase bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.700),theme(colors.orange.400),theme(colors.pink.700),theme(colors.orange.400),theme(colors.orange.700),theme(colors.purple.400),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
            {localStorage.getItem("name")
              ? localStorage.getItem("name")
              : "Jacob Jones"}
          </h1>
          <h3 className="font-bold italic mt-1 ml-16 text-lg tracking-tight">
            {localStorage.getItem("position")
              ? localStorage.getItem("position")
              : "Product Desginer"}{" "}
            <span className="font-normal ml-32mt-8 not-italic">based on</span>{" "}
            {localStorage.getItem("location")
              ? localStorage.getItem("location")
              : "london"}
          </h3>
          <button className="font-bold text-sm mt-5 ml-40"> Download CV</button>
        </div>
      </div>
      <div className="Right h-full">
        <div className="det mt-16 ml-14 flex">
          <div className="flex flex-col">
            <div className="flex gap-2 p-3 items-center ">
              <MdLocalPhone
                style={{
                  fontSize: "13px",
                }}
              />
              <h6 className="text-xs font-bold italic">
                {" "}
                {localStorage.getItem("contact")
                  ? localStorage.getItem("contact")
                  : "+77 022 444 56 90"}
              </h6>
            </div>
            <div className="flex gap-3 p-3 items-center">
              <MdMailOutline
                style={{
                  fontSize: "12",
                }}
              />
              <h6 className="text-xs font-bold italic">
                {" "}
                {localStorage.getItem("email")
                  ? localStorage.getItem("email")
                  : "jacob360@gmail.com"}
              </h6>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3 p-3 items-center">
              <MdOutlinePermContactCalendar
                style={{
                  fontSize: "13",
                }}
              />

              <h6 className="text-xs font-bold italic">
                {" "}
                {localStorage.getItem("age")
                  ? localStorage.getItem("age")
                  : "25"}{" "}
                years
              </h6>
            </div>
            <div className="flex gap-3 p-3 items-center">
              <IoLocationOutline
                style={{
                  fontSize: "14",
                }}
              />
              <h6 className="text-xs font-bold italic">
                {localStorage.getItem("location")
                  ? localStorage.getItem("location")
                  : "london"}
              </h6>
            </div>
          </div>
        </div>
        <div className="texts text-sm flex justify-between gap-4 border-t-2 border-black mt-2 ml-14 pt-4">
          <div className="lef ">
            <div className="flex gap-1 mt-4">
              <h1 className="text-4xl font-extrabold p-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.700),theme(colors.purple.700),theme(colors.orange.400),theme(colors.orange.700),theme(colors.orange.700),theme(colors.purple.400),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
                {localStorage.getItem("experience")
                  ? localStorage.getItem("experience")
                  : "10+"}
              </h1>
              <h3 className="font-bold italic leading-4 mt-4">
                Years <br /> experience...
              </h3>
            </div>
            <p className="font-semibold leading-5 ml-3 mt-4">
              Hello there! My name is{" "}
              <span className="text-red-400">
                {" "}
                {localStorage.getItem("name")
                  ? localStorage.getItem("name")
                  : "Jacob Jones"}
              </span>
              . <br /> I am a web designer & developer, and <br />
              I'm very passionate and dedicated to <br /> my work.
            </p>
          </div>
          <div className="rig">
            <div className="flex gap-1 mt-4">
              <h1 className="text-4xl font-extrabold  p-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.700),theme(colors.red.400),theme(colors.pink.400),theme(colors.orange.400),theme(colors.orange.400),theme(colors.purple.400),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
                14
              </h1>
              <h3 className="font-bold italic leading-4 mt-4">
                Clients <br /> Worldwide...
              </h3>
            </div>
            <p className="font-semibold leading-5 ml-3 mt-4">
              With 10+ years experience as a <br /> professional a graphic
              designer. <br /> I have acquired the skills and <br /> knowledge
              necessary to make your <br /> project a success.{" "}
            </p>
          </div>
        </div>
        <div className="box h-20 w-11/12 bg-black ml-14 mt-10">
          <h5 className="text-white opacity-8 font-semibold italic text-center p-4 pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Unde
            atque. Lorem ipsum dol adipis doloremque.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default About;
