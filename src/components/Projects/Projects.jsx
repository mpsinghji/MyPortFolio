import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "/BlogVerse.png",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur atque maiores culpa.",
    link: "/",
  },
  {
    id: 2,
    img: "/PROJECT_ZERO.png",
    title: "College Management System",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur atque maiores culpa.",
    link: "/",
  },
  {
    id: 3,
    img: "/Portfolio.png",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur atque maiores culpa.",
    link: "/",
  },
  {
    id: 4,
    img: "/Portfolio.png",
    title: "Social Media Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur atque maiores culpa.",
    link: "/",
  },
  {
    id: 5,
    img: "/Portfolio.png",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur atque maiores culpa.",
    link: "/",
  },
];

const imgVariants = {
  initial: { x: -500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const textVariants = {
  initial: { x: 500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <h1 className="text-4xl font-bold text-white absolute top-20">Projects</h1>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
        style={{ boxShadow: "0px 0px 10px 5px #28439b" }}
      >
        <img src={item.img} alt={item.title} className="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // Calculate distance dynamically when resizing
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        setContainerDistance(ref.current.getBoundingClientRect().left);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);

    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * (items.length)]
  );

  return (
    <div className="projects" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        <h1 className="text-white text-4xl font-bold absolute left-170 top-20">Projects</h1>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>

      <section />
      <section />
      <section />
      <section />
      <section />

      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
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
