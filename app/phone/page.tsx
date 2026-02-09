"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PhonePage() {
  const [phone, setPhone] = useState("");
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const router = useRouter();

  const handlePhoneVerification = () =>{
    router.push('/question')
  }

  return (
    <main className="container">
      <div className="card">
        <div className="logo">📱</div>

        <h1>
          Hi {name || "there"} <br />
          Enter your phone number
        </h1>

        <input
          className="input"
          type="tel"
          placeholder="10-digit mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="primary" onClick={handlePhoneVerification}>
          Verify Number
        </button>
      </div>
    </main>
  );
}
