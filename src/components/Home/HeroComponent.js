import logo from "../../logo/RALOGO.jpeg"

const HeroComponent = () => {
  return (
    <div>
      <header className="bg-white ">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800  lg:text-4xl">
                RA-INNOVATION
              </h1>
              <p className="mt-4 text-gray-600 ">
              RA Innovations PVT LTD is a private company based in Prasanti Vihar, Bhubaneswar. The primary focus of this company is to develop novel products by integrating traditional indigenous knowledge with modern scientific innovations for the betterment of human life.
              The vision is to facilitate perpetually sustainable human development.
              We aim to enhance the quality of every human life through new ideas, science, and innovation.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src={logo}
              alt="RA-innovations"
            />
          </div>
        </div>
      </header>
    </div>
  );
};
export default HeroComponent;
