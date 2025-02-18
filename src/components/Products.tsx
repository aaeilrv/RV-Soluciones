"use client";
import React, {FC} from "react";
import Image from 'next/image';
import industrialAC from "../assets/products/industrialAC.jpeg"
import torreDirecTV from "../assets/products/Torre-Directivi.png"
import torreDirecTVMobile from "../assets/products/DirecTVMobile.png"
import industrialAC2 from "../assets/products/Aires-acondicionados-industriales-2.png"

const Products: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-8 lg:mt-10 md:mt-24 mb-10">
      <div className="mt-10 lg:mt-20 mb-10 lg:mb-20">
        <h2 className="text-2xl md:text-[2rem] lg:text-[2.8rem] font-semibold text-[#718da9] text-center">
          Nuestros Productos
        </h2>
        <div className="flex items-center justify-center w-full mt-4 sm:mt-6 lg:mt-10">
          <div className="flex w-5/6 lg:w-[1100px] justify-center sm:px-10 lg:px-0">
            <div className="flex lg:grid-rows-3 gap-2 sm:gap-4 lg:gap-6 justify-center">
              <div className="flex flex-col gap-8 sm:gap-4 lg:gap-6 lg:w-3/5">
                <div className="lg:row-span-1">
                  <Image src={industrialAC} alt="AC Industrial" className="object-cover h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl"/>
                </div>
                <div className="lg:row-span-1">
                  <Image src={industrialAC2} alt="AC Industrial" className="object-cover h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl"/>
                </div>
                <div className="block lg:hidden lg:row-span-1">
                  <Image src={torreDirecTVMobile} alt="torre Directv" className="object-cover h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl"/>
                </div>
              </div>
              <div className="hidden lg:block lg:row-span-2 w-2/5 lg:w-[500px]">
                <Image src={torreDirecTV} alt="torre Directv" className="object-cover h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;