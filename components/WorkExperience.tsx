import { motion } from "framer-motion";
import experiences from "../content/experience";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex overflow-hidden relative flex-col justify-evenly items-center px-10 mx-auto max-w-full h-screen text-left md:flex-row"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((exp, i) => {
          return <ExperienceCard key={i} imagesource={exp.imagesource} name={exp.name} type={exp.type} goal={exp.goal} summary={exp.summary}/>
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
