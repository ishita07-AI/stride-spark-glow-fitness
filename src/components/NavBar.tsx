
import React from "react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import { Bell, User, Crown, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/dashboard" label="Dashboard" />
          <NavLink href="/workouts" label="Workouts" />
          <NavLink href="/challenges" label="Challenges" />
          <NavLink href="/community" label="Community" />
        </nav>

        <div className="flex items-center gap-3">
          <NavButton icon={<Bell size={20} />} />
          <NavButton icon={<Crown size={20} />} />
          <NavButton icon={<Settings size={20} />} />
          <Link to="/profile">
            <motion.div 
              className="w-9 h-9 rounded-full bg-gradient-to-r from-steppy-primary to-steppy-secondary flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User size={18} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link to={href}>
      <motion.span
        className="text-gray-600 hover:text-steppy-primary text-sm font-medium transition-colors relative"
        whileHover={{ scale: 1.05 }}
      >
        {label}
        <motion.span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-steppy-primary"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </motion.span>
    </Link>
  );
};

const NavButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <motion.button
      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-steppy-primary hover:bg-gray-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.button>
  );
};
