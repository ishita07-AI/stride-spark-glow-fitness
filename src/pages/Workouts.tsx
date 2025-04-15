
import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Dumbbell, Calendar, Clock, Filter } from "lucide-react";

const workoutData = [
  {
    id: 1,
    title: "Morning HIIT",
    category: "Cardio",
    duration: "30 min",
    calories: 320,
    difficulty: "Medium",
    scheduled: "Today, 07:00 AM",
  },
  {
    id: 2,
    title: "Full Body Strength",
    category: "Strength",
    duration: "45 min",
    calories: 450,
    difficulty: "Hard",
    scheduled: "Tomorrow, 06:30 PM",
  },
  {
    id: 3,
    title: "Yoga Flow",
    category: "Flexibility",
    duration: "35 min",
    calories: 210,
    difficulty: "Easy",
    scheduled: "Wed, 08:00 AM",
  },
  {
    id: 4,
    title: "Core Crusher",
    category: "Strength",
    duration: "20 min",
    calories: 180,
    difficulty: "Medium",
    scheduled: "Thu, 07:30 PM",
  },
  {
    id: 5,
    title: "Cycling Session",
    category: "Cardio",
    duration: "45 min",
    calories: 480,
    difficulty: "Hard",
    scheduled: "Sat, 10:00 AM",
  },
];

const Workouts = () => {
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
        
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
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
