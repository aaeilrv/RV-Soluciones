"use client";
import React, {FC} from "react";

const Facts: FC = () => {

  return (
    <div className="flex items-center w-full justify-center py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row w-5/6 lg:w-[1100px] gap-8 lg:gap-20">
        <div className="flex-1 max-h-max bg-[#ffffff] rounded-xl lg:rounded-3xl lg:px-16 py-6 lg:py-10 text-2xl lg:text-4xl">
          <div className="text-center">
            <div className="leading-6 lg:leading-9">
              <h1 className="text-black font-light">Contamos con</h1>
              <h1 className="text-black font-light tracking-[.07em]">proyectos de</h1>
            </div>
            <div className="leading-6 lg:leading-0">
              <p className="text-[#738caa] font-bold uppercase lg:text-4xl tracking-[.11em]">65.000 mts</p>
              <p className="text-[#738caa] font-bold uppercase tracking-[.05em]">cuadrados</p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-h-max bg-[#ffffff] rounded-xl lg:rounded-3xl lg:px-16 py-8 lg:py-10 text-2xl lg:text-4xl">
          <div className="text-center">
            <h1 className="text-black font-light text-lg lg:text-4xl">Ejecución de obras</h1>
            <div className="leading-6 lg:leading-0">
              <p className="text-[#738caa] font-bold uppercase lg:text-5xl tracking-[.09em]">20.000 mts</p>
              <p className="text-[#738caa] font-bold uppercase lg:text-5xl tracking-[.03em]">cuadrados</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Facts;