"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle for accessibility
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

// Define the type for each link in the links array
interface LinkItem {
  name: string;
  path: string;
}

// Define the links array with typed objects
const links: LinkItem[] = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "Menu", path: "/menu" },
  { name: "offers", path: "/offers" },
];

const MobileNav: React.FC = () => {
  const pathname = usePathname(); // pathname will be a string

  return (
    <Sheet>
      {/* Menu Icon */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-black" />
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className="flex flex-col">
        {/* Required DialogTitle */}
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle> {/* Visually hidden title */}

        {/* Logo Section */}
        <div className="mt-32 mb-40 ml-24 text-4xl">
          <Link href="/">
            <Image
              src="/foodi.png"
              alt="Foodi Logo"
              width={200}
              height={1}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-[#39DB4A] border-b-2 border-[#39DB4A]"
              } capitalize font-medium hover:text-[#39DB4A] transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
