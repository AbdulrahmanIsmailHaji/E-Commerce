import Hero from "../Component/Hero/Hero";
import NewCollection from "../Component/NewCollection/NewCollection";
import NewsLetter from "../Component/NewsLetter/NewsLetter";
import Offer from "../Component/Offer/Offer";
import Popular from "../Component/Popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
