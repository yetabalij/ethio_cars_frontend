import { Aclonica } from "next/font/google";

import PublicNavigation from "@/app/_components/PublicNavigation";

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
});

const Register = () => {
  return (
    <div>
      <PublicNavigation className={aclonica.className} />
      Register
    </div>
  );
};

export default Register;
