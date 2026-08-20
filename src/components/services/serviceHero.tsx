const ServiceHero = () => {
  return (
    <div className="bg-[url(/images/landing/hero.jpg)] h-[300px] lg:h-[430px]  bg-cover bg-bottom  relative ">
      {/* better overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
      {/* Right hover div */}
      <div className=" p-3 absolute bottom-16 lg:bottom-[123px] plr  text-white">
        <h1 className="font-outfit text-5xl">Services</h1>
        <p>
          <span className="font-bold">Home</span>
          {">"} Services
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;
