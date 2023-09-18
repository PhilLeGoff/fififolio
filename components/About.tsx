import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col justify-evenly items-center px-10 mx-auto max-w-7xl h-screen text-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
      </h3>
      <motion.img
        className="-mb-20 md:mb:0 flex-shrink-0 mt-14 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/darkfifi.jpg"
      />
      <div className="flex flex-col justify-center items-center px-0 space-y-2 w-screen md:space-y-8 md:px-10">
        <h4 className="z-40 pt-10 text-2xl font-semibold sm:text-sm md:text-4xl">
          Here is a {" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base h-[250px] w-[300px] md:h-auto md:w-auto overflow-scroll md:text-left">
          Hi, I&apos;m Phil. As a recent graduate with a Bachelor&apos;s degree in
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
