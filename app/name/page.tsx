"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NamePage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    if (!name.trim()) return;
    console.log(name)
    router.push(`/phone?name=${encodeURIComponent(name)}`);
    // router.push('/logo') // test command
  };

  const handleName = (newName: string) => {
    setName( (prevName)=> newName)
  }

  return (
    <main className="container">
      <div className="card">
        <div className="logo">♥️</div>

        <h1>What’s your name?</h1>

        <input
          className="input"
          type="text"
          placeholder="I know but still tell me"
          value={name}
          // onChange={(e) => setName(e.target.value)}
          onChange={(e)=>handleName(e.target.value)}
        />

        <button className="primary" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </main>
  );
}
