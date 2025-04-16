import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { CircularProgress } from "@/components/CircularProgress";
import { StatsCard } from "@/components/StatsCard";
import { ActivityChart } from "@/components/ActivityChart";
import { ChallengeCard } from "@/components/ChallengeCard";
import { RewardBadge } from "@/components/RewardBadge";
import { DeviceSync } from "@/components/DeviceSync";
import { AnimatedAvatar } from "@/components/AnimatedAvatar";
import { 
  Footprints, 
  Flame, 
  Heart, 
  Trophy, 
  Award, 
  Target, 
  Medal, 
  Crown,
  Dumbbell,
  PersonStanding,
  Bike
} from "lucide-react";

const weeklySteps = [
  { day: "Mon", value: 9234 },
  { day: "Tue", value: 10345 },
  { day: "Wed", value: 8654 },
  { day: "Thu", value: 9845 },
  { day: "Fri", value: 11245 },
  { day: "Sat", value: 7896 },
  { day: "Sun", value: 10567 },
];

const connectedDevices: Array<{
  id: string;
  name: string;
  type: "phone" | "watch" | "tablet";
  connected: boolean;
  lastSync?: string;
}> = [
  { id: "1", name: "iPhone 13", type: "phone", connected: true, lastSync: "Today, 10:32 AM" },
  { id: "2", name: "Apple Watch", type: "watch", connected: true, lastSync: "Today, 10:32 AM" },
  { id: "3", name: "Galaxy Watch", type: "watch", connected: false },
  { id: "4", name: "iPad", type: "tablet", connected: true, lastSync: "Yesterday, 8:15 PM" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="container px-4 py-8 mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8"
            >
              <AnimatedAvatar size="lg" />
              
              <div>
                <motion.h1 
                  className="text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Welcome back, Alex!
                </motion.h1>
                <motion.p 
                  className="text-gray-600 mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  You're making great progress this week!
                </motion.p>
                
                <motion.div 
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    75% of daily goal
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    5-day streak
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Gold tier
                  </span>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <StatsCard 
                title="Daily Steps"
                value="10,567"
                icon={<Footprints size={24} />}
                change={7.5}
                color="primary"
              />
              <StatsCard 
                title="Calories Burned"
                value="834"
                icon={<Flame size={24} />}
                change={3.2}
                color="secondary"
              />
              <StatsCard 
                title="Active Minutes"
                value="78"
                icon={<Heart size={24} />}
                change={-2.5}
                color="highlight"
              />
            </div>
            
            <div className="bg-white rounded-2xl p-5 border shadow-sm mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Weekly Activity</h3>
                <motion.button 
                  className="text-sm text-steppy-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  View Details
                </motion.button>
              </div>
              
              <ActivityChart data={weeklySteps} />
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Active Challenges</h3>
                <motion.button 
                  className="text-sm text-steppy-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  View All
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChallengeCard 
                  title="10K Steps Challenge"
                  description="Complete 10,000 steps every day for a week"
                  participants={18}
                  daysLeft={3}
                  progress={57}
                />
                <ChallengeCard 
                  title="Summer Fitness"
                  description="Burn 5000 calories in workout sessions"
                  participants={42}
                  daysLeft={14}
                  progress={35}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Achievements</h3>
                <motion.button 
                  className="text-sm text-steppy-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  View All
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                <RewardBadge 
                  icon={<Trophy size={24} />}
                  name="5K Champion"
                  description="Completed 5,000 steps for 7 days"
                  color="gold"
                />
                <RewardBadge 
                  icon={<Flame size={24} />}
                  name="Calorie Crusher"
                  description="Burned 5,000 calories in a week"
                  color="highlight"
                />
                <RewardBadge 
                  icon={<Award size={24} />}
                  name="Early Riser"
                  description="Completed workout before 7AM"
                  color="secondary"
                />
                <RewardBadge 
                  icon={<Target size={24} />}
                  name="Goal Getter"
                  description="Achieved all daily goals"
                  color="accent"
                />
                <RewardBadge 
                  icon={<Medal size={24} />}
                  name="Marathon Pro"
                  description="Ran 26 miles total"
                  color="primary"
                  isLocked
                  progress={65}
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-80 space-y-6">
            <div className="bg-white rounded-2xl p-5 border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Today's Goal</h3>
              
              <div className="flex justify-center mb-4">
                <CircularProgress value={7580} max={10000} color="#4F46E5">
                  <div className="text-center">
                    <div className="text-2xl font-bold">7,580</div>
                    <div className="text-xs text-gray-500">of 10,000 steps</div>
                  </div>
                </CircularProgress>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                      <Footprints size={16} />
                    </div>
                    <span className="text-sm">Steps</span>
                  </div>
                  <div className="text-sm font-medium">7,580 / 10,000</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-2">
                      <Flame size={16} />
                    </div>
                    <span className="text-sm">Calories</span>
                  </div>
                  <div className="text-sm font-medium">621 / 800</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                      <Heart size={16} />
                    </div>
                    <span className="text-sm">Active minutes</span>
                  </div>
                  <div className="text-sm font-medium">42 / 60</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-5 border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Upcoming Workouts</h3>
              
              <div className="space-y-3">
                <motion.div 
                  className="p-3 rounded-xl border bg-gray-50 flex items-start"
                  whileHover={{ backgroundColor: "#F9FAFB" }}
                >
                  <div className="h-10 w-10 rounded-full bg-steppy-accent/10 text-steppy-accent flex items-center justify-center mr-3">
                    <PersonStanding size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Morning Yoga</h4>
                    <p className="text-xs text-gray-500">Today, 08:00 AM (20 min)</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-3 rounded-xl border bg-gray-50 flex items-start"
                  whileHover={{ backgroundColor: "#F9FAFB" }}
                >
                  <div className="h-10 w-10 rounded-full bg-steppy-primary/10 text-steppy-primary flex items-center justify-center mr-3">
                    <Dumbbell size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-medium">HIIT Training</h4>
                    <p className="text-xs text-gray-500">Tomorrow, 06:30 PM (30 min)</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-3 rounded-xl border bg-gray-50 flex items-start"
                  whileHover={{ backgroundColor: "#F9FAFB" }}
                >
                  <div className="h-10 w-10 rounded-full bg-steppy-secondary/10 text-steppy-secondary flex items-center justify-center mr-3">
                    <Bike size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Cycling Session</h4>
                    <p className="text-xs text-gray-500">Saturday, 10:00 AM (45 min)</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.button
                className="mt-4 w-full py-2 rounded-xl bg-gray-100 text-sm font-medium text-gray-700 flex items-center justify-center"
                whileHover={{ backgroundColor: "#F3F4F6" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Add Workout</span>
              </motion.button>
            </div>
            
            <DeviceSync devices={connectedDevices} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
