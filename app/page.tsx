import Hero from "./_components/Hero";
import PublicNavigation from "./_components/PublicNavigation";
import { Aclonica } from "next/font/google";

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="">
      <PublicNavigation className={aclonica.className} />
      <Hero />
    </main>
  );
}
