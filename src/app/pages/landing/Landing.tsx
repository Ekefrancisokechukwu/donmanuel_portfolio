"use client";

import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section className="">
      <div className="lg:h-[70vh]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 40 }}
          className="sm:text-[52px] text-[30px] sm:leading-[72px] leading-[38px] md:max-w-[953px] mx-auto"
        >
          Talented product and web3 designer with over 2 year+ of experience
          creating intuitive and engaging user interfaces for various digital
          products
        </motion.p>
      </div>

      <Hero />
      <Skills />
    </section>
  );
};
export default Landing;
