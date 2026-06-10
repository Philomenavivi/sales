"use client";

import Faq from "../Faq/page";

export default function Query() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <Faq
        question="What is this page about?"
        answer="This page is about selling advertising business."
      />

      <Faq
        question="What is the goal of this page?"
        answer="To gain more profit worldwide."
      />

      <Faq
        question="What is the challenge of this page?"
        answer="Not everyone is literate."
      />
    </div>
  );
}