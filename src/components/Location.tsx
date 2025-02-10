"use client";
import React, {FC} from "react";
import whiteLogo from "../assets/logo/RV-Soluciones-Azul.png"
import Image from 'next/image'
import { ThirdButton } from "./Button";

const Location: FC = () => {
  return (
    <div className="w-full flex flex-col lg:justify-start items-left overflow-clip mt-20 lg:rounded-t-[50px] bg-[#b8ccdc] items-center">
      <Image src={whiteLogo} alt="logo" className="w-[200px] lg:w-[300px] place-self-center mt-16"/>
      <div className="flex flex-col align-middle py-10 lg:mt-10 gap-8 items-center">
        {/** Phones */}
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold text-[#718da9]">Teléfonos:</h1>
          <div className="flex gap-10 font-light text-sm text-black">
            <p>0414-2929986</p>
            <p>0414-2929986</p>
          </div>
        </div>
        {/**Email */}
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold text-[#718da9]">Correo:</h1>
          <div className="flex gap-10 font-light text-sm text-black">
            <p>rvsolucionespro@gmail.com</p>
          </div>
        </div>
        {/** Location */}
        <div className="flex flex-col items-center px-10">
          <h1 className="text-xl font-semibold text-[#718da9]">Ubicación:</h1>
          <div className="flex gap-10 text-center text-sm font-light text-black">
            <p className="hidden lg:block">Calle Monseñor, Juan Grilc, Edif Los Milagros B, Piso Sótano <br/>Local S3 Urb Chacao, Caracas (Chacao), Miranda. Zona Postal 1060</p>
            <p className="block lg:hidden">Calle Monseñor, Juan Grilc, Edif Los Milagros B, Piso Sótano Local S3 Urb Chacao, Caracas (Chacao), Miranda. Zona Postal 1060</p>
          </div>
        </div>
        <ThirdButton onClick={() => console.log()}>Contáctenos Ahora</ThirdButton>
      </div>
      <p className="font-light text-black text-sm mb-10">Copyright RV Soluciones Profesionales</p>
    </div>
  )
}

export default Location;