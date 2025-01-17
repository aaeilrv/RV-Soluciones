"use client";
import React, {FC} from "react";
import bgImg from "../assets/bgImg.jpg"

const Hero: FC = () => {

  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  }

  return (
    <div style ={bgImage} className="min-h-[300px] md:min-h-[500px] lg:min-h-[1000px] bg-gray-500 flex justify-center lg:justify-start items-center overflow-clip">
      <div className="flex flex-col items-center lg:items-start lg:bg-none lg:ml-32 lg:-mt-10 w-full ">
        <div className="flex flex-col leading-10 mb-4 items-center">
          <h1 className="text-left font-bold hidden lg:text-[84px] lg:block">
            Expertos en
            <span className="block mt-14"></span>
            climatización
          </h1>
          <h1 className="text-3xl md:text-5xl text-center font-bold lg:hidden w-3/4">
            Expertos en climatización
          </h1>
          <p className="text-center font-light text-sm md:text-xl lg:text-4xl mt-2 lg:mt-10">
            su aliado para un clima perfecto
          </p>
        </div>
        <div className="bg-white rounded-xl text-center mt-4 lg:mt-10 w-2/5 lg:w-[23rem] p-2 md:p-3 lg:p-5">
          <p className="font-bold lg:text-[24px] text-black">Contáctenos</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;