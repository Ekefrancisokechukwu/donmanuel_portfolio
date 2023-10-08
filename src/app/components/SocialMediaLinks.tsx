"use client";

// react icons
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaBehance } from "react-icons/lia";

import { motion } from "framer-motion";

import Link from "next/link";

const SocialMediaLinks = () => {
  const animate = {
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={animate}
      initial="from"
      animate="to"
      transition={{
        staggerChildren: 0.3,
        type: "spring",
        delay: 0.6,
      }}
      className="hidden flex-col gap-9 items-center mt-20  min-w-[10rem] lg:flex"
    >
      <motion.div variants={animate}>
        <Link
          href="https://api.whatsapp.com/message/K5Z433JDFCB7I1?autoload=1&app_absent=0"
          target="_blank"
          className="text-2xl"
        >
          <BsWhatsapp />
        </Link>
      </motion.div>

      <motion.div variants={animate}>
        <Link href="#" target="_blank" className="text-2xl">
          <FaFacebookF />
        </Link>
      </motion.div>

      <motion.div variants={animate}>
        <Link href="#" target="_blank" className="text-2xl">
          <BsInstagram />
        </Link>
      </motion.div>
      <motion.div variants={animate}>
        <Link
          href="https://twitter.com/Odogwudonmanue1"
          target="_blank"
          className="text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.901 1.15308H22.581L14.541 10.3431L24 22.8461H16.594L10.794 15.2621L4.156 22.8461H0.474L9.074 13.0161L0 1.15408H7.594L12.837 8.08608L18.901 1.15308ZM17.61 20.6441H19.649L6.486 3.24008H4.298L17.61 20.6441Z"
              fill="white"
            />
          </svg>
        </Link>
      </motion.div>

      <motion.div variants={animate}>
        <Link
          href="https://www.behance.net/chideraemmanuel4"
          target="_blank"
          className="text-2xl"
        >
          <LiaBehance />
        </Link>
      </motion.div>
    </motion.div>
  );
};
export default SocialMediaLinks;
