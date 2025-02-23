import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const listVariant = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-6" ref={ref}>
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="bg-gray-100 p-10 rounded-3xl shadow-lg w-full max-w-md"
        >
          <motion.h1 variants={listVariant} className="text-2xl font-bold text-gray-900 mb-6">
            Let's keep in touch
          </motion.h1>

          <motion.div variants={listVariant} className="mb-4">
            <label className="block text-sm font-semibold">Name</label>
            <input type="text" name="user_username" placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div variants={listVariant} className="mb-4">
            <label className="block text-sm font-semibold">Email</label>
            <input type="email" name="user_email" placeholder="john@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div variants={listVariant} className="mb-4">
            <label className="block text-sm font-semibold">Message</label>
            <textarea rows={5} name="user_message" placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </motion.div>

          <motion.button
            variants={listVariant}
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Send
          </motion.button>

          {success && <p className="text-green-600 mt-4">Your message has been sent!</p>}
          {error && <p className="text-red-600 mt-4">Something went wrong!</p>}
        </motion.form>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-200 p-12 mt-10 lg:mt-0 rounded-xl">
        <p className="text-xl font-semibold text-gray-700">Thanks! For Visiting 😊</p>
      </div>
    </div>
  );
};

export default Contact;
