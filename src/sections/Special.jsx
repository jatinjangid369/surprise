import React from 'react';
import { motion } from 'framer-motion';

const SpecialCard = ({ text, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: index * 0.25
        }}
        className="glass-card hover:bg-valentine-pink/10 transition-all duration-700 group border-valentine-pink/20 relative overflow-hidden"
    >
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-valentine-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
        <div className="h-full flex flex-col items-center justify-center text-center relative z-10 py-6">
            <motion.span
                className="text-4xl mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
                💝
            </motion.span>
            <p className="text-xl md:text-2xl text-blush-pink font-light tracking-wide group-hover:text-white transition-colors duration-500 leading-relaxed px-4">
                {text}
            </p>
        </div>
    </motion.div>
);

const Special = () => {
    const reasons = [
        "You make my bad days lighter.",
        "You feel like home.",
        "You changed my world without trying."
    ];

    return (
        <section className="min-h-screen w-full py-24 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-valentine-pink/5 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="text-center mb-24"
            >
                <h2 className="text-4xl md:text-5xl text-valentine-pink font-serif glow-text mb-4 uppercase tracking-[0.3em] font-light">
                    Why You're Special
                </h2>
                <div className="h-1 w-32 bg-valentine-pink/40 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
                {reasons.map((reason, i) => (
                    <SpecialCard key={i} text={reason} index={i} />
                ))}
            </div>

            <motion.div
                className="mt-24 max-w-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 2 }}
            >
                <p className="text-valentine-pink/50 italic text-2xl font-light leading-relaxed">
                    “I didn’t plan on falling in love,<br />
                    but then you smiled…<br />
                    and my heart decided for me.”
                </p>
            </motion.div>
        </section>
    );
};

export default Special;
