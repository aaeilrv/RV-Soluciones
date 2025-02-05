"use client";
import React, {FC} from "react";
import Image from 'next/image'
import Unicasa from "../assets/brands/Unicasa.png"
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
];


const References: FC = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 md:mt-24">
      <h1 className="text-2xl md:text-[2rem] lg:text-[2.8rem] font-semibold text-[#718da9] text-center">
        <span className="hidden md:block">Clientes que ya confían en nuestros servicios</span>
        <span className="block md:hidden">Clientes que ya confían<br />en nuestros servicios</span>
      </h1>
      <div className="grid grid-cols-4 items-center gap-x-2 gap-y-8 mt-6 lg:mt-16 w-5/6 lg:w-2/3">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: `${image.width}%` }}
            className="w-full place-self-center sm:w-[80%] md:w-[60%] lg:w-[50%]"
          />
        ))}
      </div>
    </div>
  )
}

export default References;