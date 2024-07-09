"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo.svg";
import { CtaButton } from "../cta-button";
import { FloatingNav } from "../ui/floating-navbar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import styles from "./styles.module.scss";

const navItems = [
  {
    name: "WHAT WE DO",
    link: "#what-we-do",
  },
  {
    name: "OUR PROCESS",
    link: "#our-process",
  },
  {
    name: "WHY US",
    link: "#why-us",
  },
  {
    name: "ABOUT US",
    link: "#about-us",
  },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="justify-between items-center px-4 sm:px-20 flex h-[70px] sm:h-[100px] border-b-gray-500 border-b bg-background font-header font-light">
        <Link href="/">
          <Image
            className={`${styles.logo} hover:animate-pulse`}
            src={Logo}
            alt="logo"
          />
        </Link>
        <div className="items-center gap-4 sm:gap-12 text-primary text-sm sm:text-xl font-light sm:flex hidden">
          {navItems.map((navItem) => (
            <Link
              key={navItem.name}
              className="hover:text-primary-dark flex gap-1 items-center group/1"
              href={navItem.link}
            >
              <span className="group-hover/1:opacity-100 opacity-0 transition-all">
                [
              </span>
              {navItem.name}
              <span className="group-hover/1:opacity-100 opacity-0 transition-all">
                ]
              </span>
            </Link>
          ))}
          <CtaButton />
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="block sm:hidden">
            <button>
              <HamburgerMenuIcon className="h-6 w-6 text-primary" />
            </button>
          </SheetTrigger>
          <SheetContent
            className="h-full flex flex-col gap-5 justify-center items-end"
            onCloseAutoFocus={(e) => {
              e.preventDefault();
            }}
          >
            {navItems.map((navItem) => (
              <Link
                key={navItem.name}
                href={navItem.link}
                className="text-xl font-semibold"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {navItem.name}
              </Link>
            ))}
            <CtaButton />
          </SheetContent>
        </Sheet>
      </nav>
      <FloatingNav navItems={navItems} />
    </>
  );
};
