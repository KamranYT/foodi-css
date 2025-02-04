"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import styles from "@/styles/MobileNav.module.css";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  { name: "home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const MobileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Menu Icon */}
      <SheetTrigger className={styles["menu-trigger"]}>
        <CiMenuFries className={styles["menu-icon"]} />
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className={styles["sheet-content"]}>
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

        {/* Logo Section */}
        <div className={styles["logo-container"]}>
          <Link href="/">
            <Image src="/foodi.png" alt="Foodi Logo" width={150} height={1} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles["nav-links"]}>
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${styles["nav-link"]} ${
                link.path === pathname ? styles["active-link"] : ""
              }`}
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
