import Image from "next/image";

import HeroImage from "@/public/HeroRight.png";

const Hero = () => {
  return (
    <section className="bg-[#F4F7FB] ">
      <div className="grid grid-cols-2 gap-5">
        <div className="grid-cols-1 ml-20 my-12 text-[#07234D]">
          <div className="flex flex-col justify-between h-60">
            <div className="text-5xl">
              <h1 className=""> Empowering You</h1>
              <h1 className="font-light mt-[-5px]">To Drive Forward.</h1>
            </div>
            <div className="text-2xl font-light">
              <p>
                Buy and sell cars with ease whether you are a private owner,
                broker, or dealership.Post your vehicle and reach a community of
                buyers today!
              </p>
            </div>
            <div>
              <button className="text-white bg-[#B52F31] px-12 py-1 rounded-sm text-xl">
                Post A Car
              </button>
            </div>
          </div>
        </div>
        <div className="grid-cols-1">
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
