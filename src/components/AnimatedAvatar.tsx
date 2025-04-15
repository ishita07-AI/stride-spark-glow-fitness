
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface AnimatedAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  image?: string;
}

export const AnimatedAvatar = ({ size = "md", image }: AnimatedAvatarProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  return (
    <motion.div 
      className={`relative ${sizeClasses[size]}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-steppy-primary via-steppy-secondary to-steppy-accent opacity-70"
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className={`relative ${sizeClasses[size]} rounded-full bg-white overflow-hidden flex items-center justify-center border-4 border-white z-10`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {image ? (
          <img src={image} alt="User avatar" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <User className="text-gray-400" size={size === "sm" ? 20 : size === "md" ? 32 : size === "lg" ? 48 : 64} />
          </div>
        )}
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 rounded-full bg-steppy-primary opacity-20"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};
