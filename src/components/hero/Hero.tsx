import Slider from "../slider/Slider";

const Hero = () => {
  return (
    <>
      <div className="bg-hero-main w-full bg-cover">
        <div className="w-full h-[375px]"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-brown-200 px-4 w-[90%] -mt-10 rounded-t-2xl pb-4">
          <div className="pt-8 flex justify-center">
            <div className="">
              <h1 className="text-5xl font-bold text-center">
                Find Your Dream Car Today
              </h1>
              <p className="text-2xl my-4">
                At{" "}
                <span className="font-bold text-orange-900">
                  GoodMan Motors
                </span>
                , we believe everyone deserves a great car without breaking the
                bank. That's why we offer a fantastic selection of clean,
                affordable, and genuine vehicles to suit your needs.
              </p>
            </div>
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
