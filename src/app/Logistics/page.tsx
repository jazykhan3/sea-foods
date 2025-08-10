"use client";
import React from "react";
import LogisticsHero from "../components/logistics/hero";
import Operations from "../components/logistics/operations";
import Reach from "../components/logistics/reach";
import World from "../components/logistics/world";
import LogisticsOperation from "../components/logistics/logisticsOperations";

const Logistics = () => {
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
      <LogisticsHero />
      <Operations />
      <World />
      <div id="operations" className="w-full">
        <LogisticsOperation />
      </div>
      <Reach />
    </>
  );
};

export default Logistics;
