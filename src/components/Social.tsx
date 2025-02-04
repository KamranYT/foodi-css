import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import styles from "@/styles/Social.module.css";

type SocialItem = {
  icon: JSX.Element;
  path: string;
};

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social: React.FC = () => {
  return (
    <div className={styles["social-container"]}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={styles["social-icon"]}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
