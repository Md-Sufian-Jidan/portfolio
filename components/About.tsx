"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
    return (
        <section id="about" className="w-full py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-6 grid md:grid-cols-[0.38fr_0.62fr] gap-10 items-start">
                {/* Left Side: About Me + Fun Fact */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                    <p className="text-base text-gray-300 leading-relaxed">
                        I’m a passionate developer who loves crafting interactive web
                        experiences. My journey started with curiosity about how websites
                        worked, and over time, I’ve turned that curiosity into a full-stack
                        skillset. I enjoy blending creativity with functionality, and I’m
                        always looking for new challenges that push me forward.
                    </p>
                    <Card className="bg-slate-900 border border-purple-500/20 rounded-2xl shadow-lg">
                        <CardContent className="p-4">
                            <p className="italic text-gray-400">
                                💡 Fun Fact: I once built a website in a single weekend just to
                                avoid doing laundry — and it still gets traffic today!
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Right Side: Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-purple-500/30 space-y-10"
                >
                    {[
                        {
                            year: "2020",
                            text: "Started learning web development with HTML, CSS, and JavaScript.",
                        },
                        {
                            year: "2021",
                            text: "Built my first React projects and explored backend with Node.js.",
                        },
                        {
                            year: "2022",
                            text: "Dived into Next.js, TypeScript, and modern UI libraries.",
                        },
                        {
                            year: "2023",
                            text: "Worked on real-world freelance projects and open-source contributions.",
                        },
                        {
                            year: "2024",
                            text: "Expanding into 3D web experiences and advanced animations.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -left-[14px] top-1 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                            <h3 className="text-lg font-semibold">{item.year}</h3>
                            <p className="text-gray-400">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
