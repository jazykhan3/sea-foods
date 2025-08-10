import FrozenHero from "../components/buyFreshAndFrozenProducts/frozenHero";
import Market from "../components/buyFreshAndFrozenProducts/market";
import Qualities from "../components/products/qualities";

const BuyFrozenProducts = () => {
  const marketData = { selectedProduct: "frozen_food" };
  return (
    <>
      <FrozenHero />
      <Market data={marketData} />
      <Qualities />
    </>
  );
};

export default BuyFrozenProducts;
