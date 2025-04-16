
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkoutTimerProps {
  className?: string;
}

export const WorkoutTimer: React.FC<WorkoutTimerProps> = ({ className }) => {
  const [currentTimer, setCurrentTimer] = useState(0);
  const timers = ["45", "10", "5", "2"];
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          // When timer reaches 0, move to the next timer
          setCurrentTimer((prevTimer) => (prevTimer + 1) % timers.length);
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timers.length]);

  return (
    <div className={cn("text-yellow-400 font-bold flex items-center", className)}>
      <svg className="w-24 h-24" viewBox="0 0 120 120">
        <circle
          className="text-gray-700"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-yellow-400"
          strokeWidth="5"
          stroke="currentColor"
          strokeLinecap="round"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          strokeDasharray={314}
          strokeDashoffset={314 - (314 * seconds) / 60}
          transform="rotate(-90 60 60)"
        />
        <motion.g
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <text
            x="60"
            y="55"
            textAnchor="middle"
            fill="currentColor"
            className="text-3xl font-bold"
          >
            {timers[currentTimer]}
          </text>
          <text
            x="60"
            y="75"
            textAnchor="middle"
            fill="currentColor"
            className="text-lg"
          >
            MIN
          </text>
        </motion.g>
      </svg>
    </div>
  );
};
