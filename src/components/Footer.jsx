import React from "react";
import { AppText, socialNetwork } from "../constants";
const Footer = () => {
  return (
    <div className="bg-gray-900 p-20 flex justify-center items-center">
      <div className=" flex flex-col">
        <div className="flex justify-center">
          {socialNetwork.map((item, index) => (
            <div key={index}>
              <a href={item.url}>
                <img src={item.logo} className="w-[40px]" />
              </a>
            </div>
          ))}
        </div>
        <h1 className="text-gray-500 text-[15px] md:text-[20px] mt-2">
          {AppText.copywriteText}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
