import React from 'react'
import { AppText } from '../constants'
import Typewriter from 'typewriter-effect'
import { homeImage } from '../assets'

import "./Home.css"

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-slate-50 pt-[65px] "
      id="home"
    >
      <div
        className=" Home-Container pt-16 flex p-[20px] md:px-20 justify-between flex-col md:flex-row bg-slate-50 "
        id="home"
      >
        <div className="flex w-full flex-row justify-end">
          <div className="flex w-full flex-col items-start content-end">
            <h1 className="text-[35px] md:text[40px] font bold mr-3">
              {AppText.hello}
            </h1>
            <div className="flex">
              <h1 className="text-[35px] md:text[40px] font bold mr-3">
                {AppText.Iam}
              </h1>
              <h1 className="TypeWriter">
                <Typewriter
                  options={{
                    strings: [
                      AppText.DebjitDolui,
                      AppText.FrontedDeveloper,
                      AppText.BackendDeveloper,
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <div>
              <h1 className="my-5 text-gray-400 text-[17px]">
                {AppText.WelcomeMsg}
              </h1>
            </div>
            <button className="hover:z-50 transition-all duration-300 ease-in-out hover:scale-125 bg-purple-600 p-2 rounded-md text-white">
              Resume
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img src={homeImage} className="w-[200px] md:w-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default Home
