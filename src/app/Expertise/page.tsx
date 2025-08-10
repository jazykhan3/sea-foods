'use client';
import React from "react";
import ExpertiseHero from "../components/expertise/hero";
import OtherExpertise from "../components/expertise/otherExpertise";
import Qualities from "../components/expertise/qualities";
import Sourcing from "../components/expertise/sourcing";

const Expertise = () => {
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
      <ExpertiseHero />
      <div id="overview" className="w-full">
        <Sourcing />
      </div>
      <OtherExpertise />
      <Qualities />
    </>
  );
};

export default Expertise;
