import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  imagesource: string;
  mastery: number;
};

function Skill({ directionLeft, imagesource, mastery }: Props) {
  
  return (
    <div className="flex relative w-20 h-20 cursor-pointer group md:h-28 md:w-28 xl:w-32 xl:h-32">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        src={imagesource}
        className="object-cover rounded-full border border-gray-500 filter transition duration-300 ease-in-out group-hover:grayscale"
      />
      <div className="absolute z-0 w-20 h-20 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-80 group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{mastery}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
