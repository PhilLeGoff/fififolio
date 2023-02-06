import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
      </h3>
      <motion.img
        className="-mb-20 md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/darkfifi.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi, I'm Phil. As a recent graduate with a Bachelor's degree in
          Computer Science and three years of studies under my belt, I am eager
          to start my career as a Junior Web Developer. I am a quick learner and
          have a passion for developing elegant and efficient web applications.
          I have a solid foundation in web development and a strong desire to
          continue honing my skills and learning new technologies. Throughout my
          studies and various projects, I have demonstrated my ability to work
          independently and as part of a team. I have a strong work ethic and am
          always looking for ways to improve my craft. I am confident in my
          ability to deliver high-quality, user-friendly web applications that
          meet the needs of my clients. As I embark on my career, I am seeking a
          company that values creativity, innovation, and collaboration. I am
          eager to join a team where I can grow my skills and contribute to the
          success of the company. I am excited to bring my passion, dedication,
          and expertise to a new role and look forward to the opportunities and
          challenges that lie ahead.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
