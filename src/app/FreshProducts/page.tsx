import About from "../components/freshAndFrozenProducts/about";
import Processing from "../components/freshAndFrozenProducts/processing";
import Quality from "../components/freshAndFrozenProducts/quality";
import Variety from "../components/freshAndFrozenProducts/variety";
import ProductsAbout from "../components/products/about";

const FreshProducts = () => {
  const aboutData = {
    title: "OUR TRADITIONAL FRESH PRODUCTS",
    smallScreenTitle: "OUR TRADI - TIONAL FRESH PRO - DUCTS",
    subtitle: "Discover Our Traditional Fresh Products",
    description:
      "At Seafood Focus, we pride ourselves on offering an extensive range of traditional fresh seafood products sourced from the pristine waters of the French coasts. Our commitment to quality ensures that every product you receive is of the highest standard, delivering exceptional taste and freshness.",
    buttonText: "Explore Fresh Products",
    mainImageSrc: "/Images/freshP-about-img.webp",
    secondaryImageSrc: "/Images/products-perfection-img-3.webp",
  };

  const varietyData = {
    title: "Wide Variety of Fresh Seafood",
    description:
      "Our traditional fresh products include a diverse selection of seafood, meticulously chosen to meet the highest standards. We offer",
  };
  return (
    <>
      <About data={aboutData} />
      <Variety data={varietyData} />
      <Quality />
      <Processing />
      <ProductsAbout />
    </>
  );
};

export default FreshProducts;
