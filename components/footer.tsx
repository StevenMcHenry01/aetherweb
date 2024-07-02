import classNames from "classnames";
import Link from "next/link";
import styles from "./nav/styles.module.scss";
import LogoSvg from "./svgs/logo";

export const Footer = () => {
  return (
    <footer className="w-full bg-background text-primary py-6 px-4 flex sm:flex-row flex-col justify-between items-center border-b-2 border-primary border-t-2">
      <div className="flex gap-5 items-center flex-wrap">
        <Link href="/">
          <LogoSvg
            className={classNames(
              "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]",
              styles.logo
            )}
          />
        </Link>
        <Link href="/#">Home</Link>
        <Link href="/#what-we-do">What We Do</Link>
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
      <a
        href="https://www.linkedin.com/in/robert-gregg-1b1b1b1b1/"
        target="_blank"
        rel="noreferrer"
      >
        info@aetherweb.co
      </a>
    </footer>
  );
};
