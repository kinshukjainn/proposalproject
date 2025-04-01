import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <motion.div
      className="w-full py-4 bg-red-500 text-white flex justify-center items-center shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl md:text-4xl font-bold flex items-center">
        <FaHeart className="mr-2 text-yellow-300 animate-pulse" />
        My Valentine Proposal
      </h1>
    </motion.div>
  );
};

export default Header;
