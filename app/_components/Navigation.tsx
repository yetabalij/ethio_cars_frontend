import Image from "next/image";

import Logo from "./../../public/logo.png";
import Link from "next/link";

const navigation = ({ className }: { className?: string }) => {
  return (
    <header className="bg-[#F4F7FB]">
      <div className="flex justify-between items-center py-4 mx-20">
        <Image src={Logo} width={100} alt="Logo" />

        <div className="text-[#07234D] text-2xl">
          <Link href="/" className="px-10">
            Home
          </Link>
          <Link href="/cars" className="px-10">
            Cars
          </Link>
          <Link href="/about" className="px-10">
            About
          </Link>
          <Link href="/contact" className="px-10">
            Contact
          </Link>
        </div>

        <div className={`text-[#07234D] text-lg ${className}`}>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default navigation;
