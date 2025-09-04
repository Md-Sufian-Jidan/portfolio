"use client";
import { testimonials } from "@/data";
import { motion } from "framer-motion";
// import Image from "next/image";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-20 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-purple-300 mb-12">
                    Testimonials / Recommendations
                </h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-400"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{t.name}</h3>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">“{t.quote}”</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
