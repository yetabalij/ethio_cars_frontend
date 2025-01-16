import Image from "next/image";

import HeroImage from "@/public/HeroRight.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-[#F4F7FB]">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5">
        <div className="mx-7 my-12 text-[#07234D] md:grid-cols-1 md:ml-20 ">
          <div className="flex flex-col gap-1 justify-between md:h-60">
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
              <Button className="w-full bg-[#B52F31] py-1 rounded-sm text-xl md:px-12 sm:w-40">
                Post A Car
              </Button>
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
