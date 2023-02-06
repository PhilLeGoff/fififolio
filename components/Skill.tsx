import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  imagesource: string;
  mastery: number;
};

function Skill({ directionLeft, imagesource, mastery }: Props) {
  useEffect(() => {
    console.log(imagesource);
  }, [])
  
  return (
    <div className="group relative  flex cursor-pointer w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once: true}}
        src={imagesource}
        className="filter group-hover:grayscale rounded-full border border-gray-500 transition duration-300 ease-in-out object-cover"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{mastery}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
