import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imagesource: string,
  name: string,
  type: string,
  goal: string,
  summary: string[],
};

function ExperienceCard({imagesource, name, type, goal, summary}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  object-contain object-center"
        src={imagesource}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{name}</h4>
        <p className="font-bold text-2xl ">{type}</p>
        <div className="flex space-x-2 my-2">
          {/* Technologies Icons */}
          {/* Technologies Icons */}
          {/* Technologies Icons */}
          {/* Technologies Icons */}
          {/* Technologies Icons */}
        </div>
      </div>
      <p className="uppercase py-5 text-gray-300">{goal}</p>
      <ul className="list-disc space-y-4 nl-5 text-lg">
        {summary.map((data, i) => {
          return <li key={i}>{data}</li>
        })}
      </ul>
    </article>
  );
}

export default ExperienceCard;
