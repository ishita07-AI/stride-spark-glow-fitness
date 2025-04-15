
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  color?: "primary" | "secondary" | "accent" | "highlight";
}

export const StatsCard = ({
  title,
  value,
  icon,
  change,
  color = "primary"
}: StatsCardProps) => {
  const colors = {
    primary: "from-steppy-primary to-steppy-primary/70",
    secondary: "from-steppy-secondary to-steppy-secondary/70",
    accent: "from-steppy-accent to-steppy-accent/70",
    highlight: "from-steppy-highlight to-steppy-highlight/70",
  };

  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <motion.div
      className="rounded-2xl bg-white shadow-sm border overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {change !== undefined && (
              <div className="flex items-center mt-1">
                {isPositive && <ArrowUp size={14} className="text-green-500 mr-1" />}
                {isNegative && <ArrowDown size={14} className="text-red-500 mr-1" />}
                <span 
                  className={`text-xs font-medium ${
                    isPositive ? "text-green-500" : isNegative ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {Math.abs(change)}% from last week
                </span>
              </div>
            )}
          </div>
          
          <motion.div 
            className={`h-12 w-12 rounded-full bg-gradient-to-br ${colors[color]} flex items-center justify-center text-white`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon}
          </motion.div>
        </div>
      </div>
      
      <div className={`h-1 w-full bg-gradient-to-r ${colors[color]}`} />
    </motion.div>
  );
};
