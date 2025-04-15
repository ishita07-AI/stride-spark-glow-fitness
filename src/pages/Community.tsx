
import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Users, MessageSquare, ThumbsUp, Award, Search, Filter, Plus } from "lucide-react";

const Community = () => {
  const communityPosts = [
    {
      id: 1,
      user: {
        name: "Emma Johnson",
        avatar: "E",
        badge: "Elite Runner",
      },
      timeAgo: "2 hours ago",
      content: "Just completed my first 10K run in under 50 minutes! So proud of my progress over the last few months. Who else is training for the summer marathon?",
      likes: 24,
      comments: 8,
      image: null,
    },
    {
      id: 2,
      user: {
        name: "Marcus Chen",
        avatar: "M",
        badge: "Fitness Coach",
      },
      timeAgo: "5 hours ago",
      content: "Quick tip: When starting a new workout routine, focus on form rather than weight or reps. Quality over quantity will prevent injuries and give better results in the long run!",
      likes: 56,
      comments: 12,
      image: null,
    },
    {
      id: 3,
      user: {
        name: "Sophia Williams",
        avatar: "S",
        badge: "Yoga Expert",
      },
      timeAgo: "Yesterday",
      content: "Morning yoga session with the sunrise - perfect way to start the day! Who else includes yoga in their fitness routine?",
      likes: 42,
      comments: 16,
      image: null,
    },
  ];

  const topGroups = [
    { name: "Marathon Runners", members: 2453, posts: 87 },
    { name: "HIIT Enthusiasts", members: 1876, posts: 64 },
    { name: "Yoga & Mindfulness", members: 3241, posts: 112 },
    { name: "Weight Training", members: 2185, posts: 93 },
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
            <h1 className="text-3xl font-bold">Community</h1>
            <p className="text-gray-600 mt-1">Connect with fitness enthusiasts</p>
          </div>
          
          <div className="flex gap-2">
            <motion.button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={16} className="mr-2" /> 
              Find Friends
            </motion.button>
            
            <motion.button
              className="px-4 py-2 bg-steppy-primary text-white rounded-xl flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={16} className="mr-2" /> 
              New Post
            </motion.button>
          </div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-steppy-primary/10 flex items-center justify-center text-steppy-primary">
                  <span className="font-semibold">A</span>
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Share your fitness journey..." 
                    className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-steppy-primary" 
                  />
                </div>
              </div>
              
              <div className="flex justify-between">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <Plus size={16} /> Photo
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <Plus size={16} /> Video
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <Plus size={16} /> Workout
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <Plus size={16} /> Challenge
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Posts</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-gray-100">
                  <Filter size={16} className="text-gray-500" />
                </button>
                <button className="p-2 rounded-lg bg-gray-100">
                  <Search size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  className="bg-white rounded-xl p-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-steppy-primary to-steppy-secondary text-white flex items-center justify-center font-semibold">
                        {post.user.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{post.user.name}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{post.timeAgo}</span>
                          <span className="text-xs px-2 py-0.5 bg-steppy-primary/10 text-steppy-primary rounded-full">
                            {post.user.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden mb-4">
                      <img src={post.image} alt="Post content" className="w-full h-64 object-cover" />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t">
                    <motion.button 
                      className="flex items-center gap-1 text-gray-500" 
                      whileHover={{ scale: 1.05, color: "#4F46E5" }}
                    >
                      <ThumbsUp size={16} /> <span>{post.likes}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center gap-1 text-gray-500"
                      whileHover={{ scale: 1.05, color: "#4F46E5" }}
                    >
                      <MessageSquare size={16} /> <span>{post.comments}</span>
                    </motion.button>
                    
                    <motion.button 
                      className="flex items-center gap-1 text-gray-500"
                      whileHover={{ scale: 1.05, color: "#4F46E5" }}
                    >
                      <Award size={16} /> Cheer
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Popular Groups</h3>
              
              <div className="space-y-3">
                {topGroups.map((group, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-steppy-accent to-steppy-secondary text-white flex items-center justify-center">
                        <Users size={16} />
                      </div>
                      <div>
                        <div className="font-medium">{group.name}</div>
                        <div className="text-xs text-gray-500">
                          {group.members.toLocaleString()} members
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      className="px-2 py-1 text-xs bg-gray-100 rounded-lg text-gray-700"
                      whileHover={{ scale: 1.05, backgroundColor: "#4F46E5", color: "#FFFFFF" }}
                    >
                      Join
                    </motion.button>
                  </div>
                ))}
              </div>
              
              <motion.button
                className="w-full mt-4 py-2 rounded-xl bg-gray-100 text-sm font-medium text-gray-700 flex items-center justify-center"
                whileHover={{ backgroundColor: "#F3F4F6" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore More Groups</span>
              </motion.button>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Trending Challenges</h3>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl border bg-gray-50">
                  <div className="text-sm font-medium">30 Day Push-up Challenge</div>
                  <div className="text-xs text-gray-500 mb-2">1,234 participants</div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-steppy-primary rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div className="p-3 rounded-xl border bg-gray-50">
                  <div className="text-sm font-medium">Summer Cycling Tour</div>
                  <div className="text-xs text-gray-500 mb-2">876 participants</div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-steppy-accent rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                
                <div className="p-3 rounded-xl border bg-gray-50">
                  <div className="text-sm font-medium">Mindfulness Meditation</div>
                  <div className="text-xs text-gray-500 mb-2">2,156 participants</div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-steppy-secondary rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
