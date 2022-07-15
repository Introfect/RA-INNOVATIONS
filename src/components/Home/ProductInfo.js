import Product from "../../content/ProductContent"

const ProductInfo = () => {
  return (
  
     <div className="flex flex-col py-24  mx-auto items-center justify-center text-gray-600 body-font md:flex-row ">
       { Product.map((prop)=>(
      <div  key={prop.key} className="container mx-auto flex md:w-1/2 px-5 py-24 items-center justify-center flex-col">
    
        <img
          className="md:w-3/5 w-5/6 mb-10 object-cover object-center rounded"
          alt={prop.alt}
          src={prop.img}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {prop.tittle}
          </h1>
          <div className="flex justify-center">
            <a href="/products" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View</a>
            {/* <button action="/teams "className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> */}
              {/* View
            </button> */}
            
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};
export default ProductInfo;
