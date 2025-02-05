"use client";
import React, {FC} from "react";
//import bgImg from "../assets/bgImg.jpg"


const ContactCard: FC = () => {

  /*const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  }*/

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex mt-20 w-2/3 justify-center text-[#353533] relative">
        <div className="hidden lg:flex lg:justify-startz-30 bg-[#e0dcdc] w-2/3 h-1/2 rounded-[36px] relative">
          <div className="w-[43rem] flex flex-col gap-3 px-24 py-14">
            <h1 className="text-[2.7rem]/[3.5rem] font-bold">
              Obtenga la solución<br/>
              ideal para su proyecto<br/>
              de aire acondicionado<br/>
              y ventilación.
            </h1>
            <p className="text-[1.6rem]/[1.8rem] font-light">
              Confíe en RV Soluciones Profesionales,<br/>
              su mejor inversión en confort.
            </p>
          </div>
          </div>
        <div className="z-40 lg:-ml-40 bg-[#b8ccdc] w-full md:w-2/5 lg:w-2/5 h-1/2 rounded-[26px]">
          <h1 className="text-xl lg:text-[2.6rem]/[3.5rem] font-bold p-5 lg:px-8 lg:py-14 text-center">
            Respire bienestar<br/>
            y viva tranquilo
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;