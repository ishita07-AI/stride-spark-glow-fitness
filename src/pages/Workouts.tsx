
import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Dumbbell, Calendar, Clock, Filter, Play, Pause } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
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
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
  {
    id: 3,
    title: "Core Power",
    category: "Core",
    duration: "35 min",
    calories: 280,
    difficulty: "Medium",
    scheduled: "Wed, 08:00 AM",
    image: "/lovable-uploads/d5c09273-7871-4878-b456-14157f7268e4.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
  {
    id: 4,
    title: "Full Body Circuit",
    category: "Full Body",
    duration: "50 min",
    calories: 520,
    difficulty: "Hard",
    scheduled: "Thu, 07:30 PM",
    image: "/lovable-uploads/611d0e6c-78dc-4dfa-a627-b180ae391f47.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  }
];

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = React.useState(workoutData[0]);
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
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

        {/* Featured Workout Video Section with Timer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-[#1A1A1A] rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <iframe
              src={`${selectedWorkout.videoUrl}${isPlaying ? '' : '&pause=1'}`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              frameBorder="0"
            ></iframe>
            
            {/* Timer Overlay */}
            <div className="absolute top-4 left-4 z-20 text-yellow-400 font-bold text-2xl flex items-center">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                0:30
              </motion.div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{selectedWorkout.title}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {selectedWorkout.duration}
                  </span>
                  <span>{selectedWorkout.calories} cal</span>
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

        {/* Workout Carousel */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-100">Featured Workouts</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {workoutData.map((workout) => (
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
        
        {/* Workout Table */}
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
                {workoutData.map((workout) => (
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
