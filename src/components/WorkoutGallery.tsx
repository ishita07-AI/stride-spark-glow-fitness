
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorkoutTimer } from "@/components/WorkoutTimer";

const workoutImages = [
  "/lovable-uploads/3c53fdd9-7aef-4264-b239-a7a1a08a89cd.png",
  "/lovable-uploads/00d88f59-0429-4587-8886-94b6795a4161.png",
  "/lovable-uploads/a16f3898-5e26-455a-8bdd-75a6b87c39b1.png",
  "/lovable-uploads/611d0e6c-78dc-4dfa-a627-b180ae391f47.png",
];

interface WorkoutGalleryProps {
  className?: string;
}

export const WorkoutGallery: React.FC<WorkoutGalleryProps> = ({ className }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % workoutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full"
        >
          <img
            src={workoutImages[currentImage]}
            alt={`Workout ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <WorkoutTimer />
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {workoutImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImage ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};
