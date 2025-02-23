import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="w-1/2 flex items-end gap-2"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-15 bg-white text-gray-700 p-4 rounded-xl rounded-br-none text-lg">
        <TypeAnimation
          sequence={[
            1000,
            "Welcome to my portfolio 😊",
            1000,
            "I'm glad you're here.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" className="bg-[#2c48a2] w-12 h-12 rounded-full object-cover bg-accent" />
    </motion.div>
  );
};

export default Speech;