"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-5xl font-bold">JEE Question Practice</h1>
      <p className="mt-4 text-lg text-gray-600">
        Level up your JEE preparation with interactive mock questions.
      </p>

      <Link href="/dashboard">
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg text-xl shadow-lg hover:bg-purple-700 transition">
          Start Practicing 🚀
        </button>
      </Link>
    </main>
  );
}
