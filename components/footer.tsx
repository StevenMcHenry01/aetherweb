import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-background text-primary py-6 px-4 flex sm:flex-row flex-col justify-between items-center border-b-2 border-primary border-t-2">
      <div className="flex gap-5 items-center flex-wrap">
        <Link href="/">
          <Image src={Logo} alt="logo" width={70} height={70} />
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
