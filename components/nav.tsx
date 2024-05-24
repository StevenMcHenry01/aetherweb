import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../public/logo-white.svg";

export const Nav = () => {
  return (
    <>
      <nav className="justify-between items-center px-8 hidden sm:flex h-[100px] border-b-gray-500 border-b bg-background font-header font-light">
        <Link href="/">
          <Image src={LogoWhite} alt="logo" width={80} height={80} />
        </Link>
        <div className="flex items-center gap-16 text-primary text-lg">
          <Link href="/">OUR WORK</Link>
          <Link href="/">WHAT WE DO</Link>
          <Link href="/">WHY US</Link>
          <button className="text-background bg-primary rounded-md py-1 px-6 mr-6 font-normal">
            Connect
          </button>
        </div>
      </nav>
      <button className="sm:hidden">+</button>
    </>
  );
};
