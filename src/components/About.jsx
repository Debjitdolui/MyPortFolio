import React from "react";
import { AppText } from "../constants";
import { aboutme } from "../assets";

const About = () => {
  return (
    <div
      id="aboutme"
      className="pt-[65px] w-full min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center   max-w-5xl ">
        <img
          src={aboutme}
          alt=""
          className=" rounded-md bg-slate-100 md:max-w-full h-auto w-1/2  md:mb-0 "
        />

        <div className="flex flex-col pl-9">
          <h1 className="text-black text-[45px] pt-[20px] font-bold text-center">
            About Me
          </h1>
          <h1 className="text-[35px]">{AppText.aboutMetitle}</h1>

          <h1 className="text-[18px]">{AppText.aboutMeDescription}</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
