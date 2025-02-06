"use client";
import React, {FC} from "react";
import Image from 'next/image';
import Asesoramiento from "../assets/icons/Asesoramiento.png";
import Innovacion from "../assets/icons/Innovación.png";
import ServicioCompleto from "../assets/icons/ServicioCompleto.png";
import Soluciones from "../assets/icons/Soluciones.png";

const images = [
  { src: Asesoramiento, title: "Le asesoramos:", text: "Un equipo de expertos le ayudará a elegir la mejor opción para su proyecto.", width: 60, alt: "Asesoramiento" },
  { src: Innovacion, title: "Aplicando tendencias innovadoras:", text: "Para brindar el confort y la satisfacción que merecen nuestros clientes.", width: 60, alt: "Innovacion" },
  { src: ServicioCompleto, title: "Soluciones a su medida:", text: "Adaptamos cada proyecto a sus necesidades específicas.", width: 60, alt: "ServicioCompleto" },
  { src: Soluciones, title: "Servicio completo", text: "Le acompañamos desde el inicio hasta el final de su proyecto.", width: 60, alt: "Soluciones" },
];

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
      <p className="text-black font-semibold text-center text-lg md:text-2xl lg:text-2xl  py-2 md:py-4">¿Por qué elegirnos?</p>
      <div className="lg:gap-4 flex flex-col lg:flex-row lg:px-10">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-80 text-center text-black mt-10 flex flex-col items-center">
            <Image src={image.src} alt={image.alt} className="w-25 mb-2 lg:mb-4" />
            <div className="lg:h-16 flex items-center justify-center">
              <h1 className="text-lg md:text-2xl lg:text-2xl font-semibold mb-2 lg:mb-4 px-10 lg:px-0">
                {image.title}
              </h1>
            </div>
            <div className="lg:h-32 lg:flex items-start justify-center">
              <p className="font-light md:text-xl lg:text-xl px-20 md:px-0 lg:px-10">
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits;