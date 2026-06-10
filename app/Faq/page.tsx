"use client";

import { useState } from "react";

export default function FAQ({
  question,
  answer,
}: {
  question: string;
  answer?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "gray",
        gap: "10px",
        color: "black",
        justifyContent: "space-between",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(113, 22, 155, 0.1)",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "10px",
        flexDirection: "column",
      }}
    >
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {question}
      </button>

      {isOpen && (
        <p>{answer ?? "Here is the answer to your question."}</p>
      )}
    </div>
  );
}