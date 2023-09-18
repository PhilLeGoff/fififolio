import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{ duration: 1.0 }}
      className="flex relative justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full md:h-[200px] md:w-[200px] h-[100px] w-[100px] mt-52 animate-ping" />
      {/* <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" /> */}
      <div className="rounded-full border border-[#F7AB0A] opacity-20 md:h-[650px] md:w-[650px] h-[320px] w-[320px] absolute mt-52 animate-pulse" />
      {/* <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52" /> */}
    </motion.div>
  );
}

export default BackgroundCircles;
