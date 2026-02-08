import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Secret = ({ onReveal }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(onReveal, 2000);
    };

    return (
        <section className="h-[100dvh] w-full flex items-center justify-center relative overflow-hidden bg-romantic-black p-4">
            <AnimatePresence mode="wait">
                {!isClicked ? (
                    <motion.div
                        key="button"
                        className="flex flex-col items-center gap-6 sm:gap-8"
                        exit={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-valentine-pink text-xl sm:text-2xl font-light tracking-widest uppercase mb-8 sm:mb-12 glow-text text-center px-4"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            A Little Secret
                        </motion.h2>

                        <motion.button
                            onClick={handleClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-valentine-pink/30 flex items-center justify-center group"
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-valentine-pink/20 blur-xl"
                                animate={{ scale: [1, 1.4, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                            />
                            <span className="text-3xl sm:text-5xl relative z-10 transition-transform group-hover:scale-125 duration-300">💝</span>
                        </motion.button>

                        <p className="text-valentine-pink/40 text-xs sm:text-sm mt-4 tracking-tight italic text-center px-4">
                            Click only if you trust me ❤️
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center"
                    >
                        {/* Heartbeat Animation */}
                        <motion.div
                            className="text-7xl sm:text-9xl text-valentine-pink"
                            animate={{
                                scale: [1, 1.5, 1.2, 1.8, 1],
                                filter: ["blur(0px)", "blur(20px)", "blur(0px)", "blur(40px)", "blur(0px)"]
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            ❤️
                        </motion.div>

                        {/* Flash Effect */}
                        <motion.div
                            className="absolute inset-0 bg-valentine-pink/20 z-50 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Secret;
