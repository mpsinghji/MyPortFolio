import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";
import Threads from "./Threads";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <Threads amplitude={10} distance={1} enableMouseInteraction={false} />
      </div>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-5 right-5"
      >
        <a href="/Resume.pdf" download>
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
            text="I am currently pursuing a Bachelor of Engineering at Chitkara University . My interest in technology and problem-solving drives me to explore innovative web solutions and stay updated with emerging trends."
            speed={200}
            maxIterations={10}
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
            text="Over the past few years, I have gained hands-on experience through several impactful projects. I developed Campus Sync, an academic platform featuring user management, resource sharing, and analytics. My work on BlogVerse showcases my ability to create dynamic blogging platforms with user authentication and interactive commenting features. Additionally, I built Fashion Hub, an e-commerce platform with seamless product management and category filtering. These projects strengthened my skills in React, Node.js, MongoDB, and Express.js while fostering a strong sense of collaboration and problem-solving.

Looking ahead, I aim to further my expertise as a Full Stack Developer, contributing to scalable and impactful solutions in the technology landscape. My career goal is to delve deeper into cloud technologies and AI-driven applications, ensuring that I remain adaptable to the ever-changing demands of the tech world. I am eager to collaborate with like-minded professionals and make a lasting impact through meaningful projects."
            animateOn="view"
            revealDirection="center"
            speed={150}
            maxIterations={15}
          />
        </p>
      </motion.div>
    </div>
  );
};

export default About;
