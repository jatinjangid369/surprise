import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Proposal = () => {
    const [decision, setDecision] = useState(null);

    const handleYes = () => {
        setDecision('yes');
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;

        const heart = confetti.shapeFromPath({
            path: 'M167 10c-33.8 0-61 27.2-61 61 0 17 6.8 32.4 17.8 43.6L167 167l43.2-52.4C221.2 103.4 228 88 228 71c0-33.8-27.2-61-61-61z',
            matrix: [0.033, 0, 0, 0.033, -2.766, -2.766]
        });

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 40 * (timeLeft / duration);

            confetti({
                particleCount,
                spread: 70,
                origin: { x: 0.2, y: 0.6 },
                colors: ['#ff4d6d', '#c9184a', '#ffb3c1'],
                shapes: [heart, 'circle']
            });
            confetti({
                particleCount,
                spread: 70,
                origin: { x: 0.8, y: 0.6 },
                colors: ['#ff4d6d', '#c9184a', '#ffb3c1'],
                shapes: [heart, 'circle']
            });
        }, 250);
    };

    return (
        <section className="min-h-[100dvh] w-full flex items-center justify-center relative overflow-hidden cinematic-gradient px-4 py-16 text-center">
            <AnimatePresence mode="wait">
                {!decision ? (
                    <motion.div
                        key="proposal"
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="max-w-[320px] sm:max-w-4xl z-10"
                    >
                        <motion.h2
                            className="text-3xl sm:text-5xl md:text-7xl font-serif text-valentine-pink mb-10 sm:mb-12 leading-tight glow-text"
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                        >
                            Kashish... <br />
                            <span className="text-xl sm:text-3xl md:text-5xl font-light italic text-white/90">
                                will you hold my hand <br className="hidden sm:block" />
                                and walk with me through every tomorrow?
                            </span>
                        </motion.h2>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
                            <motion.button
                                onClick={handleYes}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 77, 109, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 sm:px-12 py-3 sm:py-4 bg-valentine-pink text-white rounded-full font-bold text-lg sm:text-xl tracking-wider transition-all shadow-lg"
                            >
                                Yes 💖
                            </motion.button>

                            <motion.button
                                onClick={handleYes}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 24, 74, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 sm:px-12 py-3 sm:py-4 border-2 border-valentine-red text-valentine-red rounded-full font-bold text-lg sm:text-xl tracking-wider hover:bg-valentine-red/10 transition-all backdrop-blur-sm"
                            >
                                Always 💍
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", damping: 10 }}
                        className="z-10 px-4"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 8, -8, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-6xl sm:text-8xl md:text-9xl mb-6 sm:mb-8"
                        >
                            ❤️
                        </motion.div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl text-valentine-pink font-serif glow-text mb-4 sm:mb-6">
                            I Love You!
                        </h1>
                        <p className="text-blush-pink text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed">
                            “This wasn’t just a question. <br />
                            It was my heart choosing you.”
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="mt-10 sm:mt-12 text-valentine-pink/30 text-xs sm:text-sm italic"
                        >
                            Forever and Always.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Final hidden quote background */}
            <div className="absolute bottom-4 right-4 opacity-5 text-[10px] sm:text-xs text-valentine-pink italic">
                "If love had a name, mine would sound like you."
            </div>
        </section>
    );
};

export default Proposal;
