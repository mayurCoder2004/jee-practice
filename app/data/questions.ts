export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  subject: "Math" | "Physics" | "Chemistry";
};

export const questions: Question[] = [
  {
    id: 1,
    question: "If a, b are roots of x² − 5x + 6 = 0, find a + b.",
    options: ["5", "6", "−5", "−6"],
    answer: 0,
    explanation: "For quadratic ax²+bx+c=0, sum of roots = −b/a → 5/1 = 5.",
    subject: "Math",
  },
  {
    id: 2,
    question: "The unit of electric field intensity is:",
    options: ["N/C", "C/N", "J/C", "V/A"],
    answer: 0,
    explanation: "Electric field (E) = Force/Charge → newton per coulomb (N/C).",
    subject: "Physics",
  },
  {
    id: 3,
    question: "Which of the following is an amphoteric oxide?",
    options: ["CO₂", "SO₂", "Al₂O₃", "CaO"],
    answer: 2,
    explanation: "Al₂O₃ reacts with both acids and bases → amphoteric in nature.",
    subject: "Chemistry",
  },
  {
    id: 4,
    question: "Velocity–time graph area gives:",
    options: ["Distance", "Speed", "Acceleration", "Momentum"],
    answer: 0,
    explanation: "Area under v–t graph = displacement/distance covered.",
    subject: "Physics",
  },
  {
    id: 5,
    question: "Total number of electrons in a neutral atom is equal to:",
    options: ["Mass number", "Atomic number", "Neutron number", "Valency"],
    answer: 1,
    explanation: "For a neutral atom: electrons = protons = atomic number.",
    subject: "Chemistry",
  },
  {
    id: 6,
    question: "Solve: ∫ 2x dx",
    options: ["x² + C", "2x² + C", "x + C", "2x + C"],
    answer: 0,
    explanation: "∫2x dx = 2 * x²/2 = x² + C.",
    subject: "Math",
  },
  {
    id: 7,
    question: "Which gas law states that V ∝ 1/P at constant T?",
    options: ["Charles law", "Boyle's law", "Gay-Lussac law", "Avogadro law"],
    answer: 1,
    explanation: "Boyle’s law → Pressure inversely proportional to volume.",
    subject: "Physics",
  },
  {
    id: 8,
    question: "Find the next term: 1, 3, 5, 7, 9, ?",
    options: ["10", "11", "12", "13"],
    answer: 1,
    explanation: "Sequence of odd numbers → next is 11.",
    subject: "Math",
  },
  {
    id: 9,
    question: "In SHM, acceleration is always:",
    options: ["Constant", "Towards mean position", "Away from mean position", "Zero"],
    answer: 1,
    explanation: "In SHM: a ∝ −x → always directed towards mean position.",
    subject: "Physics",
  },
  {
    id: 10,
    question: "Which of the following has the highest pH?",
    options: ["0.1 M HCl", "0.1 M NaCl", "0.1 M NaOH", "0.1 M CH₃COOH"],
    answer: 2,
    explanation: "NaOH is a strong base → highest pH value.",
    subject: "Chemistry",
  },
  {
    id: 11,
    question: "The work done in moving charge in an electric field is measured in:",
    options: ["Weber", "Volt", "Joule", "Tesla"],
    answer: 2,
    explanation: "Work done = energy transferred → SI unit is Joule.",
    subject: "Physics",
  },
  {
    id: 12,
    question: "✔ IUPAC name of CH₃–CH₂–OH is:",
    options: ["Methanol", "Ethanol", "Ethane", "Ethanal"],
    answer: 1,
    explanation: "2-carbon alcohol OH group → Ethanol.",
    subject: "Chemistry",
  },
  {
    id: 13,
    question: "Roots of equation x² − 7x + 10 = 0 are:",
    options: ["2,5", "−2,−5", "2,−5", "−2,5"],
    answer: 0,
    explanation: "Using factorization: (x−2)(x−5)=0 → 2, 5.",
    subject: "Math",
  },
  {
    id: 14,
    question: "The dimension of force is:",
    options: ["MLT⁻²", "MLT⁻¹", "MTL⁻²", "ML²T⁻²"],
    answer: 0,
    explanation: "Force = mass × acceleration → M × LT⁻² = MLT⁻².",
    subject: "Physics",
  },
  {
    id: 15,
    question: "Number of moles in 44g CO₂ is:",
    options: ["1", "2", "0.5", "4"],
    answer: 0,
    explanation: "Molar mass of CO₂ = 44 g/mol → 44g contains 1 mole.",
    subject: "Chemistry",
  }
];

