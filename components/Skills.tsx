"use client";
import { motion } from "framer-motion";

const skillsData = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"],
    Tools: ["Git", "GitHub", "Vercel", "Docker", "ESLint"],
    Design: ["Figma", "Adobe XD", "Photoshop", "Canva"],
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
};

export default function Skills() {
    return (
        <section id="skills" className="w-full py-20 bg-gradient-to-r text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Skills & Tech Stack</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {Object.entries(skillsData).map(([category, skills], idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-purple-400">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        // variants={cardVariants}
                                        className="relative cursor-pointer group bg-slate-800 rounded-xl p-4 flex items-center justify-center text-white font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
                                    >
                                        {/* Glow Border */}
                                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="relative z-10">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
