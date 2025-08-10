import About from "../components/freshAndFrozenProducts/about";
import Processing from "../components/freshAndFrozenProducts/processing";
import Quality from "../components/freshAndFrozenProducts/quality";
import Variety from "../components/freshAndFrozenProducts/variety";
import ProductsAbout from "../components/products/about";

const aboutData = {
  title: "Our Frozen Products",
  smallScreenTitle: "Our Frozen Products",
  description:
    "Seafood Focus takes pride in offering a premium selection of frozen seafood products, primarily sourced from coastal fishing through our French auctions and partnerships with local fishing boats. Our commitment to promoting the Pavillon France brand ensures that our frozen seafood maintains exceptional freshness and retains all its organoleptic qualities during defrosting.",
  subtitle: "",
  buttonText: "Explore Frozen Products",
  mainImageSrc: "/Images/frozen-products-about-img.webp",
  secondaryImageSrc: "/Images/frozen-products-about-img-sm.webp",
};
const varietyData = {
  title: "Wide Variety of Frozen Seafood",
  description:
    "Our traditional frozen products include a diverse selection of seafood, meticulously chosen to meet the highest standards. We offer",
};

const FreshProducts = () => {
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
