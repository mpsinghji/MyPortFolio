import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";
import Aurora from "../hero/Aurora";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      {/* Aurora Background Effect */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      
      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-5 right-5"
      >
        <a href="/UpdatedResume.pdf" download>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={true}
            className="px-5 py-3 text-lg font-semibold rounded-4xl shadow-lg border-2 border-white"
          >
            Download Resume
          </GradientText>
        </a>
      </motion.div>
      
      {/* Motion Div for Animated Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl font-extrabold mb-6">Hi, I'm Manpreet Singh</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          <DecryptedText 
            text="A passionate Computer Science and Engineering student exploring the frontiers of Web3, Flutter, and emerging technologies." 
            speed={200} 
            maxIterations={15} 
            animateOn="view" 
            revealDirection="center" 
          />
        </p>
      </motion.div>
      
      {/* About Description */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mt-8 max-w-4xl text-center"
      >
        <p className="text-lg text-gray-400 leading-relaxed">
          <DecryptedText 
            text="From mastering decentralized applications to building smooth, cross-platform mobile experiences, I'm always seeking to innovate. Hackathons have been a core part of my journey, where I sharpen my problem-solving skills and push the boundaries of collaboration."
            animateOn="view"
            revealDirection="center"
            speed={150}
            maxIterations={25}
          />
        </p>
      </motion.div>
    </div>
  );
};

export default About;