import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaKissWinkHeart, FaHeartBroken } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";

const Maincontent: React.FC = () => {
    const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const moveNoButton = () => {
        const newX = Math.random() * 80 + "%";
        const newY = Math.random() * 80 + "%";
        setNoPosition({ top: newY, left: newX });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 text-center p-6 relative overflow-hidden">
            {/* Floating Hearts Animation */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-red-300 opacity-50 animate-pulse"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -100 }}
                    transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ left: Math.random() * 100 + "%", top: Math.random() * 100 + "%" }}
                >
                    <FaHeart size={40 + Math.random() * 20} />
                </motion.div>
            ))}

            {/* Sparkling Effect */}
            <div className="absolute inset-0 bg-transparent pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-75 shadow-xl"
                        style={{
                            width: `${Math.random() * 4}px`,
                            height: `${Math.random() * 4}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
                    />
                ))}
            </div>

            {/* Main Proposal */}
            <motion.h1
                className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl animate-bounce"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                Will You Be My Valentine? ❤️
            </motion.h1>

            <motion.p
                className="text-xl md:text-3xl text-yellow-200 mt-6 font-light italic drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                I promise to make every moment magical & full of love! ✨
            </motion.p>

            {/* Buttons */}
            <div className="relative mt-10 w-full flex justify-center items-center">
                <motion.button
                    className="px-10 py-4 text-2xl font-bold text-white bg-gradient-to-r from-red-500 to-pink-700 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out flex items-center gap-3 border-4 border-white"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Yes! 💖 <FaKissWinkHeart className="animate-pulse" />
                </motion.button>

                <motion.button
                    className="px-8 py-3 text-xl font-bold text-white bg-gray-500 rounded-full shadow-lg absolute"
                    style={{ top: noPosition.top, left: noPosition.left }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={moveNoButton}
                    onTouchStart={moveNoButton} // For mobile
                >
                    No 😢 <FaHeartBroken className="text-black" />
                </motion.button>
            </div>

            {/* Explore Letter Button */}
            <motion.button
                className="mt-6 px-8 py-3 text-xl font-bold text-white bg-yellow-500 rounded-full shadow-xl hover:bg-yellow-600 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDialogOpen(true)}
            >
                Explore Letter 📜
            </motion.button>

            {/* Dialog Box */}
            <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-2xl text-center max-w-md mx-auto">
                    <Dialog.Title className="text-3xl font-bold text-red-500">My Dearest Love,</Dialog.Title>
                    <Dialog.Description className="text-lg text-gray-700 mt-4">
                        Ever since I saw you, my heart has known no peace—only a beautiful
                        chaos of emotions that dance like fireflies in the night. Your
                        laughter is the melody that plays in my soul, and your presence
                        is the warmth that makes every moment golden. Will you let me be
                        the reason behind your smiles, the protector of your dreams, and
                        the one who cherishes you beyond words?
                    </Dialog.Description>
                    <button
                        className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-600"
                        onClick={() => setIsDialogOpen(false)}
                    >
                        Close
                    </button>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
};

export default Maincontent;