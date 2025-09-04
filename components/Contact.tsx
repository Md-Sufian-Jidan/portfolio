"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="w-full py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-purple-400 mb-12"
                >
                    Contact Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-8 rounded-xl shadow-lg space-y-6"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-purple-500 focus:ring-purple-500 outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-purple-500 focus:ring-purple-500 outline-none"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            required
                            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-purple-500 focus:ring-purple-500 outline-none"
                        />

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-semibold"
                        >
                            {status === "loading"
                                ? "Sending..."
                                : status === "success"
                                    ? "Message Sent ✅"
                                    : status === "error"
                                        ? "Something went wrong ❌"
                                        : "Send Message"}
                        </button>
                    </motion.form>

                    {/* Info + Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-6"
                    >
                        <p className="text-lg text-gray-300">
                            I’m always open to new opportunities, collaborations, or just a chat.
                            Let’s connect!
                        </p>

                        <div className="space-y-2">
                            <p className="font-semibold">📍 Location:</p>
                            <p className="text-gray-400">Dhaka, Bangladesh</p>
                            <p className="font-semibold mt-2">✅ Availability:</p>
                            <p className="text-gray-400">Open for full-time & freelance roles</p>
                        </div>

                        <div className="flex space-x-5 pt-4">
                            <a href="https://github.com/yourusername" target="_blank" className="hover:text-purple-400">
                                <Github size={28} />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-purple-400">
                                <Linkedin size={28} />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-purple-400">
                                <Twitter size={28} />
                            </a>
                            <a href="mailto:youremail@example.com" className="hover:text-purple-400">
                                <Mail size={28} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
