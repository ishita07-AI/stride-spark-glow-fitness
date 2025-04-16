import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { 
  Smartphone, 
  Watch, 
  Heart, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle,
  ArrowDownRight
} from "lucide-react";
import { WorkoutGallery } from "@/components/WorkoutGallery";

const HeroSection = () => {
  return (
    <div className="bg-white pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 rounded-full bg-steppy-primary/10 text-steppy-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The future of fitness tracking is here
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Track. Challenge. <span className="text-steppy-primary">Achieve.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Steppy helps you monitor your fitness journey with beautiful visualizations, smart insights, and fun challenges to keep you motivated.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/dashboard">
                <motion.button 
                  className="px-6 py-3 bg-steppy-primary text-white rounded-xl font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium flex items-center justify-center hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Works with any device</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Real-time syncing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Compete with friends</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Earn rewards</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <WorkoutGallery className="w-full max-w-[600px] mx-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Everything you need to track your fitness</h2>
          <p className="text-xl text-gray-600">Our smart fitness tracking platform works with all your devices and keeps you motivated with amazing features.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<Smartphone size={24} />}
            title="Multi-device Sync"
            description="Connect your Android, iOS devices and any fitness trackers for seamless data synchronization."
            color="primary"
          />
          <FeatureCard 
            icon={<Award size={24} />}
            title="Achievements & Rewards"
            description="Earn badges, unlock rewards, and celebrate your fitness milestones to stay motivated."
            color="secondary"
          />
          <FeatureCard 
            icon={<Watch size={24} />}
            title="Real-time Tracking"
            description="Monitor your steps, calories, and activities in real-time with beautiful visualizations."
            color="highlight"
          />
          <FeatureCard 
            icon={<Heart size={24} />}
            title="Health Insights"
            description="Get personalized health insights and recommendations based on your fitness data."
            color="accent"
          />
          <FeatureCard 
            icon={<Users size={24} />}
            title="Competition Mode"
            description="Challenge friends and family to friendly competitions and achieve goals together."
            color="primary"
          />
          <FeatureCard 
            icon={<Smartphone size={24} />}
            title="Custom Avatars"
            description="Create your personalized animated avatar that reflects your real measurements and progress."
            color="secondary"
          />
        </div>
        
        <div className="text-center">
          <Link to="/dashboard">
            <motion.button 
              className="px-6 py-3 bg-steppy-primary text-white rounded-xl font-medium flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Tracking Now <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color = "primary" 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "primary" | "secondary" | "accent" | "highlight";
}) => {
  const colors = {
    primary: "bg-steppy-primary/10 text-steppy-primary",
    secondary: "bg-steppy-secondary/10 text-steppy-secondary",
    accent: "bg-steppy-accent/10 text-steppy-accent",
    highlight: "bg-steppy-highlight/10 text-steppy-highlight",
  };
  
  return (
    <motion.div 
      className="bg-white rounded-2xl p-6 border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <motion.div 
        className={`h-12 w-12 rounded-full ${colors[color]} flex items-center justify-center mb-5`}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const DeviceShowcase = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Works with all your devices</h2>
          <p className="text-xl text-gray-600">Steppy synchronizes seamlessly with Android, iOS, and most fitness tracking wearables.</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <img src="/lovable-uploads/bd847877-038f-4f23-bdf6-74d571da16bd.png" alt="Apple Watch" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-sm font-medium">Apple Watch</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <Watch size={32} />
            </div>
            <span className="text-sm font-medium">Android Wear</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <img src="/lovable-uploads/2aadcf49-8103-4e1d-8b03-81ec0bf5096f.png" alt="Fitness Band" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-sm font-medium">Fitness Bands</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <Smartphone size={32} />
            </div>
            <span className="text-sm font-medium">Smartphones</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <img src="/lovable-uploads/a91f762f-8942-40a0-b2ee-0ae110372d26.png" alt="Smart Scale" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-sm font-medium">Smart Scales</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="py-16 px-4 bg-steppy-primary text-white">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your fitness journey?</h2>
          <p className="text-xl opacity-90 mb-8">Join thousands of users who are tracking, challenging, and achieving their fitness goals with Steppy.</p>
          
          <Link to="/dashboard">
            <motion.button 
              className="px-8 py-4 bg-white text-steppy-primary rounded-xl font-bold text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start For Free
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13C7.89543 13 7 12.1046 7 11V5Z" fill="#4F46E5" />
                  <path d="M13 5C13 3.89543 13.8954 3 15 3C16.1046 3 17 3.89543 17 5V19C17 20.1046 16.1046 21 15 21C13.8954 21 13 20.1046 13 19V5Z" fill="#4F46E5" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">Steppy</h1>
            </div>
            <p className="text-gray-400 mb-4">Track your fitness journey with beautiful visualizations and fun challenges.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Activity Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Challenges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rewards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Device Sync</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Steppy. All rights reserved.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <DeviceShowcase />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
