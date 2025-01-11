import Image from "next/image";

import HeroImage from "@/public/HeroRight.png";

const Hero = () => {
  return (
    <section className="bg-[#F4F7FB] ">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid-cols-1 ml-20 my-20">
          <h1> Empowering You</h1>
          <h1>To Drive Forward.</h1>
          <p>
            Buy and sell cars with ease whether you are a private owner, broker,
            or dealership. Post your vehicle and reach a community of buyers
            today!
          </p>
          <button className="my-20">Post A Car</button>
        </div>
        <div className="grid-cols-1">
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
