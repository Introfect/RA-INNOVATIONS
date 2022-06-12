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
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img
                src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
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
                      Product 1
                    </h4>
                    <p className="text-gray-600">
                      Laborum saepe laudantium in, voluptates ex placeat quo
                      harum aliquam totam, doloribus eum impedit atque!
                      Temporibus...Laborum saepe laudantium in, voluptates ex
                      placeat quo harum aliquam totam, doloribus eum impedit
                      atque! Temporibus...Laborum saepe laudantium in,
                      voluptates ex placeat quo harum aliquam totam, doloribus
                      eum impedit atque! Temporibus...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img
                src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg"
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
                      Product 2
                    </h4>
                    <p className="text-gray-600">
                      Laborum saepe laudantium in, voluptates ex placeat quo
                      harum aliquam totam, doloribus eum impedit atque!
                      Temporibus...Laborum saepe laudantium in, voluptates ex
                      placeat quo harum aliquam totam, doloribus eum impedit
                      atque! Temporibus...Laborum saepe laudantium in,
                      voluptates ex placeat quo harum aliquam totam, doloribus
                      eum impedit atque! Temporibus...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="py-20 bg-stone-100 md:my-40">
        <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto items-center max-w-6xl">
          <div class="px-4 md:mr-6">
            <h3 class="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
              With our diverse range of lenders, we fight hard to get you the
              best deal.
            </h3>
            <p class="mt-4 text-stone-800 text-xl font-medium">
              With our diverse range of lenders, we fight hard to get you the
              best deal.
            </p>
          </div>
          <div>
            <div class="md:absolute relative md:transform md:-translate-x-10 md:h-64"></div>
            <div class="transform md:rounded-md bg-white md:rotate-3 md:scale-110 md:translate-x-10 md:shadow-2xl md:-ml-4 md:-mt-44 md:p-12 space-y-2">
              <div class="px-4 sm:px-0 sm:gap-8 max-w-5xl mx-auto">
                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/1.png" alt="RA_Innovations"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
