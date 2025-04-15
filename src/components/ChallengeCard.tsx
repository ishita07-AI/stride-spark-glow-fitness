
import { motion } from "framer-motion";
import { Users, Trophy, ArrowRight, Clock } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  participants: number;
  daysLeft: number;
  progress: number;
  image?: string;
}

export const ChallengeCard = ({
  title,
  description,
  participants,
  daysLeft,
  progress,
  image,
}: ChallengeCardProps) => {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden bg-white border shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="relative h-36 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-70 mix-blend-overlay" 
          />
        )}
        
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          <div className="flex justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
              <Clock size={12} className="mr-1" />
              {daysLeft} days left
            </span>
            
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
              <Users size={12} className="mr-1" />
              {participants} participants
            </span>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium">Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-steppy-primary to-steppy-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {Array.from({ length: Math.min(3, participants) }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-500">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
            {participants > 3 && (
              <div className="w-6 h-6 rounded-full bg-gray-100 border border-white flex items-center justify-center">
                <span className="text-xs text-gray-500">+{participants - 3}</span>
              </div>
            )}
          </div>
          
          <motion.button
            className="text-xs font-medium text-steppy-primary flex items-center"
            whileHover={{ x: 3 }}
          >
            Join Challenge <ArrowRight size={12} className="ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
