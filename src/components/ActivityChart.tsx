
import { motion } from "framer-motion";

interface ActivityChartProps {
  data: {
    day: string;
    value: number;
  }[];
  maxValue?: number;
  className?: string;
}

export const ActivityChart = ({ 
  data, 
  maxValue = 12000, 
  className = "" 
}: ActivityChartProps) => {
  // Calculate the maximum value in the data for scaling
  const dataMax = Math.max(...data.map((item) => item.value));
  const scaleFactor = maxValue / (dataMax || 1);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-end justify-between h-36 px-2">
        {data.map((item, index) => {
          const height = `${Math.max(10, (item.value / maxValue) * 100)}%`;
          const isActive = index === data.length - 1;
          const delay = index * 0.05;
          
          return (
            <div key={item.day} className="flex flex-col items-center flex-1">
              <motion.div
                className={`relative w-full max-w-[24px] rounded-full ${
                  isActive 
                    ? "bg-gradient-to-t from-steppy-primary to-steppy-secondary" 
                    : "bg-gray-200"
                }`}
                style={{ height }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay, 
                  ease: "easeOut" 
                }}
              >
                {isActive && (
                  <motion.div
                    className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-steppy-primary text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: data.length * 0.05 + 0.2 }}
                  >
                    {item.value.toLocaleString()} steps
                  </motion.div>
                )}
              </motion.div>
              <span className="text-xs text-gray-500 mt-2">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
