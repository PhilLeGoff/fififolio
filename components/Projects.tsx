import { motion } from "framer-motion";
import projects from '../content/projects';

type Props = {};

function Projects({}: Props) {

  return (
    <motion.div className="flex overflow-hidden relative z-0 flex-col justify-evenly items-center p-2 h-screen text-left md:flex-row md-w-full">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative md:w-full w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-4">
        {projects.map((project, i) => {
          return (
            <div key={i} className="flex flex-col flex-shrink-0 justify-center items-center p-7 space-y-5 w-screen h-screen snap-center md:p-44">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* Wrap the motion image with an anchor tag */}
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:w-[700px] w-[400px]"
                  src={project.imagesource}
                  alt=""
                />
              </a>


              <div className="px-0 space-y-4 max-w-6xl md:space-y-10 md:px-10">
                <h4 className="text-2xl font-semibold text-center md:text-4xl">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.name}
                </h4>
                <p className="text-left md:text-lg md:h-auto h-[200px] overflow-y-scroll md:overflow-y-hidden">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
