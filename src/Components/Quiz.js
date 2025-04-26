import React, { useState } from "react";
import "./quiz.css";

const questions = {
  diabetes: [
    {
      question: "What is considered a normal fasting blood sugar level?",
      options: ["70–99 mg/dL", "120–140 mg/dL", "150–180 mg/dL"],
      answer: "70–99 mg/dL",
      explanation: "Fasting levels below 100 mg/dL are considered normal.",
    },
    {
      question: "Which of the following is NOT a symptom of diabetes?",
      options: ["Frequent urination", "Weight gain", "Blurred vision"],
      answer: "Weight gain",
      explanation: "Weight **loss**, not gain, is a more common symptom.",
    },
    {
      question: "Which test measures long-term blood sugar control?",
      options: ["HbA1c", "BMI", "CBC"],
      answer: "HbA1c",
      explanation: "HbA1c gives average blood sugar over 2–3 months.",
    },
    {
      question: "Can diabetes be prevented or delayed?",
      options: ["Yes, with lifestyle changes", "No", "Only with surgery"],
      answer: "Yes, with lifestyle changes",
      explanation: "Healthy eating, exercise, and weight management help.",
    },
    {
      question: "Which organ is primarily affected in diabetes?",
      options: ["Heart", "Pancreas", "Liver"],
      answer: "Pancreas",
      explanation: "The pancreas makes insulin, which is key in diabetes.",
    },
  ],
  
 heart: [
  {
    question: "Which cholesterol level is considered healthy?",
    options: ["Below 200 mg/dL", "250–300 mg/dL", "Over 400 mg/dL"],
    answer: "Below 200 mg/dL",
    explanation: "Desirable total cholesterol is under 200 mg/dL.",
  },
  {
    question: "Which habit can help prevent heart disease?",
    options: ["Smoking", "Regular physical activity", "Stress eating"],
    answer: "Regular physical activity",
    explanation: "Exercise strengthens the heart and reduces risk.",
  },
  {
    question: "Which number indicates high blood pressure?",
    options: ["120/80 mm Hg", "140/90 mm Hg", "110/70 mm Hg"],
    answer: "140/90 mm Hg",
    explanation: "140/90 mm Hg or higher is classified as hypertension.",
  },
  {
    question: "Which symptom may indicate a heart attack?",
    options: ["Chest pain", "Mild cough", "Leg cramp"],
    answer: "Chest pain",
    explanation: "Sudden chest discomfort can be a heart attack warning.",
  },
  {
    question: "Which type of fat increases the risk of heart disease?",
    options: ["Unsaturated fat", "Trans fat", "Omega-3 fatty acids"],
    answer: "Trans fat",
    explanation: "Trans fats raise LDL (bad cholesterol) and risk.",
  },
],

};

export default function Quiz({ disease }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const quizSet = questions[disease] || [];

  const handleSelect = (option) => {
    setSelected(option);
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % quizSet.length);
    setSelected(null);
    setShowResult(false);
  };

  if (!quizSet.length) return <div>No quiz available for this disease.</div>;

  const q = quizSet[current];

  return (
    <div className="quiz-container">
      <h3>🧠 {q.question}</h3>
      <ul>
        {q.options.map((opt) => (
          <li
            key={opt}
            className={`option ${selected === opt ? "selected" : ""}`}
            onClick={() => handleSelect(opt)}>
            {opt}
          </li>
        ))}
      </ul>

      {showResult && (
        <div className="result">
          {selected === q.answer ? (
            <p className="correct">✅ Correct!</p>
          ) : (
            <p className="wrong">
              ❌ Wrong! Correct Answer: <strong>{q.answer}</strong>
            </p>
          )}
          <p className="explanation">💡 {q.explanation}</p>
          <button onClick={handleNext} className="nav-button">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
