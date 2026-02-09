"use client";

import { useState } from "react";

const funnyMessages = [
  "😏 Nice try, not happening!",
  "🙄 Are you sure about that?",
  "😂 Try again!",
  "🤔 Think carefully…",
  "🚫 Nope, wrong choice!",
  "😈 You almost had it!",
];

export default function Home() {
  const [message, setMessage] = useState("");
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [answeredYes, setAnsweredYes] = useState(false);

  const handleYes = () => {
    setAnsweredYes(true);
    setMessage("🎉 test msg");
  };

  const handleNo = () => {
    // Move the NO button
    setNoPosition({
      x: Math.floor(Math.random() * 200 - 100),
      y: Math.floor(Math.random() * 200 - 100),
    });

    // Pick a random funny message
    const randomMessage =
      funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    setMessage(randomMessage);
  };

  return (
    <main className="container">
      <div className="card">
        {/* IF YES WAS CLICKED → SHOW ONLY RESULT */}
        {answeredYes ? (
          <p className="message big">{message}</p>
        ) : (
          <>
            <div className="logo">💖</div>

            <h1>Will you be my valentine ?</h1>

            <div className="buttons">
              <button className="yes" onClick={handleYes}>
                Yes
              </button>

              <button
                className="no"
                onClick={handleNo}
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                }}
              >
                No
              </button>
            </div>

            {message && <p className="message">{message}</p>}
          </>
        )}
      </div>
    </main>
  );
}