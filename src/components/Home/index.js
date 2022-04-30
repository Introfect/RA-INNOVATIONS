











import Contributors from "./Contributors";
import HeroComponent from "./HeroComponent";
import ResearchWork from "./ResearchWork";
import { ProductPage } from "./ProductComponent";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Our Products</h1>
      <ProductPage/>
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Our Research Work</h1>
      <ResearchWork/>
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Contributors</h1>
      <Contributors/>
    </div>
  );
};
export default Home;
