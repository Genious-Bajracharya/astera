const InsightsHero = () => {
  return (
    <div className="bg-[url(/images/landing/hero.jpg)] h-[300px] lg:h-[430px]  bg-cover bg-bottom  relative ">
      {/* better overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
      {/* Right hover div */}
      <div className=" p-3 absolute bottom-16 lg:bottom-[123px] plr text-white">
        <p className="font-outfit text-5xl">News & Insights</p>
        <p>
          <span className="font-bold">Home</span>
          {">"} News & Insights
        </p>
      </div>
    </div>
  );
};

export default InsightsHero;
