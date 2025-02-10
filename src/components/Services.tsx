"use client";
import React, {FC} from "react";
import Image from 'next/image';
import ServicesImage from "../assets/bg-images/sheet_metal_custom.jpg"
import ServicesMobile from "../assets/bg-images/Imagen-Informativa-Rv-Soluciones-movil.png"
import { ThirdButton } from "./Button";

const text1 = "Ofrecemos soluciones integrales de ingeniería para el sector industrial, comercial y residencial."
const text2 = "Contamos con un equipo multidisciplinario de profesionales altamente calificados y con amplia experiencia, quienes se encargarán de diseñar, desarrollar y ejectuar su proyecto de manera eficiente y satisfactoria."

const Services: FC = () => {

  return (
  <div className="flex items-center w-full justify-center">
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 w-[1100px] sm:px-10 lg:px-0 justify-center h-full items-center lg:items-stretch">
      <div className="w-5/6 lg:w-1/2 flex items-center">
        <Image
          src={ServicesImage}
          alt="Servicios"
          className="hidden lg:block object-cover h-full w-full rounded-l-xl md:rounded-l-2xl lg:rounded-l-3xl"
        />
        <Image
          src={ServicesMobile}
          alt="Servicios"
          className="block lg:hidden object-cover h-full w-full rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-2 lg:gap-8 h-full w-5/6 lg:w-1/2 rounded-b-xl lg:rounded-l-none lg:rounded-r-3xl px-10 py-6 lg:px-16 lg:py-8 bg-white bg-opacity-50">
        <h2 className="text-2xl md:text-[2rem] lg:text-[2.8rem] lg:mt-4 font-semibold text-[#718da9] lg:text-left">Servicios</h2>
        <div className="text-black font-light md:text-lg text-justify lg:text-left">
          <div className="block lg:hidden text-sm">
            <p>{text1} {text2}</p>
          </div>
          <div className="hidden lg:block lg:text-lg">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </div>
        <p className="text-black font-bold text-sm md:text-lg mt-2 lg:-mt-4 mb-2 lg:mb-0">Nuestros servicios abarcan:</p>
        <ol className="lg:mr-30">
          <li>
            <div className="flex align-middle gap-6">
              <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">01</h3>
              <p className="text-black text-xs md:text-lg text-justify">Diseño y desarrollo de proyectos de ingeniería.</p>
            </div>
          </li>
          <li>
            <div className="flex align-middle gap-6 mt-4">
              <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">02</h3>
              <p className="text-black text-xs md:text-lg">Implementación de tecnología de vanguardia.</p>
            </div>
          </li>
          <li>
            <div className="flex align-middle gap-6 mt-4">
              <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">03</h3>
              <p className="text-black text-xs md:text-lg">Asesoramiento personalizado para la optimización de sistemas.</p>
            </div>
          </li>
          <li>
            <div className="flex align-middle gap-6 mt-4">
              <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">04</h3>
              <p className="text-black text-xs md:text-lg">Ejectución de proyectos con altos estándares de calidad.</p>
            </div>
          </li>
        </ol>
        <div className="mt-4 lg:mt-0">
          <ThirdButton onClick={() => console.log("hi")}>Contáctenos Ahora</ThirdButton>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services;