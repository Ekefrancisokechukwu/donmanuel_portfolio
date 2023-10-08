"use client";

import Link from "next/link";
import { navLink } from "../../../utils/Links";
import { motion, useCycle, frame } from "framer-motion";
import { useAppContext } from "@/context/app_context";
// import { motion, sync, useCycle } from "framer-motion";

const SubNav = () => {
  const { isMenuOpen, closeMenu } = useAppContext();

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const asideVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        stiffness: 60,
        duration: 0.2,
        restDelta: 70,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 400, duration: 0.3, delay: 0.5 },
    },
  };

  const variantsChildren = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.aside
      initial="closed"
      animate={isMenuOpen ? "open" : "closed"}
      variants={asideVariants}
      className="lg:hidden block  fixed h-screen p-8 sm:w-[30rem] w-full overflow-y-scroll bg-mainColor top-0 right-0 z-30"
    >
      <button onClick={closeMenu} className="flex ms-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.0003 2.66663C8.65366 2.66663 2.66699 8.65329 2.66699 16C2.66699 23.3466 8.65366 29.3333 16.0003 29.3333C23.347 29.3333 29.3337 23.3466 29.3337 16C29.3337 8.65329 23.347 2.66663 16.0003 2.66663ZM20.4803 19.0666C20.867 19.4533 20.867 20.0933 20.4803 20.48C20.2803 20.68 20.027 20.7733 19.7737 20.7733C19.5203 20.7733 19.267 20.68 19.067 20.48L16.0003 17.4133L12.9337 20.48C12.7337 20.68 12.4803 20.7733 12.227 20.7733C11.9737 20.7733 11.7203 20.68 11.5203 20.48C11.1337 20.0933 11.1337 19.4533 11.5203 19.0666L14.587 16L11.5203 12.9333C11.1337 12.5466 11.1337 11.9066 11.5203 11.52C11.907 11.1333 12.547 11.1333 12.9337 11.52L16.0003 14.5866L19.067 11.52C19.4537 11.1333 20.0937 11.1333 20.4803 11.52C20.867 11.9066 20.867 12.5466 20.4803 12.9333L17.4137 16L20.4803 19.0666Z"
            fill="white"
          />
        </svg>
      </button>

      <motion.ul variants={variants} className="flex flex-col   gap-[68px]">
        {navLink.map((link, i) => {
          return (
            <motion.li variants={variantsChildren} key={i} className="nav-list">
              <span className="mr-2">0{i + 1}.</span>
              <Link
                onClick={closeMenu}
                className="first-letter:capitalize  inline-block"
                href={link.url}
              >
                {link.text}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.aside>
  );
};
export default SubNav;
