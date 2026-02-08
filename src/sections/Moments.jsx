import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MemoryCard = ({ title, date, index, image, position, progress, total }) => {
    // Each card will have its own focal range in the vertical scroll
    const start = index / total;
    const end = (index + 1) / total;
    const isLast = index === total - 1;

    // Mobile specific values
    const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, isLast ? 1 : 0]);
    const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.6, 1, 1, isLast ? 1 : 0.85]);
    const y = useTransform(progress, [start, start + 0.05, end - 0.05, end], [100, 0, 0, isLast ? 0 : -100]);


    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
        >
            <div className="w-full max-w-4xl glass-card border-valentine-pink/30 p-1.5 sm:p-4 relative overflow-hidden aspect-[3/4] sm:aspect-[16/10] max-h-[75vh] md:max-h-[80vh] shadow-[0_0_30px_rgba(255,77,109,0.1)]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-[1.25rem] sm:rounded-2xl opacity-90"
                    style={{ objectPosition: position || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-romantic-black/90 via-romantic-black/20 to-transparent rounded-[1.25rem] sm:rounded-2xl" />

                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-1 sm:space-y-2"
                    >
                        <span className="text-2xl sm:text-4xl block mb-1 sm:mb-2 drop-shadow-lg">💝</span>
                        <h3 className="text-valentine-pink font-serif text-2xl sm:text-5xl glow-text leading-tight drop-shadow-md">
                            {title}
                        </h3>
                        <p className="text-blush-pink italic text-base sm:text-xl font-light opacity-80 drop-shadow-md">
                            {date}
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Moments = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const memories = [
        {
            title: "The First Time We Met",
            date: "The day my world changed",
            image: "/The_first_time_we_met.jpg",
            position: "center 40%"
        },
        {
            title: "That Beautiful Smile",
            date: "The sun in my sky",
            image: "/That_beautiful_smile.jpg",
            position: "center"
        },
        {
            title: "Our Quiet Conversations",
            date: "Where hearts spoke loudest",
            image: "/Our_quite_conversations.jpg",
            position: "center"
        },
        {
            title: "The Laughter We Shared",
            date: "Music to my ears",
            image: "/The_loughter_we_shared.jpg",
            position: "center"
        },
        {
            title: "Every Little Moment",
            date: "Better because of you",
            image: "/Every_little_moment.jpg",
            position: "center 20%"
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-romantic-black/20">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Title Overlay (Visible at start) */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.04], [1, 0]),
                        y: useTransform(scrollYProgress, [0, 0.04], [0, -30])
                    }}
                    className="absolute top-16 sm:top-24 z-20 text-center px-4"
                >
                    <h2 className="text-3xl sm:text-6xl text-valentine-pink font-serif glow-text mb-3 sm:mb-4">
                        Moments That Matter
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-blush-pink/60 italic text-sm sm:text-base">
                        <span>Scroll slowly</span>
                        <motion.span
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ↓
                        </motion.span>
                    </div>
                </motion.div>

                {memories.map((memory, i) => (
                    <MemoryCard
                        key={i}
                        {...memory}
                        index={i}
                        progress={scrollYProgress}
                        total={memories.length}
                    />
                ))}

                {/* Scroll Progress Indicator - Mobile Hidden/Simplified */}
                <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-30">
                    {memories.map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-valentine-pink"
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [i / memories.length, (i + 0.5) / memories.length, (i + 1) / memories.length],
                                    [0.15, 1, 0.15]
                                ),
                                scale: useTransform(
                                    scrollYProgress,
                                    [i / memories.length, (i + 0.5) / memories.length, (i + 1) / memories.length],
                                    [1, 1.4, 1]
                                )
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Moments;
