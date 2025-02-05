"use client";
import React, {FC} from "react";

/*import Unicasa from "../assets/brands/Unicasa.png"
import Bosch from "../assets/brands/Bosch.png"
import Prosein from "../assets/brands/Prosein.png"
import Taurel from "../assets/brands/Taurel.png"
import Capi from "../assets/brands/Capi.png"
import Servier from "../assets/brands/Servier.png"
import LatCapital from "../assets/brands/LatCapital.png"
import LaVoz from "../assets/brands/Lavoz.png"

const images = [
  { src: Unicasa, width: 60, alt: "Unicasa" },
  { src: Bosch, width: 60, alt: "Bosch" },
  { src: Prosein, width: 60, alt: "Prosein" },
  { src: Taurel, width: 50, alt: "Taurel" },
  { src: Capi, width: 60, alt: "Capi" },
  { src: Servier, width: 60, alt: "Servier" },
  { src: LatCapital, width: 50, alt: "LatCapital" },
  { src: LaVoz, width: 50, alt: "LaVoz" },
];*/


const Benefits: FC = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 md:mt-24">
      <h1 className="text-2xl md:text-[2rem] lg:text-[2.8rem] font-semibold text-[#718da9] text-center">
        Beneficios
      </h1>
      <p className="text-black font-thin text-center md:text-2xl px-4 py-4 md:py-8">
        <span className="hidden md:block">
          Ofrecemos soluciones completas y personalizadas para que usted <br/>
          disfrute del mejor confort y bienestar en su hogar o negocio.
        </span>
        <span className="block md:hidden">
          Ofrecemos soluciones completas y personalizadas para que usted
          disfrute del mejor confort y bienestar en su hogar o negocio.
        </span>
      </p>
      <p className="text-black font-semibold text-center text-lg md:text-3xl px-2 py-2 md:py-4">¿Por qué elegirnos?</p>
    </div>
  )
}

export default Benefits;