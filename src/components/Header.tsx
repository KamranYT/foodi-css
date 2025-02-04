import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { BsTelephoneOutbound } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        {/* logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/foodi.png" alt="Foodi Logo" width={130} height={1} />
        </Link>

        {/* desktop nav & contact button */}
        <div className={styles["nav-container"]}>
          <Nav />
          <Link href="/contact">
            <Button className={styles["contact-button"]}>
              <BsTelephoneOutbound className="mr-1" />
              Contact
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className={styles["mobile-nav"]}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
