import React from "react";
import { mail } from "../assets";

const ContactMe = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-slate-50 py-10"
      id="contact"
    >
      <h1 className="text-[40px] font-bold mt-10">CONTACT</h1>
      <div className="max-w-3xl mx-auto p-6 border-2 rounded-md bg-white shadow-lg mt-5 md:mt-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            Let's chat.
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            "Drop me a line, I'd love to hear from you!"
          </h1>
          <p className="mb-4 text-gray-600">Let's create something together</p>
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={mail}
              alt="Contact"
              className="w-[30px] bg-slate-800 p-1 rounded-full"
            />
            <a
              href="mailto:debjitdolui04@gmail.com"
              className="text-blue-500 text-[20px] ml-2"
            >
              debjitdolui04@gmail.com
            </a>
          </div>
        </div>
        <form className="w-full md:w-1/2 flex flex-col ">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Send me a message!
          </h1>
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:border-blue-500"
          />
          <label className="mb-2 font-semibold text-gray-700">
            Write your message here
          </label>
          <textarea
            placeholder="Your Message"
            className="border-2 border-gray-300 p-2 mb-4 rounded-md h-32 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
