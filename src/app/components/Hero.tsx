"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInviewAnimate } from "../../../utils/hooks";

const Hero = () => {
  const { isInview, ref } = useInviewAnimate();
  const animate = {
    to: { y: 0, opacity: 1 },
    from: { y: 40, opacity: 0 },
  };
  return (
    <section className="mt-36 flex md:flex-row flex-col  gap-8 justify-center">
      <div className="md:w-[543px] w-full">
        <motion.h1
          ref={ref}
          variants={animate}
          initial="from"
          animate={isInview ? "to" : "from"}
          transition={{ stiffness: 40, type: "spring" }}
          className="sm:text-[52px] text-[30px]"
        >
          Who is Donmanuel?
        </motion.h1>
        <motion.p
          ref={ref}
          variants={animate}
          initial="from"
          animate={isInview ? "to" : "from"}
          transition={{ stiffness: 40, type: "spring", delay: 0.3 }}
          className="sm:text-[24px] mt-4 text-[15px] sm:leading-[40px] leading-[30px]"
        >
          Donmanuel as Don-Emmanuel, is a product designer who crafts seamless
          solutions blending aesthetics and functionality. With a user-centered
          approach and technical savvy, I transform complex problems into
          intuitive designs. My work spans various domains, from interfaces to
          packaging, all with the goal of enhancing lives through impactful and
          elegant design.
        </motion.p>
      </div>

      <div className="">
        <Image
          src="/images/profile.png"
          width="200"
          height="200"
          alt={"profile-img"}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
export default Hero;
