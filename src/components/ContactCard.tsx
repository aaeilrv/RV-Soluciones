"use client";
import React, {FC, useEffect, useState} from "react";
import bgImg from "../assets/bg-images/FormBanner.avif"
import ContactForm from "./ContactForm";

const ContactCard: FC = () => {

  const [bgImageStyle, setBgImageStyle] = useState({});

  useEffect(() => {
    const updateBgImageStyle = () => {
      if (window.innerWidth < 1024) {
        setBgImageStyle({
          backgroundImage: `url(${bgImg.src})`,
          backgroundPosition: "left 0px bottom -10px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        });
      } else {
        setBgImageStyle({
          backgroundImage: `url(${bgImg.src})`,
          backgroundPosition: "left 0px bottom -40px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "84%",
        });
      }
    };

    updateBgImageStyle();
    window.addEventListener('resize', updateBgImageStyle);
    return () => window.removeEventListener('resize', updateBgImageStyle);
  }, []);

  return (
    <div id='contact' className="flex items-center justify-center w-full">
      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 w-5/6 lg:w-[1200px] justify-center relative sm:px-10 lg:px-0 ">
        <div
          style={bgImageStyle}
          className="lg:justify-start z-30 bg-[#e0dcdc] lg:w-2/3 lg:h-1/2 rounded-2xl lg:rounded-[36px] lg:min-h-[750px] py-6 px-10 lg:px-24 lg:py-14 -mb-4 lg:mb-0 min-h-[400px] "
        >
          <div className="lg:w-[43rem] flex flex-col gap-3">
            <h1 className="text-xl lg:text-[2.4rem]/[2.9rem] font-bold text-white">
              Obtenga la solución<br />
              ideal para su proyecto<br />
              de aire acondicionado<br />
              y ventilación.
            </h1>
            <p className="text-xs lg:text-[1.4rem]/[1.8rem] font-light">
              Confíe en RV Soluciones Profesionales,<br />
              su mejor inversión en confort.
            </p>
          </div>
        </div>
        <div className="z-20 lg:z-40 lg:-ml-40 bg-[#b8ccdc] lg:w-2/5 h-1/2 rounded-b-2xl lg:rounded-[26px] min-h-[400px] lg:min-h-[750px] mb-10">
          <h1 className="text-2xl lg:text-[2.4rem]/[2.9rem] font-bold p-5 lg:px-8 lg:py-14 text-center text-[#353533] mt-6 lg:mt-0">
            Respire bienestar<br/>
            y viva tranquilo
          </h1>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;