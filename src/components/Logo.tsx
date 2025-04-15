
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-10 h-10 bg-steppy-primary rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div 
          className="absolute w-full h-full rounded-full bg-steppy-primary opacity-40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13C7.89543 13 7 12.1046 7 11V5Z" fill="white" />
          <path d="M13 5C13 3.89543 13.8954 3 15 3C16.1046 3 17 3.89543 17 5V19C17 20.1046 16.1046 21 15 21C13.8954 21 13 20.1046 13 19V5Z" fill="white" />
        </svg>
      </motion.div>
      <motion.h1 
        className="text-2xl font-bold text-steppy-primary font-display"
        whileHover={{ scale: 1.05 }}
      >
        Steppy
      </motion.h1>
    </motion.div>
  );
};
