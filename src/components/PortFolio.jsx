import React from "react";
import { portfolio } from "../constants";
import { carhome } from "../assets";

const PortFolio = () => {
  return (
    <div
      className="min-h-screen  p-5 flex flex-col items-center  pt-[67px]"
      id="Projects"
    >
      <h1 className="font-bold text-black text-4xl mb-8">PORTFOLIO</h1>
      <h2 className="text-2xl font-semibold text-center text-violet-800 mb-10">
        Each project is a unique piece of development
      </h2>

      {portfolio.map((details, index) => (
        <div className="max-w-5xl mx-auto p-6 border-2 rounded-md mt-[10px] bg-white shadow-lg">
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-8"
          >
            <img
              src={carhome}
              className="w-full md:w-1/2 h-auto mb-4 md:mb-0 rounded-md"
              alt={details.title}
            />
            <div className="md:ml-6 flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-800">
                {details.title}
              </h2>
              <p className="mb-4 text-gray-700">{details.desc}</p>
              <div className="mb-4 w-full flex flex-col items-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Technologies
                </h3>
                <div className="flex w-full justify-evenly mt-2">
                  {details.technologies.map((tech, ind) => (
                    <span
                      key={ind}
                      className="bg-blue-100 text-blue-800 py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" w-full flex space-x-4 items-center justify-start mt-2 pl-3">
                <a
                  href="#"
                  className="text-blue-500 hover:underline rounded-md p-1"
                >
                  Code
                </a>
                <a
                  href="#"
                  className="text-blue-500 rounded-md p-1 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortFolio;
