"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b shadow-sm px-6 py-4 flex justify-between items-center fixed top-0 z-50">
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-purple-600" />
        <h1 className="text-2xl font-bold text-purple-600">JEE Practice</h1>
      </motion.div>
      <div className="flex gap-6 text-lg font-medium">
        <Link href="/" className="hover:text-purple-600 transition">Home</Link>
        <Link href="/dashboard" className="hover:text-purple-600 transition">Dashboard</Link>
      </div>
    </nav>
  );
}
