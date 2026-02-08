import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Meaning = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lines = [
        "I don’t know how it happened…",
        "but loving you feels natural.",
        "Effortless.",
        "Real."
    ];

    return (
        <section ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-romantic-black/50 overflow-hidden relative">
            {/* Dynamic Background Morph */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: useTransform(
                        scrollYProgress,
                        [0, 0.5, 1],
                        [
                            "radial-gradient(circle at 30% 30%, rgba(255, 77, 109, 0.08) 0%, transparent 70%)",
                            "radial-gradient(circle at 70% 70%, rgba(201, 24, 74, 0.08) 0%, transparent 70%)",
                            "radial-gradient(circle at 50% 50%, rgba(251, 207, 232, 0.08) 0%, transparent 70%)"
                        ]
                    )
                }}
            />

            <div className="max-w-4xl text-center space-y-8 z-10">
                {lines.map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-2xl md:text-5xl font-light text-valentine-pink tracking-wide glow-text"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>

            <motion.div
                className="mt-24 max-w-2xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
            >
                <p className="text-valentine-red/80 italic text-xl border-t border-valentine-pink/10 pt-8">
                    “I don’t promise perfection,<br />
                    but I promise honesty, effort,<br />
                    and a love that chooses you every day.”
                </p>
            </motion.div>
        </section>
    );
};

export default Meaning;
