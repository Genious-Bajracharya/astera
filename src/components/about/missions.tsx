import Image from "next/image";

const Mission = () => {
  return (
    <div className="plr maxi bg-[#F7F7F7] pt-11 pb-20 flex flex-col lg:flex-row gap-6 lg:gap-[60px]">
      {/* left side  */}
      <div className="space-y-8  sticky lg:top-28 self-start">
        <h2 className=" font-outfit text-5xl ">Our Mission & Goals</h2>
        <div className="space-y-6">
          <h3 className="font-bold heading2">A word from our Founder </h3>
          <p className="grey font-medium">
            {`“At ASTERA, we take real estate as something truly personal instead 
                        of transactional. We’ve built a company that puts people first with  
                        clarity and care at the heart of everything we do. We are here to 
                        provide honest advice, transparent service so every client feels 
                        supported and confident in their decisions. For us success is not 
                        measured by deals closed but by the relationships we build.”`}
          </p>
          <div className="space-y-1">
            <p className="text-lg font-bold">Rasha Hassan</p>
            <p className="font-medium">CEO</p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Rasha Hassan",
                jobTitle: "CEO",
                worksFor: {
                  "@type": "Organization",
                  name: "Astera Real Estate",
                  url: "https://www.asterarealestate.com",
                },
                description:
                  "CEO of Astera Real Estate, specializing in luxury properties and off-plan investments in Dubai.",
                image:
                  "https://www.asterarealestate.com/images/team/rasha-hassan.jpg", // Replace with actual image URL
                sameAs: [
                  // Add social links if available
                  // "https://linkedin.com/in/rasha-hassan",
                  // "https://instagram.com/rashahassan"
                ],
              }),
            }}
          />
        </div>
        <div className="w-full h-[280px] rounded-3xl overflow-hidden group">
          <Image
            src={"/images/about/mission.jpg"}
            alt="mission"
            width={500}
            height={300}
            className="w-full h-full object-cover  group-hover:scale-105 duration-100 transition-transform"
          />
        </div>
      </div>

      {/* right side  */}
      <div className="lg:space-y-3 space-y-6">
        {/* Box1 Story */}
        <div className="flex gap-4 lg:gap-18">
          <div className="space-y-3 ">
            <p className="px-2 grey border-[1px] border-[#A5A5A5] rounded-full w-7 h-7 grid items-center ">
              1
            </p>
            <p className="border-[1px] border-[#A5A5A5] h-[90%] lg:h-[250px] w-[1px] mx-auto"></p>
          </div>
          <div className="space-y-3">
            <h3 className="heading2">Our Story</h3>
            <p>
              {`Astera Real Estate began with a simple vision over coffee in a small Dubai café — to redefine what it means to find a home. What started as a conversation between two long-time friends and property professionals quickly turned into a bold venture: creating a real estate agency where quality, trust, and personalized service aren't extras — they're standard.`}
              <br />
              <br />
              {`We launched during a time of rapid growth in Dubai’s real estate scene, but instead of chasing volume, we focused on curating exceptional experiences. From boutique residences to high-end developments, every step we took was guided by our passion for excellence and our belief that luxury is more than just aesthetics — it’s about how a space makes you feel.`}
            </p>
          </div>
        </div>
        {/* Box2 Mission */}
        <div className="flex gap-4 lg:gap-18">
          <div className="space-y-3 ">
            <p className="px-2 grey border-[1px] border-[#A5A5A5] rounded-full w-7 h-7 grid items-center ">
              2
            </p>
            <p className="border-[1px] border-[#A5A5A5] h-[90%] lg:h-[250px] w-[1px] mx-auto"></p>
          </div>
          <div className="space-y-3">
            <h3 className="heading2">Our Mission</h3>
            <p>{`Astera was born out of a personal journey in 2024 of seeing how real 
                            estate often felt confusing and transactional. Our founder 
                            transformed that challenge into a mission to create a company that 
                            bridges the gap between promises and reality.`}</p>
            <p>
              {`Today, Astera is built on transparency, accuracy and genuine care 
                                offering tailored guidance for first-time buyers, seasoned investors 
                                and families looking to build their future in Dubai. 
                                `}
            </p>
            <p>
              {`We pride ourselves on combining deep market knowledge with a 
                                human touch ensuring every client feels empowered, confident and 
                                respected.`}
            </p>
          </div>
        </div>
        {/* Box3 Goals */}
        <div className="flex gap-4 lg:gap-18">
          <div className="space-y-3 ">
            <p className="px-2 grey border-[1px] border-[#A5A5A5] rounded-full w-7 h-7 grid items-center ">
              3
            </p>
            <p className="border-[1px] border-[#A5A5A5] h-[90%] lg:h-[250px] w-[1px] mx-auto"></p>
          </div>
          <div className="space-y-3">
            <p className="heading2">Our Goals</p>
            <p className="grey font-medium">
              <span className="text-black font-bold">
                1. Empowering Clients:
              </span>
              Helping buyers, sellers and investors make confident, informed
              decisions.{" "}
            </p>
            <p className="grey font-medium">
              <span className="text-black font-bold">
                2. Enhancing Experiences:
              </span>
              Making real estate simple, stress-free and rewarding.{" "}
            </p>
            <p className="grey font-medium">
              <span className="text-black font-bold">
                3. Fostering Diversity:
              </span>
              Building real relationships through honesty, respect and integrity{" "}
            </p>
            <p className="grey font-medium">
              <span className="text-black font-bold">
                4. Delivering Clarity:
              </span>
              Providing accurate, transparent information{" "}
            </p>
            <p className="grey font-medium">
              <span className="text-black font-bold">
                4. Human-Centered Service:
              </span>
              Treating every client with genuine care while focusing on
              long-term relationships.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
