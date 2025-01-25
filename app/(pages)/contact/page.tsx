import { Aclonica } from "next/font/google";

import PublicNavigation from "@/app/_components/PublicNavigation";

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  return (
    <div>
      <PublicNavigation className={aclonica.className} />
      Contact
    </div>
  );
};

export default Contact;
