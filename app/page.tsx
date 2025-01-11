import Image from "next/image";

import HeroIMage from "@/public/HeroRight.png";

export default function Home() {
  return (
    <main className="grid grid-cols-2 justify-between bg-[#F4F7FB]">
      <div className="grid-cols-1">Left</div>
      <div className="grid-cols-1">
        <Image src={HeroIMage} alt="Hero" />
      </div>
    </main>
  );
}
