"use client";
import React from "react";
import Hero from "@/components/Hero";
import ContactCard from "@/components/ContactCard";
import References from "@/components/References";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <div>
      <Hero/> {/** Falta logo en mobile */}
      <ContactCard/> {/** falta formulario + imágenes y ver qué se hace en mobile */}
      <References/> {/** Faltan logos más grandes en mobile */}
      <Benefits/>
    </div>
  );
}
