import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MemoryCard = ({ title, date, index, image, position, progress, total }) => {
    // Each card will have its own focal range in the vertical scroll
    const start = index / total;
    const end = (index + 1) / total;
    const isLast = index === total - 1;

    const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, isLast ? 1 : 0]);
    const scale = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0.5, 1, 1, isLast ? 1 : 0.9]);
    const y = useTransform(progress, [start, start + 0.1, end - 0.1, end], [100, 0, 0, isLast ? 0 : -100]);


    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="absolute inset-0 flex items-center justify-center p-6"
        >
            <div className="w-full max-w-4xl glass-card border-valentine-pink/30 p-2 md:p-4 relative overflow-hidden aspect-[4/5] md:aspect-[16/10] max-h-[70vh] md:max-h-[80vh]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl opacity-90"
                    style={{ objectPosition: position || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-romantic-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                    >
                        <span className="text-3xl md:text-4xl block mb-2">💝</span>
                        <h3 className="text-valentine-pink font-serif text-3xl md:text-5xl glow-text leading-tight">
                            {title}
                        </h3>
                        <p className="text-blush-pink italic text-lg md:text-xl font-light opacity-80">
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
            position: "center 40%" // Adjust as needed: "top", "bottom", "center 20%", etc.
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
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Title Overlay (Visible at start) */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
                        y: useTransform(scrollYProgress, [0, 0.05], [0, -50])
                    }}
                    className="absolute top-24 z-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl text-valentine-pink font-serif glow-text mb-4">
                        Moments That Matter
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-blush-pink/60 italic">
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

                {/* Scroll Progress Indicator */}
                <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                    {memories.map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-valentine-pink"
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [i / memories.length, (i + 0.5) / memories.length, (i + 1) / memories.length],
                                    [0.2, 1, 0.2]
                                ),
                                scale: useTransform(
                                    scrollYProgress,
                                    [i / memories.length, (i + 0.5) / memories.length, (i + 1) / memories.length],
                                    [1, 1.5, 1]
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
