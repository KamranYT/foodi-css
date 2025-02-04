"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Nav.module.css";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles["nav-container"]}>
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
  );
};

export default Nav;
