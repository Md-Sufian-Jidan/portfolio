"use client";
import { experienceData } from "@/data";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="w-full py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Experience / Work History</h2>

                <div className="relative border-l-2 border-purple-500/30 pl-10 space-y-16">
                    {experienceData.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[18px] top-2 w-6 h-6 rounded-full bg-purple-500 shadow-lg shadow-purple-400/50 flex items-center justify-center">
                                {exp.logo && (
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-6 h-6 rounded-full object-contain"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-semibold">{exp.role}</h3>
                            <p className="text-purple-400 font-medium">{exp.company} | {exp.period}</p>
                            <p className="mt-2 text-gray-300 whitespace-pre-line">{exp.description}</p>

                            <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
                                {exp.responsibilities.map((res, idx) => (
                                    <li key={idx}>{res}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
