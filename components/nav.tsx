import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../public/logo-white.svg";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "What we do",
    link: "#what-we-do",
  },
  {
    name: "Why us",
    link: "/#why-us",
  },
];

export const Nav = () => {
  return (
    <>
      <nav className="justify-between items-center px-2 sm:px-8 flex h-[70px] sm:h-[100px] border-b-gray-500 border-b bg-background font-header font-light">
        <Link href="/">
          <Image
            src={LogoWhite}
            alt="logo"
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
          />
        </Link>
        <div className="flex items-center gap-4 sm:gap-16 text-primary text-sm sm:text-lg">
          <Link href="/">WHAT WE DO</Link>
          <Link href="/">WHY US</Link>
          <button className="text-background bg-primary rounded-md py-1 px-2 sm:px-6 mr-4 sm:mr-6 text-sm sm:text-base">
            Connect
          </button>
        </div>
      </nav>
      <FloatingNav navItems={navItems} />
    </>
  );
};
