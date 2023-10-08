"use client";

import Projects from "./Projects";
import { motion } from "framer-motion";

const ShowCase = () => {
  const animate = {
    from: { y: "-30rem", opacity: 0 },
    to: { y: 0, opacity: 1 },
  };
  return (
    <main>
      <motion.div
        variants={animate}
        initial="from"
        animate="to"
        transition={{
          stiffness: 40,
          type: "spring",
          staggerChildren: 0.4,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="text-center"
      >
        <motion.h1
          variants={animate}
          className="sm:text-[52px] text-[30px] md:w-[538px] mx-auto md:leading-[72px] leading-[50px]"
        >
          Welcome to my Showcase
        </motion.h1>
        <motion.p
          variants={animate}
          className="sm:leading-[43px] :leading-[24px] mt-4 sm:text-[24px] text-[17px] md:w-[610px] mx-auto"
        >
          Here are some of my design works that showcase my design skills and
          expertise.{" "}
        </motion.p>
      </motion.div>
      <Projects />
    </main>
  );
};
export default ShowCase;
