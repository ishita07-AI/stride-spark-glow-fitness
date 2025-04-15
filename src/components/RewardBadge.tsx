
import { motion } from "framer-motion";

interface RewardBadgeProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  color?: "primary" | "secondary" | "accent" | "highlight" | "gold";
  isLocked?: boolean;
  progress?: number;
}

export const RewardBadge = ({
  icon,
  name,
  description,
  color = "primary",
  isLocked = false,
  progress,
}: RewardBadgeProps) => {
  const colors = {
    primary: "from-steppy-primary to-steppy-primary/70",
    secondary: "from-steppy-secondary to-steppy-secondary/70",
    accent: "from-steppy-accent to-steppy-accent/70",
    highlight: "from-steppy-highlight to-steppy-highlight/70",
    gold: "from-amber-500 to-amber-300",
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <motion.div 
          className={`w-16 h-16 rounded-full flex items-center justify-center 
            ${isLocked 
              ? "bg-gray-200" 
              : `bg-gradient-to-br ${colors[color]}`}`}
          whileHover={!isLocked ? { scale: 1.1, rotate: 5 } : {}}
          animate={!isLocked ? { 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
          } : {}}
          transition={!isLocked ? { 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          } : {}}
        >
          <div className={isLocked ? "text-gray-400" : "text-white"}>
            {icon}
          </div>
          
          {progress !== undefined && (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="289.02652413026095"
                initial={{ strokeDashoffset: 289.02652413026095 }}
                animate={{ 
                  strokeDashoffset: 289.02652413026095 - (progress / 100) * 289.02652413026095 
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
          )}
          
          {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200/80 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </motion.div>
      </div>
      
      <h4 className="text-sm font-medium mt-2 text-center">{name}</h4>
      <p className="text-xs text-gray-500 text-center mt-1 max-w-[120px]">{description}</p>
    </motion.div>
  );
};
