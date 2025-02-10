"use client";
import React from "react";
import Hero from "@/components/Hero";
import ContactCard from "@/components/ContactCard";
import References from "@/components/References";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Facts from "@/components/Facts";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Hero/>
      <ContactCard/>
      <References/>
      <Benefits/>
      <Services/>
      <Facts/>
      <Products/>
    </div>
  );
}
