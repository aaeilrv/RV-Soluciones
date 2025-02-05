"use client";
import React, {FC} from "react";
import whiteLogo from "../assets/logo/RV-Soluciones-Blanco.png"
import bannerPrincipal from "../img/Banner-Principal.jpg"
import Image from 'next/image'

const Hero: FC = () => {

  const bgImage = {
    backgroundImage: `url(${bannerPrincipal.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  }

  return (
    <div style={bgImage} className="min-h-[300px] md:min-h-[500px] lg:min-h-[1000px] bg-[#b9cfdd] flex flex-col justify-center lg:justify-start items-left overflow-clip">
      <div className="flex flex-col items-center lg:items-start lg:bg-none lg:ml-40 lg:mt-20 w-full">
        <div className="max-lg:hidden">
          <Image
            src={whiteLogo}
            width={300}
            height={300}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col leading-10 lg:mt-36 items-center">
          <h1 className="hidden lg:block lg:mt-10 font-bold lg:text-[84px] text-left">
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