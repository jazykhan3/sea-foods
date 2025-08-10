"use client";
import React from "react";
import WhoGroup from "../components/who/group";
import WhoHero from "../components/who/hero";
import Mission from "../components/who/mission";
import Partners from "../components/who/partners";
import Reach from "../components/who/reach";
import Values from "../components/who/values";

const Who = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <WhoHero />
        <div id="group" className="w-full">
        <WhoGroup />
        </div>
        <Reach />
        <div id="mission" className="w-full">
          <Mission />
        </div>
        <Values />
        <Partners />
      </div>
    </>
  );
};

export default Who;
