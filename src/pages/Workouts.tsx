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
    title: "Morning HIIT",
    category: "Cardio",
    duration: "30 min",
    calories: 320,
    difficulty: "Medium",
    scheduled: "Today, 07:00 AM",
    image: "/lovable-uploads/2aadcf49-8103-4e1d-8b03-81ec0bf5096f.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
  {
    id: 2,
    title: "Full Body Strength",
    category: "Strength",
    duration: "45 min",
    calories: 450,
    difficulty: "Hard",
    scheduled: "Tomorrow, 06:30 PM",
    image: "/lovable-uploads/67dbff06-1948-430e-b206-167a83f801ee.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
  {
    id: 3,
    title: "Yoga Flow",
    category: "Flexibility",
    duration: "35 min",
    calories: 210,
    difficulty: "Easy",
    scheduled: "Wed, 08:00 AM",
    image: "/lovable-uploads/a91f762f-8942-40a0-b2ee-0ae110372d26.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
  {
    id: 4,
    title: "Core Crusher",
    category: "Strength",
    duration: "20 min",
    calories: 180,
    difficulty: "Medium",
    scheduled: "Thu, 07:30 PM",
    image: "/lovable-uploads/bd847877-038f-4f23-bdf6-74d571da16bd.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
  {
    id: 5,
    title: "Cycling Session",
    category: "Cardio",
    duration: "45 min",
    calories: 480,
    difficulty: "Hard",
    scheduled: "Sat, 10:00 AM",
    image: "/lovable-uploads/2aadcf49-8103-4e1d-8b03-81ec0bf5096f.png",
    videoUrl: "https://player.vimeo.com/video/510885662?autoplay=1&loop=1&muted=1",
  },
];

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = React.useState(workoutData[0]);
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="container px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold">Your Workouts</h1>
            <p className="text-gray-600 mt-1">Find and manage your fitness routines</p>
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

        {/* Featured Workout Video Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src={`${selectedWorkout.videoUrl}${isPlaying ? '' : '&pause=1'}`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              frameBorder="0"
            ></iframe>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 px-4 py-2 rounded-xl text-white">
              <div>
                <h3 className="font-semibold">{selectedWorkout.title}</h3>
                <p className="text-sm opacity-80">{selectedWorkout.category}</p>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Workout Carousel */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Workouts</h2>
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        {/* Workout Table */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg">
              <Calendar size={18} className="text-gray-500 mr-2" />
              <span className="text-sm">Calendar</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-steppy-primary/10 text-steppy-primary rounded-lg">
              <Dumbbell size={18} className="mr-2" />
              <span className="text-sm">Workouts</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg ml-auto">
              <Filter size={18} className="text-gray-500 mr-2" />
              <span className="text-sm">Filter</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Workout
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Calories
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scheduled
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {workoutData.map((workout) => (
                  <motion.tr 
                    key={workout.id}
                    whileHover={{ backgroundColor: "#F9FAFB" }}
                    className="cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                          <Dumbbell size={18} className="text-steppy-primary" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">{workout.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {workout.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {workout.duration}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {workout.calories} cal
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        workout.difficulty === "Easy" 
                          ? "bg-green-100 text-green-800" 
                          : workout.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        {workout.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
