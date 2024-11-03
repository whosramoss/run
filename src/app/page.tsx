"use client"
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@components/Hero";
import GeometryList from "@components/GeometryList";
import CTA from "@components/CTA";
import NavBar from "@components/NavBar";
import ThemeButton from "@components/buttons/ThemeButton";


export default function HomePage() {
  return (
    <div className="bg-primary">
      <NavBar />
      <ThemeButton />
      <ReactLenis root options={{ lerp: 0.05 }} >
        <Hero />
        <GeometryList />
        <CTA />
      </ReactLenis>
    </div>
  );
};
