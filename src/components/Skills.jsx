import React from "react";
import { skill } from "./../assets";
import { AppText } from "../constants";
import { skillsList } from "../constants";
const Skills = () => {
  return (
    <div
      className="pt-[65px] bg-slate-50 pb-14 flex flex-col justify-center items-center"
      id="skills"
    >
      <div className=" flex justify-center items-center">
        <img src={skill} className="w-[70px] hover:animate-bounce" />
        <h1 className="text-[40px] font-bold pt-[30px]">
          {AppText.Skills}
          {AppText.Experties}
        </h1>
      </div>
      <div className="flex justify-center px-8 md:px-0 mt-8 border-2">
        <div className="w-full max-w-5xl flex flex-wrap justify-center">
          {skillsList.map((item, index) => (
            <div key={index} className="p-3 md:p-14 rounded-full mx-2 my-2">
              <img src={item.icon} alt={item.name} className="w-[60px]" />
              <span className="tooltip-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
