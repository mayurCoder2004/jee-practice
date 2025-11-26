export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the value of 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    id: 2,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2,
  },
  {
    id: 3,
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x²", "2"],
    answer: 1,
  },
];
