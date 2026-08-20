import Image from "next/image";

const AboutContent = () =>{
    return (
      <div className="plr maxi flex flex-col lg:flex-row gap-6 lg:gap-[70px] max-w-[1440px] mx-auto">
        {/* Left Side  */}
        <div className="space-y-8">
          <p>
            We specialize in premium real estate developments that elevate{' '}
            <br /> modern lifestyles with elegance and quality.
          </p>
          <div className="space-y-4">
            <div className="lg:w-[535px] h-[340px] lg:h-[452px] group overflow-hidden rounded-3xl ">
              <Image
                src={'/images/about/about1.jpg'}
                alt="about"
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 duration-100 transition-transform"
              />
            </div>
            <div className="lg:w-[535px] h-[340px] lg:h-[452px] group overflow-hidden rounded-3xl ">
              <Image
                src={'/images/about/about2.jpg'}
                alt="about"
                width={500}
                height={500}
                className="w-full h-full object-cover  group-hover:scale-105 duration-100 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Right Side  */}
        <div className="space-y-8 lg:max-w-[700px] lg:w-[55%]">
          <div className="flex gap-4">
            {/* <div className="lg:w-[240px] w-[30%] h-[340px] lg:h-[458px] relative">
              <Image
                src={'/images/about/about3.jpg'}
                alt="about"
                width={500}
                height={500}
                className="w-full h-full object-cover object-left rounded-3xl"
              />
              <div className="absolute flex items-center gap-3 bottom-5 left-5 ">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <p className="text-white font-bold">Watch Video</p>
              </div>
            </div> */}
            <div className=" w-full h-[400px] group overflow-hidden rounded-3xl ">
              <Image
                src={'/images/about/dubai.jpg'}
                alt="about"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-3xl group-hover:scale-105 duration-100 transition-transform"
              />
            </div>
          </div>
          <p className="grey font-medium mt-auto text-lg leading-[160%]">
            Astera Real Estate was founded with a singular goal: to craft homes
            and spaces that embody elegance, purpose, and long-term value. From
            concept to completion, our developments are designed to elevate
            everyday living through meticulous planning, architectural
            integrity, and a deep understanding of what modern homeowners truly
            desire.
            <br />
            <br />
            With a focus on premium materials, refined aesthetics, and prime
            locations, we create more than just real estate — we build enduring
            landmarks. Our team of seasoned professionals brings together
            experience, creativity, and a commitment to excellence that sets us
            apart in a competitive market.
          </p>
        </div>
      </div>
    );
}

export default AboutContent;