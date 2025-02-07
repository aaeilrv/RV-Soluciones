"use client";
import React, {FC} from "react";
import Image from 'next/image';
import Unicasa from "../assets/brands/Unicasa.png";
import Bosch from "../assets/brands/Bosch.png";
import Prosein from "../assets/brands/Prosein.png";
import Taurel from "../assets/brands/Taurel.png";
import Capi from "../assets/brands/Capi.png";
import Servier from "../assets/brands/Servier.png";
import LatCapital from "../assets/brands/LatCapital.png";
import LaVoz from "../assets/brands/Lavoz.png";

const images = [
  { src: Unicasa, width: 60, alt: "Unicasa" },
  { src: Bosch, width: 60, alt: "Bosch" },
  { src: Prosein, width: 60, alt: "Prosein" },
  { src: Taurel, width: 50, alt: "Taurel" },
  { src: Capi, width: 60, alt: "Capi" },
  { src: Servier, width: 60, alt: "Servier" },
  { src: LatCapital, width: 50, alt: "LatCapital" },
  { src: LaVoz, width: 10, alt: "LaVoz" },
];


const References: FC = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 md:mt-24">
      <h2 className="text-2xl md:text-2xl lg:text-5xl font-semibold text-[#718da9] text-center">
        <span className="hidden md:block text-2xl md:text-[2rem] lg:text-[2.8rem]">Clientes que ya confían en nuestros servicios</span>
        <span className="block md:hidden text-2xl">Clientes que ya confían<br />en nuestros servicios</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2 w-[100%] lg:w-[60%] mt-4 md:mt-8">
        {images.map((image, index) => (
          <div className="h-18 lg:h-40 w-[30%] lg:w-60 flex items-center justify-center px-4 py-2" key={index}>
            <Image src={image.src} alt={image.alt} /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default References;