import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollHint = ({ isVisible, onDismiss }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20, filter: "blur(10px)" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none"
                >
                    <motion.div
                        className="glass-card border-valentine-pink/30 p-8 sm:p-12 max-w-sm w-full text-center relative pointer-events-auto shadow-[0_0_50px_rgba(255,77,109,0.2)]"
                        layoutId="scroll-hint-popup"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-5xl sm:text-6xl mb-6"
                        >
                            📜
                        </motion.div>

                        <h3 className="text-valentine-pink font-serif text-2xl sm:text-3xl mb-4 leading-tight">
                            Wait a second...
                        </h3>

                        <p className="text-blush-pink text-lg italic font-light mb-8 leading-relaxed">
                            "You have to scroll to see this, baby ❤️"
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onDismiss}
                            className="px-8 py-3 bg-valentine-pink text-white rounded-full font-medium tracking-wide shadow-lg hover:shadow-valentine-pink/20 transition-all"
                        >
                            Got it! ✨
                        </motion.button>

                        {/* Subtle glow behind */}
                        <div className="absolute inset-0 bg-valentine-pink/5 blur-2xl -z-10 rounded-3xl" />
                    </motion.div>

                    {/* Dark Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-romantic-black/80 -z-20 backdrop-blur-sm"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollHint;
