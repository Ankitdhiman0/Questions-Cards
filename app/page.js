"use client";
import React, { useState } from "react";

const page = () => {
  const [selectedid, setselectedid] = useState(null);

  const Questions = [
    { id: 2338, Question: "What is ReactJS?", Answer: "UI library" },
    {
      id: 2336,
      Question: "What is a component in React?",
      Answer: "Reusable UI",
    },
    {
      id: 2331,
      Question: "What is the purpose of useState?",
      Answer: "Manage state",
    },
    {
      id: 2334,
      Question: "What are props in React?",
      Answer: "Data attributes",
    },
    {
      id: 2337,
      Question: "What is the Virtual DOM?",
      Answer: "In-memory representation",
    },
    { id: 2333, Question: "What is JSX?", Answer: "HTML-like syntax" },
  ];

  function handleSelected(id) {
    setselectedid(id !== selectedid ? id : null);
  }

  return (
    <>
      <div className="main">
        {Questions.map((questions) => (
          <div
            className={
              questions.id === selectedid ? "selected" : "rendered-list"
            }
            onClick={() => handleSelected(questions.id)}
            key={questions.id}
          >
            <p>
              {questions.id === selectedid
                ? questions.Answer
                : questions.Question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
