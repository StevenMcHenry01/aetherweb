import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import { FloatingNav } from "../ui/floating-navbar";

const navItems = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "What we do",
    link: "/#what-we-do",
  },
  {
    name: "Our process",
    link: "/#our-process",
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
          <Image src={Logo} alt="logo" width={70} height={70} />
        </Link>
        <div className="flex items-center gap-4 sm:gap-12 text-primary text-sm sm:text-xl font-light">
          <Link
            className="hover:text-primary-dark flex gap-1 items-center group/1"
            href="/#what-we-do"
          >
            <span className="group-hover/1:opacity-100 opacity-0 transition-all">
              [
            </span>
            WHAT WE DO
            <span className="group-hover/1:opacity-100 opacity-0 transition-all">
              ]
            </span>
          </Link>
          <Link
            className="hover:text-primary-dark flex gap-1 items-center group/1"
            href="/#our-process"
          >
            <span className="group-hover/1:opacity-100 opacity-0 transition-all">
              [
            </span>
            OUR PROCESS
            <span className="group-hover/1:opacity-100 opacity-0 transition-all">
              ]
            </span>
          </Link>
          <Link
            className="hover:text-primary-dark flex gap-1 items-center group/1"
            href="/#why-us"
          >
            <span className="group-hover/1:opacity-100 opacity-0 transition-all">
              [
            </span>
            WHY US
            <span className="group-hover/1:opacity-100 opacity-0 transition-all">
              ]
            </span>
          </Link>
          <button className="text-background bg-primary rounded-md py-1 px-2 sm:px-6 mr-4 sm:mr-6 text-sm sm:text-base font-medium hover:bg-primary-dark transition-all">
            Connect
          </button>
        </div>
      </nav>
      <FloatingNav navItems={navItems} />
    </>
  );
};
