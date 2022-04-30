import Footer from "../Footer";
import Contributors from "./Contributors";
import HeroComponent from "./HeroComponent";
import ResearchWork from "./ResearchWork";
import { NavBar } from "../NavBar";
import { ProductPage } from "./ProductComponent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Our Products</h1>
      <ProductPage/>
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Our Research Work</h1>
      <ResearchWork/>
      <h1 className="text-center md:py-8 text-gray-600 md:text-4xl text-2xl"> Contributors</h1>
      <Contributors/>
      <Footer/>
    </div>
  );
};
export default Home;
