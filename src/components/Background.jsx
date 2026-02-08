import React from 'react';
import { motion } from 'framer-motion';

const FloatingHeart = ({ delay, x, size, duration, color }) => (
    <motion.div
        initial={{ y: '110vh', x, opacity: 0, scale: 0 }}
        animate={{
            y: '-10vh',
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1.2, 1.2, 0.6]
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear"
        }}
        className="absolute pointer-events-none"
        style={{ fontSize: size, color: color || '#ff4d6d33' }}
    >
        {Math.random() > 0.5 ? '❤️' : '💖'}
    </motion.div>
);

const Background = () => {
    const hearts = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 20,
        x: `${Math.random() * 100}vw`,
        size: `${Math.random() * 25 + 10}px`,
        duration: Math.random() * 10 + 15,
        color: i % 2 === 0 ? '#ff4d6d22' : '#c9184a22'
    }));

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none cinematic-gradient">
            {/* Glow Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-valentine-pink/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-valentine-red/5 blur-[120px] rounded-full" />

            {/* Floating Elements */}
            {hearts.map(heart => (
                <FloatingHeart key={heart.id} {...heart} />
            ))}

            {/* Subtle Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
    );
};

export default Background;
