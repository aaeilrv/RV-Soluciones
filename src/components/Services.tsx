"use client";
import React, {FC} from "react";
import Image from 'next/image';
import bgImg from "../assets/bg-images/FormBanner.avif"

const text1 = "Ofrecemos soluciones integrales de ingeniería para el sector industrial, comercial y residencial."
const text2 = "Contamos con un equipo multidisciplinario de profesionales altamente calificados y con amplia experiencia, quienes se encargarán de diseñar, desarrollar y ejectuar su proyecto de manera eficiente y satisfactoria."

const Services: FC = () => {

  const bgImage = {
    backgroundImage: `url(${bgImg.src})`,
    backgroundPosition: "left 0px bottom -40px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "84%",
  }

  return (
  <div className="flex items-center w-full bg-slate-600 justify-center">
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 w-[1200px] sm:px-10 lg:px-0 justify-center items-center h-full">
      <div className="w-1/2 h-full bg-black rounded-l-xl md:rounded-l-2xl lg:rounded-l-3xl flex items-center">
        aa
      </div>
        <div className="flex flex-col w-5/6 lg:w-1/2 h-full bg-red-200 rounded-xl lg:rounded-l-none lg:rounded-r-3xl gap-2 lg:gap-8 px-10 py-6 lg:px-20 lg:py-16">
          <h2 className="text-2xl md:text-[2rem] lg:text-[2.8rem] font-semibold text-[#718da9] text-center lg:text-left">Servicios</h2>
          <div className="text-black font-light md:text-lg text-justify lg:text-left">
            <div className="block lg:hidden">
              <p>{text1} {text2}</p>
            </div>
            <div className="hidden lg:block">
              <p>{text1}</p>
              <p>{text2}</p>
            </div>
          </div>
          <p className="text-black font-bold md:text-lg mt-2 lg:-mt-4">Nuestros servicios abarcan:</p>
          <ol className="lg:mr-30">
            <li>
              <div className="flex align-middle gap-6">
                <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">01</h3>
                <p className="text-black md:text-lg text-justify">Diseño y desarrollo de proyectos de ingeniería.</p>
              </div>
            </li>
            <li>
              <div className="flex align-middle gap-6 mt-4">
                <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">02</h3>
                <p className="text-black md:text-lg">Implementación de tecnología de vanguardia.</p>
              </div>
            </li>
            <li>
              <div className="flex align-middle gap-6 mt-4">
                <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">03</h3>
                <p className="text-black md:text-lg">Asesoramiento personalizado para la optimización de sistemas.</p>
              </div>
            </li>
            <li>
              <div className="flex align-middle gap-6 mt-4">
                <h3 className="text-[#718da9] text-2xl md:text-4xl lg:text-5xl w-[50px]">04</h3>
                <p className="text-black md:text-lg">Ejectución de proyectos con altos estándares de calidad.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Services;