"use client";

import Heading from "./sub/Heading";

import { questions } from "@/assets";
import Question from "./sub/Question";

const Questions = () => {
  return (
    <div id="questions" className="py-20 px-96">
      <Heading text="Questions & Answers" />
      <div>
        <ul className="flex flex-col gap-y-3">
          {questions.map((question, index) => (
            <Question
              key={index}
              index={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
