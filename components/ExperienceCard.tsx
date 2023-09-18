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
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] mt-10 md:mt-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="object-contain object-center w-32 h-32 rounded-full"
        src={imagesource}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{name}</h4>
        <p className="text-2xl font-bold">{type}</p>
        <div className="flex my-2 space-x-2">
          {/* Technologies Icons */}
          {/* Technologies Icons */}
          {/* Technologies Icons */}
          {/* Technologies Icons */}
          {/* Technologies Icons */}
        </div>
      </div>
      <p className="py-5 text-gray-300 uppercase">{goal}</p>
      <ul className="space-y-4 list-disc md:text-lg">
        {summary.map((data, i) => {
          return <li key={i}>{data}</li>
        })}
      </ul>
    </article>
  );
}

export default ExperienceCard;
