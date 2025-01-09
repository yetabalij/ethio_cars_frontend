import Image from "next/image";
import React from "react";

import Logo from "./../../public/logo.png";

const navigation = () => {
  return (
    <header className="bg-[#F4F7FB]">
      <div className="flex justify-between content-center justify-items-center py-4 mx-20">
        <Image src={Logo} width={80} alt="Logo" />
        <div>navigation</div>
        <div>navigation</div>
      </div>
    </header>
  );
};

export default navigation;
