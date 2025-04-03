import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGit, FaGithub, FaLinux, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Hyperspeed from "./Hyperspeed";

const skills = [
  { name: "ReactJS", icon: <FaReact /> },
  // { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGit /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Java", icon: <FaJava /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={{
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 30,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xFFFFFF,
            brokenLines: 0xFFFFFF,
            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
            sticks: 0x03B3C3,
          }
        }} />
      </div>
      
      {/* Skills Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <motion.h2 
          className="text-3xl font-bold text-[#7091e6] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="w-[150px] h-[180px] flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-lg cursor-pointer"
            >
              <div className="text-4xl text-black">{skill.icon}</div>
              <p className="text-sm font-semibold text-black mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
