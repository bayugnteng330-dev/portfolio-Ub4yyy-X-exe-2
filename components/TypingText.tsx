"use client";

import { useEffect, useState } from "react";

const texts = [
  "Junior Developer",
  "Web Developer",
  "Frontend Developer",
  "Informatics Student",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, deleting ? 45 : 90);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <div className="text-lg text-blue-400 md:text-2xl">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </div>
  );
}