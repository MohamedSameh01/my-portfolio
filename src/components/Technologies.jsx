import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import {  motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [-10, 10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:.5,delay:.5}}

       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-orange-500 text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-[#1572B6] text-7xl" />
        </motion.div>

          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-yellow-500 text-7xl" />
        </motion.div>

      <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-[#007acc] text-7xl" />
        </motion.div>

          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsBootstrap className="text-[#563d7c] text-7xl" />
        </motion.div>
        
          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-[#764abc] text-7xl" />
      </motion.div>

         <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandFramerMotion className="text-7xl bg-gradient-to-r from-purple-500 to-blue-500" />
        </motion.div>
           <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
           <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
           <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
