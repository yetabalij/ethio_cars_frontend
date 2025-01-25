import { Aclonica } from "next/font/google";

import PublicNavigation from "@/app/_components/PublicNavigation";

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
});

const Login = () => {
  return (
    <div>
      <PublicNavigation className={aclonica.className} />
      Login
    </div>
  );
};

export default Login;
