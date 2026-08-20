const Difference = () => {
  return (
    <div className="plr maxi flex flex-col lg:flex-row justify-between">
      {/* lett side */}
      <div className="space-y-3 lg:w-[35%]">
        <p className="text-xs font-bold text-[#929292]">MAKE A DIFFERENCE</p>
        <p className="heading2">
          Here at Astera Real Estate, we believe that the best way to predict
          the future is to create it.
        </p>
      </div>

      {/* Right Side  */}
      <div className="space-y-4 lg:w-[50%]">
        <p className="text-lg grey font-bold">
          At Astera, we believe every setback is a setup for a greater comeback.
        </p>
        <p>
          {`Failure isn't the opposite of success — it's part of the journey. The more we learn, the closer we get to becoming better, sharper, and stronger.`}
          <br />
          <br />
          {`We’re not just colleagues — we’re a community. A tight-knit team that grows together, celebrates together, and always lifts each other higher. Whether it's closing a deal or sharing a laugh, we show up with heart, hustle, and purpose.`}
          <br />
          <br />
          {`At Astera, the culture is vibrant, the energy is real, and the support is constant. We invest in our people through mentorship, development, and the space to thrive. Looking for your next big leap in real estate? This is more than a job — it’s your next chapter. Are you ready to turn the page?`}
        </p>
        <div className="space-y-1">
          <p className="text-lg font-bold">Rasha Hassan</p>
          <p>CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Difference;
