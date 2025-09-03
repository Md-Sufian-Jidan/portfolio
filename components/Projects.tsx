"use client";
import { projects } from "@/data";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CardContainer, CardItem } from "./ui/3d-card";

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">
                    Projects Showcase
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="group perspective"
                        >
                            <CardContainer className="relative w-full h-80 bg-slate-800 rounded-xl shadow-xl overflow-hidden">
                                <CardItem className="absolute inset-0 p-6 flex flex-col justify-between backface-hidden">
                                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm">{project.description}</p>
                                    <div className="mt-4 flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-purple-400 text-lg"
                                        >
                                            <FaGithub />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-purple-400 text-lg"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </CardItem>

                                <CardItem className="absolute inset-0 p-6 flex flex-col justify-start backface-hidden rotate-y-180 bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h4 className="text-lg font-bold mb-2">Key Features:</h4>
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        {project.features.map((feat, idx) => (
                                            <li key={idx}>{feat}</li>
                                        ))}
                                    </ul>
                                    <h4 className="text-lg font-bold mt-4 mb-2">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-200">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-purple-600/30 px-2 py-1 rounded-full backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardItem>
                            </CardContainer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
