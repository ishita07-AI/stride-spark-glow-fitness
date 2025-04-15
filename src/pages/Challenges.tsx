
import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { ChallengeCard } from "@/components/ChallengeCard";
import { Trophy, Filter, Calendar, Users } from "lucide-react";

const Challenges = () => {
  // Sample data for challenges
  const activeChallenge = [
    {
      title: "10K Steps Challenge",
      description: "Complete 10,000 steps every day for a week",
      participants: 18,
      daysLeft: 3,
      progress: 57,
    },
    {
      title: "Summer Fitness",
      description: "Burn 5000 calories in workout sessions",
      participants: 42,
      daysLeft: 14,
      progress: 35,
    },
    {
      title: "Marathon Training",
      description: "Run 100km in 30 days to prepare for the marathon",
      participants: 28,
      daysLeft: 22,
      progress: 15,
    },
  ];

  const upcomingChallenges = [
    {
      title: "Autumn Cycling Tour",
      description: "Cycle 200km in beautiful autumn scenery",
      participants: 64,
      daysLeft: 10,
      progress: 0,
    },
    {
      title: "30-Day Yoga Challenge",
      description: "Complete a yoga session every day for mental clarity",
      participants: 53,
      daysLeft: 5,
      progress: 0,
    },
  ];

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
            <h1 className="text-3xl font-bold">Challenges</h1>
            <p className="text-gray-600 mt-1">Compete, achieve goals and win rewards</p>
          </div>
          
          <motion.button
            className="px-4 py-2 bg-steppy-primary text-white rounded-xl flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy size={16} className="mr-2" /> 
            Create Challenge
          </motion.button>
        </motion.div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center px-4 py-2 bg-steppy-primary/10 text-steppy-primary rounded-lg">
            <Trophy size={18} className="mr-2" />
            <span className="text-sm">All Challenges</span>
          </div>
          
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg">
            <Users size={18} className="text-gray-500 mr-2" />
            <span className="text-sm">My Challenges</span>
          </div>
          
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <span className="text-sm">Calendar</span>
          </div>
          
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg ml-auto">
            <Filter size={18} className="text-gray-500 mr-2" />
            <span className="text-sm">Filter</span>
          </div>
        </div>
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Active Challenges</h2>
            <motion.button 
              className="text-sm text-steppy-primary font-medium"
              whileHover={{ scale: 1.05 }}
            >
              View All
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeChallenge.map((challenge, index) => (
              <ChallengeCard 
                key={index}
                title={challenge.title}
                description={challenge.description}
                participants={challenge.participants}
                daysLeft={challenge.daysLeft}
                progress={challenge.progress}
              />
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Challenges</h2>
            <motion.button 
              className="text-sm text-steppy-primary font-medium"
              whileHover={{ scale: 1.05 }}
            >
              View All
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingChallenges.map((challenge, index) => (
              <ChallengeCard 
                key={index}
                title={challenge.title}
                description={challenge.description}
                participants={challenge.participants}
                daysLeft={challenge.daysLeft}
                progress={challenge.progress}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Challenges;
