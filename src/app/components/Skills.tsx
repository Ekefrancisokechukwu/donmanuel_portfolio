"use client";

import { skills } from "../../../utils/datas";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-16">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ stiffness: 40, type: "spring" }}
        viewport={{ once: true }}
        className="primary-head mt-28 md:text-center"
      >
        Skills
      </motion.h1>

      <div className="mt-16 flex flex-wrap gap-x-[25px]  gap-y-[49px] justify-center ">
        {skills.map((skill, i) => (
          <article
            key={i}
            className="bg-[#161616] flex md:w-[324px] w-full gap-4 items-center p-4"
          >
            <div className="bg-[#ffffffbf] grid place-items-center sm:min-w-[81px] min-w-[53px] sm:h-[70px] h-[54px] ">
              {skill.icon}
            </div>

            <h5 className="sm:text-[24px] text-[17px] leading-[32px]">
              {skill.text}
            </h5>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Skills;
