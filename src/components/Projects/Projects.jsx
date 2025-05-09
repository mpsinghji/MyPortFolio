import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "./Particles";
import "./Projects.css";

const items = [
  { id: 1, img: "/BlogVerse.png", title: "Full Stack Blog App", link: "https://mpji-blogverse.vercel.app" },
  { id: 2, img: "/PROJECT_ZERO.png", title: "College Management System", link: "https://mpji-campus-sync.vercel.app/" },
  // { id: 3, img: "/Portfolio.png", title: "Animated Portfolio", link: "/" },
  // { id: 4, img: "/RealChat.png", title: "Real-time Chat App", link: "/" },
  { id: 3, img: "/JobPortal.png", title: "Job Portal Website", link: "https://mpji-jobhunt.vercel.app/" },
  { id: 4, img: "/SocialMedia.png", title: "Social Media Project", link: "/" },
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="projects" ref={containerRef}>
      <div className="background-particles">
        <Particles
          particleCount={150}
          particleSpread={15}
          speed={0.05}
          particleColors={["#7091e6", "#28439b", "#ffffff"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={25}
        />
      </div>

      <motion.div className="progress-container">
        <div className="progress-numbers">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className="progress-number"
              style={{
                color: useTransform(
                  scrollYProgress,
                  [index / items.length, (index + 1) / items.length],
                  ["#666", "#fff"]
                )
              }}
            >
              {index + 1}
            </motion.div>
          ))}
        </div>
        <div className="progress-line">
          <motion.div
            className="progress-fill"
            style={{
              scaleY: scrollYProgress
            }}
          />
        </div>
      </motion.div>

      <div className="projects-container">
        {items.map((item, index) => (
          <div className="project-section" key={item.id}>
            <motion.div
              className="project-content"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 0.8 }
              }}
              viewport={{ once: true, margin: "-20%" }}
            >
              <div className="project-text">
                <motion.span 
                  className="project-number"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  className="project-links"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href={item.link} className="view-project-btn">
                    View Project
                  </a>
                </motion.div>
              </div>
              <motion.div 
                className="project-image-container"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="project-image">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
