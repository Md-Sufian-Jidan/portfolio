"use client";
import { posts } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <section id="blog" className="w-full py-20 text-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
                    Blog / Insights
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Blog Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6 flex flex-col justify-between h-56">
                                <div>
                                    <p className="text-sm text-gray-500">{post.date}</p>
                                    <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
                                    <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
                                </div>

                                <Link
                                    href={post.slug}
                                    className="mt-4 inline-block text-purple-600 font-semibold hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
