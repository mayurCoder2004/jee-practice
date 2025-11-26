"use client";

import { useState } from "react";
import { questions } from "../data/questions";

export default function Dashboard() {
  const [selected, setSelected] = useState<{[key:number]:number|null}>({}); 
  const [result, setResult] = useState<{[key:number]:boolean|null}>({});

  const checkAnswer = (qid: number, index: number) => {
    setSelected({...selected, [qid]: index});
    setResult({...result, [qid]: index === questions[qid - 1].answer});
  };

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-6">Practice Questions</h2>

      {questions.map((q) => (
        <div key={q.id} className="bg-white p-5 mb-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">{q.id}. {q.question}</h3>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => checkAnswer(q.id, i)}
                className={`border px-4 py-2 rounded-lg transition ${
                  selected[q.id] === i
                    ? result[q.id]
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {selected[q.id] !== undefined && (
            <p className="mt-3 text-lg font-medium">
              {result[q.id] ? "✅ Correct!" : "❌ Incorrect!"}
            </p>
          )}
        </div>
      ))}
    </main>
  );
}
