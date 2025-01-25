import Image from "next/image";

import Logo from "./../../public/logo.png";
import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";

const PublicNavigation = ({ className }: { className?: string }) => {
  return (
    <header className="bg-[#F4F7FB]">
      <div className="flex justify-between items-center py-4 mx-6 md:mx-20">
        <Image src={Logo} width={100} alt="Logo" />

        {/*normal navigation menu*/}
        <div className="hidden sm:block text-[#07234D] sm:text-xl md:text-2xl">
          <Link href="/" className="px-5 md:px-10">
            Home
          </Link>
          <Link href="/cars" className="px-5 md:px-10">
            Cars
          </Link>
          <Link href="/about" className="px-5 md:px-10">
            About
          </Link>
          <Link href="/contact" className="px-5 md:px-10">
            Contact
          </Link>
        </div>

        {/*mobile navigation menu*/}
        <div className="sm:hidden text-[#07234D]">
          <Menubar className="text-[#07234D]">
            <MenubarMenu>
              <MenubarTrigger>
                <Menu />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/" className="">
                    Home
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/cars" className="">
                    Cars
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/about" className="">
                    About
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/contact" className="">
                    Contacts
                  </Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Link href="/login" className="">
                    Login
                  </Link>
                </MenubarItem>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div
          className={`hidden sm:block sm:text-[#07234D] sm:text-md md:text-lg ${className}`}
        >
          <Link href="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default PublicNavigation;
