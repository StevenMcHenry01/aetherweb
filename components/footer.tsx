import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-background text-primary py-6 px-4 border-b-2 border-primary border-t-2">
      <div className="flex gap-5 items-center flex-wrap">
        <Link href="/#hero">
          <Image
            src={Logo}
            alt="logo"
            className="w-[40px] sm:w-[70px] hover:animate-pulse"
          />
        </Link>
        <p className="ml-auto">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
