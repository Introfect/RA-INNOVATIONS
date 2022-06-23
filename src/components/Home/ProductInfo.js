import Product from "../../content/ProductContent"

const ProductInfo = () => {
  return (
  
     <div class="flex flex-col py-24  mx-auto items-center justify-center text-gray-600 body-font md:flex-row ">
       { Product.map((prop)=>(
      <div  key={prop.key} class="container mx-auto flex md:w-1/2 px-5 py-24 items-center justify-center flex-col">
    
        <img
          class="md:w-3/5 w-5/6 mb-10 object-cover object-center rounded"
          alt={prop.alt}
          src={prop.img}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {prop.tittle}
          </h1>
          <p class="mb-8 leading-relaxed">{prop.desc}</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};
export default ProductInfo;
