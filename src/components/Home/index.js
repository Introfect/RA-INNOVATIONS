import Contributors from "./Contributors";
import HeroComponent from "./HeroComponent";
import ProductInfo   from './ProductInfo'

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Our Products</h1>
      <ProductInfo />
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Contributors</h1>
      <Contributors/>
    </div>
  );
};
export default Home;
