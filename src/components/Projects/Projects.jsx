import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Particles from "./Particles";
import "./Projects.css";

const items = [
  { id: 1, img: "/BlogVerse.png", title: "Full Stack Blog App", link: "/" },
  { id: 2, img: "/PROJECT_ZERO.png", title: "College Management System", link: "/" },
  { id: 3, img: "/RealChat.png", title: "Real-time Chat App", link: "/" },
  { id: 4, img: "/SocialMedia.png", title: "Social Media Project", link: "/" },
  { id: 5, img: "/Portfolio.png", title: "Animated Portfolio", link: "/" },
  { id: 6, img: "/JobPortal.png", title: "Job Portal Website", link: "/" },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length]);

  return (
    <div className="projects" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        {items.map((item) => (
          <div className="pItem" key={item.id}>
            {/* <Particles /> */}
            <motion.div className="pImg">
              <img src={item.img} alt={item.title} />
            </motion.div>
            <motion.div className="pText">
              <h1>{item.title}</h1>
              <a href={item.link}><button>View Project</button></a>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20} />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#7091e6"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Projects;
