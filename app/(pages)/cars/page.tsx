import React from "react";

import { Aclonica } from "next/font/google";
import PublicNavigation from "@/app/_components/PublicNavigation";

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
});

const Cars = () => {
  return (
    <div>
      <PublicNavigation className={aclonica.className} />
      Cars
    </div>
  );
};

export default Cars;
