'use client';
import React from "react";
import About from "../components/products/about";
import Explore from "../components/products/explore";
import ProductsHero from "../components/products/hero";
import Perfection from "../components/products/perfection";
import Qualities from "../components/products/qualities";

const Products = () => {
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
      <ProductsHero />
      <Explore />
      <div id='qualities' className="w-full">
      <Qualities />
      </div>
      <Perfection />
      <About />
    </>
  );
};

export default Products;
