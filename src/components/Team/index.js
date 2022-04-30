const Teams = () => {
  return (
    <div>
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl mt-10 text-cyan-900 font-bold md:text-4xl">
            Our Team
          </h2>
          <p className="lg:w-6/12 lg:mx-auto">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center" style={{marginTop:"60px"}}>
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
          <img
            className="object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="/teams"
              className="block text-2xl font-bold text-gray-800"
            >
              John Doe
            </a>
            <span className="text-sm text-gray-700 ">
              Software Engineer
            </span><br/>
            <span className="text-sm text-gray-700 ">
              Software Engineer
            </span><br/>
            <span className="text-sm text-gray-700 ">
              Software Engineer
            </span><br/>
            <span className="text-sm text-gray-700 ">
              Software Engineer
            </span>
          </div>
        </div>
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
          <img
            className="object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="/teams"
              className="block text-2xl font-bold text-gray-800"
            >
              John Doe
            </a>
            <span className="text-sm text-gray-700">
              Software Engineer
            </span><br/>
            <span className="text-sm text-gray-700">
              Software Engineer
            </span><br/>
            <span className="text-sm text-gray-700">
              Software Engineer
            </span><br/>
            <span className="text-sm text-gray-700 ">
              Software Engineer
            </span>
          </div>
        </div>
      </div>

      <section className="text-blueGray-700 bg-white mt-20">
    <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Your tagline </h2>
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div className="flex">
                <p className="inline-block mt-2 text-sm text-left text-blueGray-600 md:mt-0"> It will take you to candy shop. <br className="hidden lg:block"/>
                <a href="/teams" className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
    </div>
</section>
    </div>
  );
};
export default Teams;
