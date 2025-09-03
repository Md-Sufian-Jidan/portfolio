"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        // detect hover over links/buttons
        const addHoverEvents = () => {
            document.querySelectorAll("a, button").forEach((el) => {
                el.addEventListener("mouseenter", () => setHovered(true));
                el.addEventListener("mouseleave", () => setHovered(false));
            });
        };

        window.addEventListener("mousemove", mouseMove);
        addHoverEvents();

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", () => setHovered(true));
                el.removeEventListener("mouseleave", () => setHovered(false));
            });
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-purple-400"
            animate={{
                x: mousePos.x - (hovered ? 25 : 10),
                y: mousePos.y - (hovered ? 25 : 10),
                width: hovered ? 50 : 20,
                height: hovered ? 50 : 20,
                borderColor: hovered ? "#E2CBFF" : "#9333EA", // purple glow
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
}
