import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGit, FaGithub, FaLinux, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
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
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <motion.h2 
        className="text-3xl font-bold text-black mb-6"
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
  );
}
