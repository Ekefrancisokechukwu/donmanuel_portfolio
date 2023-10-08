/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useAppContext } from "@/context/app_context";

const Header = () => {
  const { openMenu } = useAppContext();
  return (
    <header className=" justify-between flex items-center sticky w-full top-0 z-20 bg-mainColor/50 backdrop-blur-2xl left-0 py-4 px-4">
      <div className="logo">
        <Image
          src="/images/logo_mini.png"
          alt="logo"
          width={200}
          height={200}
          priority={true}
          className="sm:block  sm:w-[256px] w-[132px] h-[29.91px]  sm:h-[56.65px]"
        />
      </div>
      <Navbar />

      <Link
        href="mailto:Ayamdonmanuel@gmail.com"
        className="hidden items-center gap-2 lg:flex"
      >
        <Image
          src="/images/icon1.png"
          alt="icon"
          width={48}
          height={48}
          priority={true}
        />

        <span>Let's talk</span>
      </Link>

      <button onClick={openMenu} className="lg:hidden block">
        <Image
          src={"/images/hamburger.png"}
          width={22}
          height={24}
          alt="menu btn"
          className="w-[22px] h-[24px]"
        />
      </button>
    </header>
  );
};
export default Header;
