"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { questions } from "../data/questions";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [selected, setSelected] = useState<{ [key: number]: number | null }>({});
  const [result, setResult] = useState<{ [key: number]: boolean | null }>({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [filter, setFilter] = useState<"All" | "Math" | "Physics" | "Chemistry">("All");

  const allAnswered = questions.length === Object.keys(result).length;

  // Timer that stops when all questions are answered
  useEffect(() => {
    if (allAnswered) return;
    const timer = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, [allAnswered]);

  const handleSelect = (qid: number, index: number) => {
    if (selected[qid] !== undefined) return;

    const correctIndex = questions.find((x) => x.id === qid)?.answer;
    const correct = index === correctIndex;

    setSelected({ ...selected, [qid]: index });
    setResult({ ...result, [qid]: correct });

    if (correct) {
      setScore((s) => s + 1);
      confetti({ spread: 100, particleCount: 60 });
    }
  };

  const visibleQuestions = questions.filter(q => filter === "All" || q.subject === filter);

  return (
    <>
      <Navbar />
      <main className="pt-24 p-6 max-w-4xl mx-auto bg-gradient-to-b from-indigo-50 to-purple-100 min-h-screen">

        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="text-xl font-semibold">Score: {score} ✅</div>
        </div>

        {/* Timer */}
        {!allAnswered && (
          <div className="text-md text-gray-600 mb-4">
            ⏳ Time Left: {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,"0")}
          </div>
        )}

        {/* Completion Section */}
        {allAnswered && (
          <div className="text-center bg-green-50 border border-green-300 text-green-800 p-4 rounded-2xl shadow-md mb-6">
            <h3 className="text-2xl font-extrabold">✅ Test Completed</h3>
            <p className="mt-2 text-lg font-medium">You solved all questions. Great job! 🚀</p>
            <p className="mt-1 text-md">Final Score: <b>{score}/{questions.length}</b></p>
          </div>
        )}

        {/* Filter */}
        <div className="mb-6 flex gap-3 flex-wrap justify-center">
          {(["All", "Math", "Physics", "Chemistry"] as const).map(sub => (
            <button
              key={sub}
              onClick={() => setFilter(sub)}
              disabled={allAnswered}
              className={`px-4 py-2 rounded-xl text-md border shadow-sm transition ${
                filter === sub
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white/60 border-gray-300 hover:bg-white"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Questions */}
        {!allAnswered && visibleQuestions.map((q) => {
          const answered = selected[q.id] !== undefined;
          const correctOption = q.answer;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm p-5 mb-5 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-3">{q.id}. {q.question}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                {q.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: answered ? 1 : 1.04 }}
                    whileTap={{ scale: answered ? 1 : 0.97 }}
                    onClick={() => handleSelect(q.id, i)}
                    disabled={answered}
                    className={`p-3 border rounded-xl text-left transition ${
                      selected[q.id] === i
                        ? result[q.id] ? "bg-green-500 text-white border-green-500"
                                       : "bg-red-500 text-white border-red-500"
                        : answered && i === correctOption
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {String.fromCharCode(65+i)}. {opt}
                  </motion.button>
                ))}
              </div>

              {/* Feedback */}
              {answered && (
                <div className="mt-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-600">
                  <p className="font-bold text-lg">{ result[q.id] ? "✅ Correct!" : "❌ Incorrect!" }</p>
                  <p className="mt-2 text-gray-700"><strong>Explanation:</strong> {q.explanation}</p>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Home Redirect Button after completion */}
        {allAnswered && (
          <div className="mt-8 flex justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-3 rounded-2xl text-xl font-bold shadow-lg hover:bg-purple-700 transition"
              >
                Back to Home 🏠
              </motion.button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
