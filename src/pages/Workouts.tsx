import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Dumbbell, Calendar, Clock, Filter, Play, Pause, User, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WorkoutTimer } from "@/components/WorkoutTimer";
import { WorkoutGallery } from "@/components/WorkoutGallery";

const workoutData = [
  {
    id: 1,
    title: "Strength Training",
    category: "Strength",
    duration: "45 min",
    calories: 400,
    difficulty: "Hard",
    scheduled: "Today, 07:00 AM",
    image: "/lovable-uploads/a16f3898-5e26-455a-8bdd-75a6b87c39b1.png",
    videoUrl: "https://www.youtube.com/embed/cbKkB3POqaY?autoplay=1&mute=1&loop=1&playlist=cbKkB3POqaY",
    forGender: "both",
  },
  {
    id: 2,
    title: "Cardio Blast",
    category: "Cardio",
    duration: "30 min",
    calories: 350,
    difficulty: "Medium",
    scheduled: "Tomorrow, 06:30 PM",
    image: "/lovable-uploads/00d88f59-0429-4587-8886-94b6795a4161.png",
    videoUrl: "https://www.youtube.com/embed/-hSma-BRzoo?autoplay=1&mute=1&loop=1&playlist=-hSma-BRzoo",
    forGender: "both",
  },
  {
    id: 3,
    title: "Women's HIIT",
    category: "HIIT",
    duration: "35 min",
    calories: 280,
    difficulty: "Medium",
    scheduled: "Wed, 08:00 AM",
    image: "/lovable-uploads/3c53fdd9-7aef-4264-b239-a7a1a08a89cd.png",
    videoUrl: "https://www.youtube.com/embed/-hSma-BRzoo?autoplay=1&mute=1&loop=1&playlist=-hSma-BRzoo",
    forGender: "female",
  },
  {
    id: 4,
    title: "Men's Full Body",
    category: "Full Body",
    duration: "50 min",
    calories: 520,
    difficulty: "Hard",
    scheduled: "Thu, 07:30 PM",
    image: "/lovable-uploads/611d0e6c-78dc-4dfa-a627-b180ae391f47.png",
    videoUrl: "https://www.youtube.com/embed/cbKkB3POqaY?autoplay=1&mute=1&loop=1&playlist=cbKkB3POqaY",
    forGender: "male",
  }
];

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(workoutData[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedGender, setSelectedGender] = useState("both");
  const [filteredWorkouts, setFilteredWorkouts] = useState(workoutData);

  useEffect(() => {
    if (selectedGender === "both") {
      setFilteredWorkouts(workoutData);
    } else {
      setFilteredWorkouts(
        workoutData.filter(workout => 
          workout.forGender === selectedGender || workout.forGender === "both"
        )
      );
    }
  }, [selectedGender]);

  return (
    <div className="min-h-screen bg-workout-background text-workout-text">
      <NavBar />
      
      <main className="container px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-100">Your Workouts</h1>
            <p className="text-gray-400 mt-1">Find and manage your fitness routines</p>
          </div>
          
          <motion.button
            className="px-4 py-2 bg-steppy-primary text-white rounded-xl flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Dumbbell size={16} className="mr-2" /> 
            New Workout
          </motion.button>
        </motion.div>

        <div className="mb-6 flex items-center space-x-4">
          <span className="text-gray-300">Filter by:</span>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center ${selectedGender === "both" ? "bg-steppy-primary text-white" : "bg-gray-800 text-gray-300"}`}
            onClick={() => setSelectedGender("both")}
          >
            <span className="mr-2">All</span>
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center ${selectedGender === "male" ? "bg-steppy-primary text-white" : "bg-gray-800 text-gray-300"}`}
            onClick={() => setSelectedGender("male")}
          >
            <User size={18} className="mr-2" />
            <span>Men</span>
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center ${selectedGender === "female" ? "bg-steppy-primary text-white" : "bg-gray-800 text-gray-300"}`}
            onClick={() => setSelectedGender("female")}
          >
            <Users size={18} className="mr-2" />
            <span>Women</span>
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-workout-card rounded-2xl shadow-lg overflow-hidden border border-workout-border"
        >
          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <iframe
              src={`${selectedWorkout.videoUrl}${isPlaying ? '' : '&pause=1'}`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              frameBorder="0"
            ></iframe>
            
            <WorkoutTimer className="absolute top-4 left-4 z-20" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{selectedWorkout.title}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {selectedWorkout.duration}
                  </span>
                  <span>{selectedWorkout.calories} cal</span>
                  {selectedWorkout.forGender !== "both" && (
                    <div className="flex items-center mt-1">
                      {selectedWorkout.forGender === "male" ? <User size={12} className="mr-1" /> : <Users size={12} className="mr-1" />}
                      <span className="text-xs">{selectedWorkout.forGender === "male" ? "Men" : "Women"}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">Featured Workouts</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {filteredWorkouts.map((workout) => (
                <CarouselItem key={workout.id} className="basis-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedWorkout(workout)}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img 
                        src={workout.image} 
                        alt={workout.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <h3 className="font-semibold">{workout.title}</h3>
                          <p className="text-sm opacity-80">{workout.duration}</p>
                          {workout.forGender !== "both" && (
                            <div className="flex items-center mt-1">
                              {workout.forGender === "male" ? <User size={12} className="mr-1" /> : <Users size={12} className="mr-1" />}
                              <span className="text-xs">{workout.forGender === "male" ? "Men" : "Women"}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 text-white border-none hover:bg-white/20" />
            <CarouselNext className="bg-white/10 text-white border-none hover:bg-white/20" />
          </Carousel>
        </div>
        
        <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center px-4 py-2 bg-[#2A2A2A] text-gray-300 rounded-lg">
              <Calendar size={18} className="text-gray-400 mr-2" />
              <span className="text-sm">Calendar</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-steppy-primary/10 text-steppy-primary rounded-lg">
              <Dumbbell size={18} className="mr-2" />
              <span className="text-sm">Workouts</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-[#2A2A2A] text-gray-300 rounded-lg ml-auto">
              <Filter size={18} className="text-gray-400 mr-2" />
              <span className="text-sm">Filter</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-[#222222]">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Workout
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Calories
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Scheduled
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredWorkouts.map((workout) => (
                  <motion.tr 
                    key={workout.id}
                    whileHover={{ backgroundColor: "#222222" }}
                    className="cursor-pointer text-gray-300"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-[#2A2A2A] flex items-center justify-center mr-3">
                          <Dumbbell size={18} className="text-steppy-primary" />
                        </div>
                        <div className="text-sm font-medium">{workout.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {workout.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {workout.duration}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {workout.calories} cal
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        workout.difficulty === "Easy" 
                          ? "bg-green-900/30 text-green-400" 
                          : workout.difficulty === "Medium"
                          ? "bg-yellow-900/30 text-yellow-400"
                          : "bg-red-900/30 text-red-400"
                      }`}>
                        {workout.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {workout.scheduled}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workouts;
