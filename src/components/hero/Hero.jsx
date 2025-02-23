import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Shape from "./Shape";
import Speech from "./Speech";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row relative">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-4 md:p-12">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#000] mt-4 md:mt-12 text-center md:text-left"
        >
          Hey There,
          <br />
          <span className="text-white">I'm Manpreet Singh!</span>
        </motion.h1>
        <motion.div
          variants={{
            initial: { x: -100, opacity: 0 },
            animate: {
              x: 0,
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.2 },
            },
          }}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 md:mt-0"
        >
          <motion.h2
            variants={{
              initial: { x: -100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
            }}
            className="text-lg md:text-xl text-white font-bold text-center md:text-left"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            variants={{
              initial: { x: -100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
            }}
            className="text-sm md:text-base text-gray-300 my-4 text-center md:text-left"
          >
            Crafting immersive digital experiences with cutting-edge
            technologies.
          </motion.p>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-end justify-between p-4 md:p-12">
        <motion.div
          variants={{
            initial: { y: -100, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.2 },
            },
          }}
          initial="initial"
          animate="animate"
          className="relative flex flex-col gap-3 p-2 md:p-4 bg-[#2c48a2] rounded-bl-lg items-center w-max"
        >
          <motion.a
            variants={{
              initial: { y: -100, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            href="https://github.com/mpsinghji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
          </motion.a>
          <motion.a
            variants={{
              initial: { y: -100, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            href="https://x.com/mpsinghji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
          </motion.a>
          <motion.a
            variants={{
              initial: { y: -100, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            href="https://linkedin.com/in/manpreetsingh2004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
          </motion.a>
          <motion.div
            variants={{
              initial: { y: -100, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rotate-90 bg-[#dd4c62] text-xs px-2 py-1 rounded-br-lg text-white"
          >
            FOLLOW ME
          </motion.div>
        </motion.div>
        <Speech />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-center z-10">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1/2 md:h-4/5 z-20">
        <img
          src="/man.png"
          alt="Manpreet Singh"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
