import Data from "./data"
import Logo from "../../logo/RALOGO.jpeg"

const Products = () => {
  return (
    <div>
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
              Our Products
            </h2>
            <p className="lg:w-6/12 lg:mx-auto">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore
              sunt, debitis dolorum officia aliquid explicabo? Excepturi,
              voluptate?
            </p>
          </div>



          <div className="grid gap-12 lg:grid-cols-2">
            {Data.map((prop)=>(
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img key={prop.id} 
                src={prop.img}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-cyan-900">
                      {prop.title}
                    </h4>
                    <p className="text-gray-600">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            ))}



          </div>
        </div>
      </div>
      <section class="py-20 bg-stone-100 md:my-40">
        <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto items-center max-w-6xl">
          <div class="px-4 md:mr-6">
            <h3 class="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
             
            </h3>
            <p class="mt-4 text-stone-800 text-xl font-medium">
             
            </p>
          </div>
          <div>
            <div class="md:absolute relative md:transform md:-translate-x-10 md:h-64"></div>
            <div class="transform md:rounded-md bg-white md:rotate-3 md:scale-110 md:translate-x-10 md:shadow-2xl md:-ml-4 md:-mt-44 md:p-12 space-y-2">
              <div class="px-4 sm:px-0 sm:gap-8 max-w-5xl mx-auto">
                <img src={Logo} alt="RA_Innovations"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
