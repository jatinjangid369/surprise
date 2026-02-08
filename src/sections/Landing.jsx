import React from 'react';
import { motion } from 'framer-motion';

const Landing = ({ onStart }) => {
    return (
        <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 20,
                    duration: 1.2
                }}
                className="w-full max-w-xs sm:max-w-md md:max-w-4xl"
            >
                <motion.h1
                    className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-serif text-valentine-pink glow-text mb-4 sm:mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                >
                    Hey Kashish... <span className="inline-block animate-bounce-slow">❤️</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-2xl md:text-3xl text-blush-pink italic mb-10 sm:mb-16 font-light tracking-wide px-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                >
                    I made this just for you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, type: "spring", stiffness: 100 }}
                >
                    <button
                        onClick={onStart}
                        className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-valentine-pink/40 text-valentine-pink rounded-full overflow-hidden transition-all hover:border-valentine-pink glow-box text-base sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] font-medium"
                    >
                        <span className="relative z-10">Start the Journey →</span>
                        <motion.div
                            className="absolute inset-0 bg-valentine-pink opacity-10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                        />
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                className="mt-20 sm:mt-32 max-w-[280px] sm:max-w-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 4.5, duration: 2.5 }}
            >
                <p className="text-valentine-pink/30 font-light italic text-base sm:text-xl leading-relaxed">
                    “Some people come into your life quietly…<br />
                    but suddenly, they become your whole heart.”
                </p>
            </motion.div>
        </section>
    );
};

export default Landing;
