import FreshHero from "../components/buyFreshAndFrozenProducts/freshHero";
import Market from "../components/buyFreshAndFrozenProducts/market";
import Qualities from "../components/products/qualities";

const BuyFreshProducts = () => {
  const marketData = { selectedProduct: "fresh_food" };
  return (
    <>
      <FreshHero />
      <Market data={marketData} />
      <Qualities />
    </>
  );
};

export default BuyFreshProducts;
