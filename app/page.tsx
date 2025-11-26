"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-br from-purple-50 to-indigo-100">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
        >
          JEE Mock Practice
        </motion.h1>

        <p className="mt-4 text-xl text-gray-700 max-w-2xl">
          Interactive JEE preparation with real-time feedback and detailed explanations.
        </p>

        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            className="mt-6 bg-purple-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg hover:bg-purple-700 transition"
          >
            Start Practicing 🚀
          </motion.button>
        </Link>
      </main>
    </>
  );
}
