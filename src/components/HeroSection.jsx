import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // After the initial load animation completes, set isInitialLoad to false
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: isInitialLoad ? -50 : 50, // Different initial direction based on load/scroll
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative bg-black h-screen flex items-center justify-center"
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-8xl text-[#f6c432] font-extrabold tracking-tight text-accent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Selamat Datang
        </motion.h1>

        <motion.p
          className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Halo saya seorang web development yang bersemangat menciptakan
          aplikasi web modern
        </motion.p>

        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <motion.div
            className="rounded-md shadow"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <button className="w-full flex items-center justify-center px-8 py-3 bg-[#f6c432] border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-300 md:py-4 md:text-lg md:px-10">
              Lihat Karya Saya
            </button>
          </motion.div>

          <motion.div
            className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-white text-[#f6c432] text-base font-medium rounded-md text-secondary bg-primary hover:bg-white hover:text-black md:py-4 md:text-lg md:px-10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#about" className="text-secondary animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
