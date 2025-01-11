import Image from "next/image";

import Logo from "./../../public/logo.png";

const Hero = () => {
  return (
    <div className="flex justify-between content-center justify-items-center py-4 mx-20">
      <Image src={Logo} width={80} alt="Logo" />
      <div>navigation</div>
      <div>navigation</div>
    </div>
  );
};

export default Hero;
