"use client";
import React, {FC} from "react";
import whiteLogo from "../assets/logo/RV-Soluciones-Blanco.png"
import bannerPrincipal from "../assets/bg-images/Banner-Principal.jpg"
import Image from 'next/image'
import { PrimaryButton } from "./Button";

const Hero: FC = () => {

  const bgImage = {
    backgroundImage: `url(${bannerPrincipal.src})`,
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  }

  return (
    <div style={bgImage} className="min-h-[700px] lg:min-h-[1082px] w-full flex flex-col lg:justify-start items-left overflow-clip">
      <div className="flex flex-col items-start ml-10 lg:ml-40 mt-20 lg:mt-20 w-full">
        <div>
          <Image
            src={whiteLogo}
            width={300}
            height={300}
            alt="Logo"
            className="w-[50%] lg:w-[78%]"
          />
        </div>
      </div>
      <div className="flex flex-col items-start ml-10 lg:ml-40 mt-36 lg:mt-20 w-full h-full">
        <div>
          <div className="flex flex-col leading-10 lg:mt-36 items-start">
            <h1 className="hidden lg:block lg:mt-10 font-bold lg:text-[84px] text-left">
              Expertos en
              <span className="block mt-14"></span>
              climatización
            </h1>
            <h1 className="text-4xl md:text-5xl text-left font-bold lg:hidden w-3/4">
              Expertos en climatización
            </h1>
            <p className="text-center font-light text-lg md:text-xl lg:text-4xl mt-2 lg:mt-10">
              su aliado para un clima perfecto
            </p>
          </div>
          <PrimaryButton onClick={() => console.log("hi")}>Contáctenos</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default Hero;