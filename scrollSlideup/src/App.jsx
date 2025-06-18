import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const greenY = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"]);
  const blueY  = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const purpleY = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="fixed h-screen w-full bg-red-500 flex flex-col items-center justify-center text-white text-5xl">
        <p>------------------------------------------</p>
        <p>Red stays</p>
        <p>------------------------------------------</p>
      </div>
      <motion.div
        style={{ y: greenY }}
        className="fixed h-screen w-full bg-green-500 flex flex-col items-center justify-center text-white text-5xl z-10"
      >
        <p>------------------------------------------</p>
        <p>green covers</p>
        <p>------------------------------------------</p>
      </motion.div>
      <motion.div
        style={{ y: blueY }}
        className="fixed h-screen w-full bg-blue-500 flex flex-col items-center justify-center text-white text-5xl z-20"
      >
        <p>------------------------------------------</p>
        <p>blue covers it</p>
        <p>------------------------------------------</p>
      </motion.div>
      <motion.div
        style={{ y: purpleY }}
        className="fixed h-screen w-full bg-purple-500 flex flex-col items-center justify-center text-white text-5xl z-30"
      >
        <p>------------------------------------------</p>
        <p>purple covers that</p>
        <p>------------------------------------------</p>
      </motion.div>
    </div>
  );
}