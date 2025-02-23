import { FaReact, FaNodeJs, FaGit, FaGithub, FaLinux, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import SkillCard from "./SkillCard";

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

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-3xl font-bold text-black mb-6">Technical Skills</h2>

      <div className="grid grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            className="w-[150px] h-[180px] flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-3xl"
          >
            <div className="text-3xl text-black">{skill.icon}</div>
            <p className="text-sm font-semibold text-black mt-2">{skill.name}</p>
          </SkillCard>
        ))}
      </div>
    </div>
  );
}