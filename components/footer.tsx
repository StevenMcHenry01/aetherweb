import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import { CtaButton } from "./cta-button";

export const Footer = () => {
  return (
    <footer className="w-full bg-background text-primary py-6 px-4 flex flex-row justify-between items-center border-b-2 border-primary border-t-2">
      <div className="flex gap-5 items-center flex-wrap">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-[40px] sm:w-[70px]" />
        </Link>
        <Link className="hover:text-primary-dark transition-all" href="/#">
          Back to top
        </Link>
        <p>© {new Date().getFullYear()}</p>
      </div>
      <CtaButton />
    </footer>
  );
};
