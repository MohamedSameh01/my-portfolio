import { HERO_CONTENT } from "../contacts";
import mohamedSamehProfile from "../assets/mohamedSamehProfile.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: .5, delay:delay } },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mohamed Sameh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="../contacts/Mohamed Sameh Mahmoud.pdf"
              download
            >
              <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text text-2xl tracking-tight text-transparent ">
                Download cv
              </button>
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.2 },
              }}
              className="rounded-3xl"
              src={mohamedSamehProfile}
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;